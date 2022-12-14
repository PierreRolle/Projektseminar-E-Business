/**
 * startPosition: Position, in der sich der Spieler am Anfang des Levels befindet [int,int]
 * endPosition: Position, in der der Spieler das Level verlassen kann [int, int]
 * currPlayerPosition: Position, in der sich der Spieler aktuell im Level befindet [int,int]
 * backgroundArray: Array, mit den einzelnen Feldern des Hintergrunds [[String]]
 * itemArray: Array, mit den einzelnen Items [[String]]
 * entityArray: Array, mit den einzelnen Entities (Spieler, Gegner) [[String]]
 */
export default class Level {
  constructor(level) {
    this.startPosition = level.startPosition;
    this.endPosition = level.endPosition;
    this.currPlayerPosition = level.startPosition;
    this.backgroundArray = level.backgroundArray;
    this.itemArray = level.itemArray;
    this.entityArray = level.entityArray;
    this.teleportPosition1 = level.teleportPosition1;
    this.teleportPosition2 = level.teleportPosition2;
  }

  /**
   * setzt background Array des aktuellen Levels
   */

  setBackgroundArray(backgroundArray) {
    this.backgroundArray = backgroundArray;
  }

  /**
   * setzt item Array des aktuellen Levels
   */

  setItemArray(itemArray) {
    this.itemArray = itemArray;
  }

  /**
   * setzt entity Array des aktuellen Levels
   */

  setEntityArray(entityArray) {
    this.entityArray = entityArray;
  }

  /**
   * @param {*Bewegung nach x} moveX
   * @param {*Bewegung nach y} moveY
   * setzt aktuelle Spieler Position in richtung von x und y
   */

  setCurrPlayerPositionFromXY(moveX, moveY) {
    let array = this.currPlayerPosition;
    array = [array[0] + moveX, array[1] + moveY];
    this.currPlayerPosition = array;
  }

  /**
   *
   * @param {*} currPlayerPosition
   * setzt aktuelle Spieler Position nach Werten
   */
  setCurrPlayerPosition(currPlayerPosition) {
    this.currPlayerPosition = currPlayerPosition;
  }

  /**
   *
   * @param {*} moveX
   * @param {*} moveY
   * entfernt Spieler aus Position, bevor er sich bewegt
   * setzt Spieler auf Position, wo er sich hinbewegt
   * entfernt tnt aus Item Array, falls sich der Spieler nun auf einem tnt befindet
   */
  movePlayerInArray(moveX, moveY) {
    let entityArray = this.entityArray;
    let itemArray = this.itemArray;

    entityArray[this.currPlayerPosition[1]][this.currPlayerPosition[0]] = "";
    entityArray[this.currPlayerPosition[1] + moveY][
      this.currPlayerPosition[0] + moveX
    ] = "p";

    this.setEntityArray(entityArray);
    this.setCurrPlayerPositionFromXY(moveX, moveY);

    if (
      itemArray[this.currPlayerPosition[1]][this.currPlayerPosition[0]] == "t2"
    ) {
      itemArray[this.currPlayerPosition[1]][this.currPlayerPosition[0]] = "";
      this.setItemArray = itemArray;
    }
  }

  /**
   *
   * @param {*} moveX
   * @param {*} moveY
   * @returns Das Item, was auf das sich der Spieler zu bewegt, falls ein Item vor ihm ist oder "leer", wenn der Spieler sich bewegen darf |
   *          oder falls, wenn er es nicht darf
   * überprüft, ob vor dem Spieler ein Item liegt
   * überprüft, ob vor dem Spieler Stein ("": Default wert des Leveldesigns, der mit Stein aufgefüllt wird), Sand ("13") oder Stein ("14")
   *
   */

  checkCollision(moveX, moveY) {
    let itemAhead =
      this.itemArray[this.currPlayerPosition[1] + moveY][
        this.currPlayerPosition[0] + moveX
      ];

    let isNotAccessableTerrain =
      this.backgroundArray[this.currPlayerPosition[1] + moveY][
        this.currPlayerPosition[0] + moveX
      ] == "" ||
      this.backgroundArray[this.currPlayerPosition[1] + moveY][
        this.currPlayerPosition[0] + moveX
      ] == "13" ||
      this.backgroundArray[this.currPlayerPosition[1] + moveY][
        this.currPlayerPosition[0] + moveX
      ] == "14";
    if (itemAhead != "s" && itemAhead != "x" && !isNotAccessableTerrain) {
      if (itemAhead == "") {
        return "leer";
      }
      return itemAhead;
    }
    return false;
  }

  /**
   *
   * @param {*} game aktuelles Spiel
   * @returns Überprüft, ob der Spieler im letzen Level ist und ob er sich auf der Endposition des Levels befindet
   */

  checkCanExitLevel(game) {
    return (
      game.currentLevel < game.maxLevel &&
      this.currPlayerPosition[0] == this.endPosition[0] &&
      this.currPlayerPosition[1] == this.endPosition[1]
    );
  }

  /**
   * entfernt Stein ("s") aus Item Array für alle Felder, die sich um den Spieler befinden (3x3)
   */

  placeTnt() {
    // save the position of the tnts that were placed so that they can be removed later
    // [[x1, y1], [x2, y2], [x3, y3]...]
    let tntsPlaced = [];
    let array;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        if (
          this.currPlayerPosition[1] + i >= 0 &&
          this.currPlayerPosition[1] + i <= 12 &&
          this.currPlayerPosition[0] + j >= 0 &&
          this.currPlayerPosition[0] + j <= 12
        ) {
          if (
            Math.pow(i, 2) != Math.pow(j, 2) &&
            this.itemArray[this.currPlayerPosition[1] + i][
              this.currPlayerPosition[0] + j
            ] == "s"
          ) {
            array = this.itemArray;
            array[this.currPlayerPosition[1] + i][
              this.currPlayerPosition[0] + j
            ] = "x";
            tntsPlaced.push([
              this.currPlayerPosition[1] + i,
              this.currPlayerPosition[0] + j,
            ]);
          }
        }
      }
    }
    return tntsPlaced;
  }
/**
 * Ueberprueft, ob der Spieler sich auf einem Teleporter-Feld befindet, wenn ja, wird ein Value >0 zurueckgegeben, sonst 0
 */
  checkCanTeleport() {
    if (this.currPlayerPosition[0] == this.teleportPosition1[0] &&
    this.currPlayerPosition[1] == this.teleportPosition1[1])
      {return 1;}
    if (this.currPlayerPosition[0] == this.teleportPosition2[0] &&
    this.currPlayerPosition[1] == this.teleportPosition2[1])
      {return 1;}
    return 0;
}
/**
 * Aendert die Position des Spielers je nach Teleportfeld. auf welchem er sich befindet
 * Referenziert das aktuell gezeichnete Entity-Array um es spaeter mit der neuen Spieler-Position zu ueberschreiben
 * Befindet sich der Spieler auf dem ersten Teleporter, wird die Spielerposition zur Position des Teleporters 2 geaendert und das array angepasst
 * Befindet sich der Spieler auf dem zweiten Teleporter, wird die Spielerposition zur Position des Teleporters 1 geaendert und das array angepasst
 * Es wird die Methode setEntityArray mit dem neuen Array aufgerufen
 */

  teleport() {
    let array = this.entityArray;
    let p0 = this.currPlayerPosition[0].valueOf();
    let p1 = this.currPlayerPosition[1].valueOf();
    array[this.currPlayerPosition[1]][this.currPlayerPosition[0]] = "";

    if(p1==this.teleportPosition1[1] && p0==this.teleportPosition1[0]){
      this.currPlayerPosition[0]=this.teleportPosition2[0];
      this.currPlayerPosition[1]=this.teleportPosition2[1];
      array[this.teleportPosition2[1]][this.teleportPosition2[0]] = "p";
    }

    if(p1==this.teleportPosition2[1] && p0==this.teleportPosition2[0]){
      this.currPlayerPosition[0]=this.teleportPosition1[0];
      this.currPlayerPosition[1]=this.teleportPosition1[1];
      array[this.teleportPosition1[1]][this.teleportPosition1[0]] = "p";
    }

    this.setEntityArray(array);
  }
}

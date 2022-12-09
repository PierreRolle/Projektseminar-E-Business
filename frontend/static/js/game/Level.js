export default class Level {
  constructor(level) {
    this.startPosition = level.startPosition;
    this.endPosition = level.endPosition;
    this.currPlayerPosition = level.startPosition;
    this.backgroundArray = level.backgroundArray;
    this.itemArray = level.itemArray;
  }

  setBackgroundArray(backgroundArray) {
    this.backgroundArray = backgroundArray;
  }

  setItemArray(itemArray) {
    this.itemArray = itemArray;
  }

  setCurrPlayerPositionFromXY(moveX, moveY) {
    let array = this.currPlayerPosition;
    array = [array[0] + moveX, array[1] + moveY];
    this.currPlayerPosition = array;
  }

  setCurrPlayerPosition(currPlayerPosition) {
    this.currPlayerPosition = currPlayerPosition;
  }

  movePlayerInArray(moveX, moveY) {
    let array = this.itemArray;
    array[this.currPlayerPosition[1]][this.currPlayerPosition[0]] = "";

    if (
      this.endPosition[0] == this.currPlayerPosition[0] &&
      this.endPosition[1] == this.currPlayerPosition[1]
    ) {
      array[this.currPlayerPosition[1]][this.currPlayerPosition[0]] = "l1";
    }

    array[this.currPlayerPosition[1] + moveY][
      this.currPlayerPosition[0] + moveX
    ] = "p";

    this.setItemArray(array);
    this.setCurrPlayerPositionFromXY(moveX, moveY);
  }

  checkCollision(moveX, moveY) {
    let itemAhead =
      this.itemArray[this.currPlayerPosition[1] + moveY][
        this.currPlayerPosition[0] + moveX
      ];

    let isWallAhead =
      this.backgroundArray[this.currPlayerPosition[1] + moveY][
        this.currPlayerPosition[0] + moveX
      ] == "" ||
      this.backgroundArray[this.currPlayerPosition[1] + moveY][
        this.currPlayerPosition[0] + moveX
      ] == "13";
    if (itemAhead != "s" && !isWallAhead) {
      if (itemAhead == "") {
        return "leer";
      }
      return itemAhead;
    }
    return false;
  }

  checkCanExitLevel(game) {
    return (
      game.currentLevel < game.maxLevel &&
      this.currPlayerPosition[0] == this.endPosition[0] &&
      this.currPlayerPosition[1] == this.endPosition[1]
    );
  }

  placeTnt() {
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
            this.itemArray[this.currPlayerPosition[1] + i][
              this.currPlayerPosition[0] + j
            ] == "s"
          ) {
            array = this.itemArray;
            array[this.currPlayerPosition[1] + i][
              this.currPlayerPosition[0] + j
            ] = "";
          }
        }
      }
    }
    this.setItemArray(array);
  }
}

export default class GameField {
  constructor(ctx, backgroundImage, itemImage, entityImage) {
    this.ctx = ctx;
    this.backgroundImage = backgroundImage;
    this.itemImage = itemImage;
    this.entityImage = entityImage;
  }

  /**
  ctx.drawImage(
  image,
  x1, Where to start the grab (x of source image)
  y1, Where to start the grab (y of source image)
  w1, How much to grab (width)
  h1, How much to grab (height)
  x2, Where to plop the grab on the canvas (x of canvas)
  y2, Where to plop the grab on the canvas (y of canvas)
  w2, How large to plop the grab (width of incoming stamp)
  h2  How large to plop the grab (height of incoming stamp)
);
*/

  /**
   *
   * @param {*} array
   * zeichnet den Hintergrund aus dem BackgroundArray auf die Canvas
   * holt sich dafür mit getBackgroundTile, den Abschnitt aus TileSets
   * drawImage Methode mit den oben erklärten Parametern
   */

  drawBackground(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        let backgroundTile = this.getBackgroundTile(array[j][i]);
        this.ctx.drawImage(
          this.backgroundImage,
          backgroundTile[0],
          backgroundTile[1],
          80,
          80,
          i * 40,
          j * 40,
          40,
          40
        );
      }
    }
  }

  /**
   *
   * @param {*} array
   * zeichnet die Items aus dem ItemArray auf die Canvas
   * analog zu drawBackground
   */
  drawItems(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        if (array[j][i] != "") {
          let itemTile = this.getItemTile(array[j][i]);
          this.ctx.drawImage(
            this.itemImage,
            itemTile[0],
            itemTile[1],
            80,
            80,
            i * 40,
            j * 40,
            40,
            40
          );
        }
      }
    }
  }

  /**
   *
   * @param {*} array
   * zeichnet die Entities aus dem EntityArray auf die Canvas
   * analog zu den anderen Draw Methoden
   */
  drawEntities(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        if (array[j][i] != "") {
          let entityTile = this.getEntityTile(array[j][i]);
          this.ctx.drawImage(
            this.entityImage,
            entityTile[0],
            entityTile[1],
            80,
            80,
            i * 40,
            j * 40,
            40,
            40
          );
        }
      }
    }
  }

  /**
   *
   * @param {*} backgroundId String Wert (key)
   * @returns Position auf der x und y Achse, in der sich das entsprechende Tile auf dem Tileset befindet
   * Zahlen Werte entsprechen den Werten, die sich im Discord unter "Implementierung" befinden
   * bezieht sich auf "TileSetBackground.png"
   */

  getBackgroundTile(backgroundId) {
    switch (backgroundId) {
      case "1":
        return [0, 0];
      case "2":
        return [80, 0];
      case "3":
        return [160, 0];
      case "4":
        return [240, 0];
      case "5":
        return [0, 80];
      case "6":
        return [80, 80];
      case "7":
        return [160, 80];
      case "8":
        return [240, 80];
      case "9":
        return [0, 160];
      case "10":
        return [80, 160];
      case "11":
        return [160, 160];
      case "12":
        return [240, 160];
      case "13":
        return [0, 240];
      case "14":
        return [80, 240];
      case "15":
        return [0, 480];
      case "16":
        return [80, 480];
      case "17":
        return [160, 480];
      case "18":
        return [240, 480];
      case "19":
        return [0, 560];
      case "20":
        return [240,400];
      case "21":
        return [80,560];
      case "22":
        return [160,560];
      case "23":
        return [240,560];
      case "24":
        return [0,640];
      case "25":
        return [80,640];
      case "26":
        return [160,640];
      case "27":
        return [240,640];
      case "28":
        return [0,720];
      case "29":
        return [80,720];
      case "30": 
        return [160,720]     
      default:
        return [0, 0];
    }
  }

  /**
   *
   * @param {*} ItemId String Wert (key)
   * @returns Position auf der x und y Achse, in der sich das entsprechende Tile auf dem Tileset befindet
   * Zahlen Werte entsprechen den Werten, die sich im Discord unter "Implementierung" befinden
   * bezieht sich auf "TileSetItems.png"
   */

  getItemTile(itemId) {
    switch (itemId) {
      case "t2":
        return [80, 160];
      case "x":
        return [240, 160];
      case "s":
        return [240, 80];
      case "l1":
        return [0, 0];
      case "l2":
        return [80, 0];
      case "l3":
        return [160, 0];
      case "pl":
        return [0, 80];
      case "pr":
        return [80, 80];
      case "tp":
        return [160, 80];
      case "tc":
        return [160,160];
      default:
        break;
    }
    return;
  }

  /**
   *
   * @param {*} entityId String Wert (key)
   * @returns Position auf der x und y Achse, in der sich das entsprechende Tile auf dem Tileset befindet
   * Zahlen Werte entsprechen den Werten, die sich im Discord unter "Implementierung" befinden
   * bezieht sich auf "TileSetEntities.png"
   */

  getEntityTile(entityId) {
    switch (entityId) {
      case "p":
        return [0, 0];
      case "m1":
        return [80, 0];
      case "m2":
        return [160, 0];
      default:
        break;
    }
    return;
  }
}

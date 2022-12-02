export default class GameField {
  constructor(ctx, backgroundImage, itemImage, playerImage) {
    this.ctx = ctx;
    this.backgroundImage = backgroundImage;
    this.itemImage = itemImage;
    this.playerImage = playerImage;
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

  getBackgroundTile(backgroundId) {
    switch (backgroundId) {
      case "1":
        return [0, 0];
        break;
      case "2":
        return [80, 0];
        break;
      case "3":
        return [160, 0];
        break;
      case "4":
        return [240, 0];
        break;
      case "5":
        return [0, 80];
        break;
      case "6":
        return [80, 80];
        break;
      case "7":
        return [160, 80];
        break;
      case "8":
        return [240, 80];
        break;
      case "9":
        return [0, 160];
        break;
      case "10":
        return [80, 160];
        break;
      case "11":
        return [160, 160];
        break;
      case "12":
        return [240, 160];
        break;
      case "13":
        return [80, 240];
        break;
      default:
        return [80, 240];
        break;
    }
    return;
  }

  getItemTile(itemId) {
    switch (itemId) {
      case "p":
        return [160, 80];
        break;
      case "t2":
        return [80, 160];
        break;
      case "s":
        return [240, 80];
        break;
      case "l1":
        return [0, 0];
        break;
      default:
        break;
    }
    return;
  }
}

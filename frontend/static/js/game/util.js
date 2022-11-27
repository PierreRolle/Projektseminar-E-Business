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

export default function movePlayer(
  currPlayerPosition,
  endPosition,
  moveX,
  moveY,
  itemArray
) {
  /**
   * clears new background tile
   */
  /**
   * removes player from old position in item array
   */
  itemArray[currPlayerPosition[1]][currPlayerPosition[0]] = "";
  if (
    endPosition[0] == currPlayerPosition[0] &&
    endPosition[1] == currPlayerPosition[1]
  ) {
    itemArray[currPlayerPosition[1]][currPlayerPosition[0]] = "l1";
  }
  /**
   * adds player to new position in item array
   */
  itemArray[currPlayerPosition[1] + moveY][currPlayerPosition[0] + moveX] = "p";

  return itemArray;
}

export function drawBackground(image, array, ctx) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      var backgroundTile = getBackgroundTile(array[j][i]);
      ctx.drawImage(
        image,
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

export function drawItems(itemImage, playerImage, array, ctx) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[j][i] != "") {
        var itemTile = getItemTile(array[j][i]);
        ctx.drawImage(
          itemImage,
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
 * @returns index of tile from TileSetBackground.png
 */

export function getBackgroundTile(backgroundId) {
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

function getItemTile(itemId) {
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

export function checkCollision(
  currPlayerPosition,
  moveX,
  moveY,
  backgroundArray,
  itemArray
) {
  var itemAhead =
    itemArray[currPlayerPosition[1] + moveY][currPlayerPosition[0] + moveX];

  var isWallAhead =
    backgroundArray[currPlayerPosition[1] + moveY][
      currPlayerPosition[0] + moveX
    ] == "" ||
    backgroundArray[currPlayerPosition[1] + moveY][
      currPlayerPosition[0] + moveX
    ] == "13";
  if (itemAhead != "s" && !isWallAhead) {
    if (itemAhead == "") {
      return "leer";
    }
    return itemAhead;
  }
  return false;
}

export function placeTnt(currPlayerPosition, itemArray) {
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      if (
        currPlayerPosition[1] + i >= 0 &&
        currPlayerPosition[1] + i <= 12 &&
        currPlayerPosition[0] + j >= 0 &&
        currPlayerPosition[0] + j <= 12
      ) {
        if (
          itemArray[currPlayerPosition[1] + i][currPlayerPosition[0] + j] == "s"
        ) {
          itemArray[currPlayerPosition[1] + i][currPlayerPosition[0] + j] = "";
        }
      }
    }
  }
  return itemArray;
}

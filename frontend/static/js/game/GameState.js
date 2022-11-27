import getLevel from "./Level.js";
import movePlayer, {
  checkCollision,
  drawBackground,
  drawItems,
  placeTnt,
} from "./util.js";

export default function startGame() {
  let currentLevel = 0;
  var maxLevel = 2;

  let life = 3;
  let bombCount = 0;

  var canvas = document.getElementById("gameCanvas");
  let ctx = canvas.getContext("2d");

  var backgroundImage = new Image();
  backgroundImage.src = "/static/images/TileSetBackground.png";
  var itemImage = new Image();
  itemImage.src = "/static/images/TileSetItems.png";
  var playerImage = new Image();
  playerImage.src = "/static/images/tiles/Spieler.png";

  const playLevel = (levelIndex) => {
    let level = getLevel(levelIndex);
    let backgroundArray = level.backgroundArray;
    let itemArray = level.itemArray;
    let currPlayerPosition = level.startPosition;

    backgroundImage.onload = () => {
      drawBackground(backgroundImage, backgroundArray, ctx);
    };

    playerImage.onload = () => {
      drawItems(itemImage, playerImage, itemArray, ctx);
    };

    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "w":
          if (currPlayerPosition[1] > 0) {
            var isTnt = false;
            if (
              (isTnt = checkCollision(
                currPlayerPosition,
                0,
                -1,
                backgroundArray,
                itemArray
              )) != false
            ) {
              itemArray = movePlayer(
                currPlayerPosition,
                level.endPosition,
                0,
                -1,
                itemArray
              );
              currPlayerPosition = [
                currPlayerPosition[0],
                currPlayerPosition[1] - 1,
              ];
              if (isTnt == "t2") {
                bombCount++;
              }
            }
          }
          break;
        case "s":
          if (currPlayerPosition[1] < 12) {
            var isTnt = false;
            if (
              (isTnt = checkCollision(
                currPlayerPosition,
                0,
                1,
                backgroundArray,
                itemArray
              )) != false
            ) {
              itemArray = movePlayer(
                currPlayerPosition,
                level.endPosition,
                0,
                1,
                itemArray
              );
              currPlayerPosition = [
                currPlayerPosition[0],
                currPlayerPosition[1] + 1,
              ];
              if (isTnt == "t2") {
                bombCount++;
              }
            }
          }
          break;
        case "a":
          if (currPlayerPosition[0] > 0) {
            var isTnt = false;
            if (
              (isTnt = checkCollision(
                currPlayerPosition,
                -1,
                0,
                backgroundArray,
                itemArray
              )) != false
            ) {
              itemArray = movePlayer(
                currPlayerPosition,
                level.endPosition,
                -1,
                0,
                itemArray
              );
              currPlayerPosition = [
                currPlayerPosition[0] - 1,
                currPlayerPosition[1],
              ];
              if (isTnt == "t2") {
                bombCount++;
              }
            }
          }
          break;

        case "d":
          if (currPlayerPosition[0] < 12) {
            var isTnt = false;
            if (
              (isTnt = checkCollision(
                currPlayerPosition,
                1,
                0,
                backgroundArray,
                itemArray
              )) != false
            ) {
              itemArray = movePlayer(
                currPlayerPosition,
                level.endPosition,
                1,
                0,
                itemArray
              );
              currPlayerPosition = [
                currPlayerPosition[0] + 1,
                currPlayerPosition[1],
              ];
              if (isTnt == "t2") {
                bombCount++;
              }
            }
          }
          break;
        case "e":
          if (
            currentLevel < maxLevel &&
            currPlayerPosition[0] == level.endPosition[0] &&
            currPlayerPosition[1] == level.endPosition[1]
          ) {
            level = getLevel(currentLevel + 1);
            backgroundArray = level.backgroundArray;
            itemArray = level.itemArray;
            currPlayerPosition = level.startPosition;
            currentLevel = currentLevel + 1;
          }
          break;
        case "p":
          console.log("bombs:",bombCount);
          if (bombCount > 0) {
            itemArray = placeTnt(currPlayerPosition, itemArray);
            bombCount--;
          }
          break;
        default:
          break;
      }
      drawBackground(backgroundImage, backgroundArray, ctx);
      drawItems(itemImage, playerImage, itemArray, ctx);
    });
  };

  playLevel(currentLevel);
}

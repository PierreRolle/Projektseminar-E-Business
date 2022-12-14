import Game from "./Game.js";
import Field from "./Field.js";
import Level from "./Level.js";
import getLevelFromDb from "./LevelDB.js";

export default function startGame() {
  let canvas = document.getElementById("gameCanvas");
  let ctx = canvas.getContext("2d");

  let backgroundImage = new Image();
  backgroundImage.src = "/static/images/TileSetBackground.png";
  let itemImage = new Image();
  itemImage.src = "/static/images/TileSetItems.png";
  let entityImage = new Image();
  entityImage.src = "/static/images/TileSetEntities.png";

  const field = new Field(ctx, backgroundImage, itemImage, entityImage);

  let firstLevel = new Level(getLevelFromDb(0));

  let gameProbs = {
    currentLevel: 0,
    maxLevel: 2,
    bombCount: 0,
    level: firstLevel,
    field: field,
  };

  const game = new Game(gameProbs);

  /**
   * Zeile 7 - 29 initialisieren das Spiel
   */

  /**
   * Durchlaufen des aktuellen Levels mit der Id levelIndex
   */
  const playLevel = (levelIndex) => {
    entityImage.onload = () => {
      game.field.drawBackground(game.level.backgroundArray);
      game.field.drawItems(game.level.itemArray);
      game.field.drawEntities(game.level.entityArray);
    };

    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "w":
          if (game.level.currPlayerPosition[1] > 0) {
            let isTnt = false;
            if ((isTnt = game.level.checkCollision(0, -1)) != false) {
              game.level.movePlayerInArray(0, -1);
              if (isTnt == "t2") {
                game.setBombCount(game.bombCount + 1);
                document.getElementById("tnt-count").innerHTML = game.bombCount;
              }
            }
          }
          break;
        case "s":
          if (game.level.currPlayerPosition[1] < 12) {
            let isTnt = false;
            if ((isTnt = game.level.checkCollision(0, 1)) != false) {
              game.level.movePlayerInArray(0, 1);
              if (isTnt == "t2") {
                game.setBombCount(game.bombCount + 1);
                document.getElementById("tnt-count").innerHTML = game.bombCount;
              }
            }
          }
          break;
        case "a":
          if (game.level.currPlayerPosition[0] > 0) {
            let isTnt = false;
            if ((isTnt = game.level.checkCollision(-1, 0)) != false) {
              game.level.movePlayerInArray(-1, 0);
              if (isTnt == "t2") {
                game.setBombCount(game.bombCount + 1);
                document.getElementById("tnt-count").innerHTML = game.bombCount;
              }
            }
          }
          break;

        case "d":
          if (game.level.currPlayerPosition[0] < 12) {
            let isTnt = false;
            if ((isTnt = game.level.checkCollision(1, 0)) != false) {
              game.level.movePlayerInArray(1, 0);
              if (isTnt == "t2") {
                game.setBombCount(game.bombCount + 1);
                document.getElementById("tnt-count").innerHTML = game.bombCount;
              }
            }
          }
          break;
        case "e":
          if (game.level.checkCanExitLevel(game)) {
            game.level.clearTimer()
            game.setLevel(getLevelFromDb(game.currentLevel + 1));
            game.incrementCurrentLevel();
            game.setBombCount(0);
            document.getElementById("tnt-count").innerHTML = game.bombCount;
          }
          break;
        case "p":
          if (game.bombCount > 0) {
            const tntsPlaced = game.level.placeTnt();
            game.setBombCount(game.bombCount - 1);
            document.getElementById("tnt-count").innerHTML = game.bombCount;
            setTimeout(() => {
              clearTnt(tntsPlaced, game);
              game.field.drawBackground(game.level.backgroundArray);
              game.field.drawItems(game.level.itemArray);
              game.field.drawEntities(game.level.entityArray);
            }, 1000);
          }
          break;
        case "r":
          game.level.clearTimer()
          game.setLevel(getLevelFromDb(game.currentLevel));
          game.setBombCount(0);
          document.getElementById("tnt-count").innerHTML = game.bombCount;
          break;
        default:
          break;
      }
      game.field.drawBackground(game.level.backgroundArray);
      game.field.drawItems(game.level.itemArray);
      game.field.drawEntities(game.level.entityArray);
    });
  };

  const clearTnt = (tntsPlaced, game) => {
    tntsPlaced.forEach((tnt) => {
      game.level.itemArray[tnt[0]][tnt[1]] = "";
    });
  };

  playLevel(game.currentLevel);
}

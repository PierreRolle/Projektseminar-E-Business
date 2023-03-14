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
    maxLevel: 15,
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
    document.getElementById("level-count").innerHTML = game.currentLevel+1;
    entityImage.onload = () => {
      game.field.drawBackground(game.level.backgroundArray);
      game.field.drawItems(game.level.itemArray);
      game.field.drawEntities(game.level.entityArray);
    };

    const intervalId = window.setInterval(function () {
      game.level.moveEnemies();
      if (game.level.playerGotKilled(0, 0)) {
        game.resetLevel();
      }
      game.field.drawBackground(game.level.backgroundArray);
      game.field.drawItems(game.level.itemArray);
      game.field.drawEntities(game.level.entityArray);
    }, 333);

    window.keyHandler = (e) => {
      switch (e.key) {
        case "w":
          if (game.level.currPlayerPosition[1] > 0) {
            let isTnt = false;
            if ((isTnt = game.level.checkCollision(0, -1)) != false) {
              if (game.level.playerGotKilled(0, -1)) {
                //checkt, ob Spieler auf Monster läuft
                game.resetLevel();
                break;
              }
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
              if (game.level.playerGotKilled(0, 1)) {
                //checkt, ob Spieler auf Monster läuft
                game.resetLevel();
                break;
              }
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
              if (game.level.playerGotKilled(-1, 0)) {
                //checkt, ob Spieler auf Monster läuft
                game.resetLevel();
                break;
              }
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
              if (game.level.playerGotKilled(1, 0)) {
                //checkt, ob Spieler auf Monster läuft
                game.resetLevel();
                break;
              }
              game.level.movePlayerInArray(1, 0);
              if (isTnt == "t2") {
                game.setBombCount(game.bombCount + 1);
                document.getElementById("tnt-count").innerHTML = game.bombCount;
              }
            }
          }
          break;

        case "e":
          if (game.level.checkCanTeleport() > 0) {
            game.level.teleport();
          }
          if (game.level.checkCanExitLevel(game)) {
            game.clearTimer();
            game.setLevel(getLevelFromDb(game.currentLevel + 1));
            game.incrementCurrentLevel();
            game.setBombCount(0);
            document.getElementById("tnt-count").innerHTML = game.bombCount;
            document.getElementById("level-count").innerHTML = game.currentLevel+1;
          }
          if (game.level.checkCanEndGame(game)) {
            window.location.href = "/end";
          }
          break;

        case "q":
          if (game.bombCount > 0) {
            const tntsPlaced = game.level.placeTnt();
            if (tntsPlaced.length !== 0) {
              game.setBombCount(game.bombCount - 1);
              document.getElementById("tnt-count").innerHTML = game.bombCount;
              game.startTntTimer(tntsPlaced);
            }
          }
          break;

        case "r":
          game.resetLevel();
          break;
        default:
          break;
      }
      if (game.level.playerGotKilled(0, 0)) {
        game.resetLevel();
      }
      game.field.drawBackground(game.level.backgroundArray);
      game.field.drawItems(game.level.itemArray);
      game.field.drawEntities(game.level.entityArray);
    };

    window.addEventListener("keydown", window.keyHandler);
  };

  playLevel(game.currentLevel);
}

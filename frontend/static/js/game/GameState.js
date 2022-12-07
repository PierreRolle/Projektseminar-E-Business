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
  let playerImage = new Image();
  playerImage.src = "/static/images/tiles/Spieler.png";

  const field = new Field(ctx, backgroundImage, itemImage, playerImage);

  let levelFromDb = getLevelFromDb(0);
  let firstLevel = new Level(levelFromDb);
  

  let gameProbs = {
    currentLevel: 0,
    maxLevel: 2,
    lifeCount: 3,
    bombCount: 0,
    level: firstLevel,
    field: field,
  };

  const game = new Game(gameProbs);

  const playLevel = (levelIndex) => {
    game.setLevel(getLevelFromDb(levelIndex));

    playerImage.onload = () => {
      game.field.drawBackground(game.level.backgroundArray);
      game.field.drawItems(game.level.itemArray);
    };

    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "w":
          if (game.level.currPlayerPosition[1] > 0) {
            let isTnt = false;
            if ((isTnt = game.level.checkCollision(0, -1)) != false) {
              game.level.movePlayerInArray(0, -1);
              if (isTnt == "t2") {
                game.setBombCount(1);
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
                game.setBombCount(1);
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
                game.setBombCount(1);
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
                game.setBombCount(1);
              }
            }
          }
          break;
        case "e":
          if (
            game.level.checkCanExitLevel(game)
          ) {
            game.setLevel(getLevelFromDb(game.currentLevel + 1));
            game.increaseCurrentLevel(1);
          }
          break;
        case "p":
          console.log("bombs:", game.bombCount);
          if (game.bombCount > 0) {
            game.level.placeTnt();
            game.setBombCount(-1);
          }
          break;
        default:
          break;
      }
      game.field.drawBackground(game.level.backgroundArray);
      game.field.drawItems(game.level.itemArray);
    });
  };

  playLevel(game.currentLevel);
}

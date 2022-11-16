import Title from "./Title";
import Button from "./Button";
import Background from "./Background";

function createTitle(canvas) {
  return new Title(canvas.width, canvas.height, "Die Schatzinsel");
}

function createStartButton(canvas, onClick) {
  return new Button(
    canvas.width / 2 - 300 / 2,
    canvas.height / 2 - 50,
    300,
    100,
    "Spiel starten",
    "green",
    "black",
    onClick
  );
}

function createManualButton(canvas, onClick) {
  return new Button(
    canvas.width / 2 - 300 / 2,
    canvas.height / 2 + 100,
    300,
    100,
    "Handbuch",
    "green",
    "black",
    onClick
  );
}

function createBackgroundStart(canvas){
  return new Background(
    canvas.width,
    canvas.height,
    '../img/HintergrundStartseite.png'
  )
}

function createBackgroundLevel1(canvas){
  return new Background(
    canvas.width,
    canvas.height,
    '../img/HintergrundLevel1.png'
  )
}
export { createTitle, createStartButton, createManualButton, createBackgroundStart, createBackgroundLevel1 };

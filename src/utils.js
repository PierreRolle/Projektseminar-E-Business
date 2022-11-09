import Title from "./Title";
import Button from "./Button";

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

export { createTitle, createStartButton, createManualButton };

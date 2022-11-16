"use strict";

import ElementList from "./Elementlist";
import Title from "./Title";
import Button from "./Button";
import { createTitle, createStartButton, createManualButton, createBackgroundLevel1, createBackgroundStart } from "./utils";

//----------------------

class Game {
  constructor() {
    this.canvas = window.document.getElementById("mycanvas");
    this.ctx = this.canvas.getContext("2d");
    this.setCanvasSize();
    this.raf; // request animation frame handle
    this.elementList = null;
    this.canvas.addEventListener("click", this.createMouseClickHandler());
  }

  //----------------------

  createMouseClickHandler() {
    return (event) => {
      this.elementList.mouseClick(event);
    };
  }

  setCanvasSize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  displayMenu() {
    this.elementList = new ElementList();
    this.elementList.add(createBackgroundStart(this.canvas));
    this.elementList.add(createTitle(this.canvas));
    this.elementList.add(
      createStartButton(this.canvas, this.startGame.bind(this))
    );
    this.elementList.add(
      createManualButton(this.canvas, this.displayManual.bind(this))
    );

    this.timeOfLastFrame = Date.now();
    this.raf = window.requestAnimationFrame(this.tick.bind(this));
  }

  startGame() {
    this.elementList = new ElementList();
    this.elementList.add(
    createBackgroundLevel1(this.canvas)
    );
  }

  displayManual() {
    this.elementList = new ElementList();
    this.elementList.add(
      new Title(this.canvas.width, this.canvas.height, "Handbuch")
    );
  }

  //----------------------

  stop() {
    window.cancelAnimationFrame(this.raf);
    this.elementList = null;
  }

  //----------------------

  tick() {
    //--- clear screen
    this.ctx.fillStyle = "rgba(255, 255, 255, 1)"; // alpha < 1 löscht den Bildschrim nur teilweise -> bewegte Gegenstände erzeugen Spuren
    this.ctx.fillRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);

    //--- draw elements
    this.elementList.draw(this.ctx);

    //--- execute element actions
    this.elementList.action();

    this.raf = window.requestAnimationFrame(this.tick.bind(this));
  }
}

export default Game;

"use strict";

import RandomWalkCircleElement from "./Randomwalkcircleelement";
import ElementList from "./Elementlist";

//----------------------

class Game {
  constructor() {
    this.canvas = window.document.getElementById("mycanvas");
    this.ctx = this.canvas.getContext("2d");
    this.setCanvasSize();
    this.raf; // request animation frame handle
    this.elementList = null;
  }

  //----------------------

  setCanvasSize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  start() {
    this.elementList = new ElementList();
    for (let i = 0; i < 60; i++) {
      this.elementList.add(new RandomWalkCircleElement(i * 10, 150));
    }

    this.timeOfLastFrame = Date.now();
    this.raf = window.requestAnimationFrame(this.tick.bind(this));
  }

  //----------------------

  stop() {
    window.cancelAnimationFrame(this.raf);
    this.elementList = null;
  }

  //----------------------

  tick() {
    //--- clear screen
    this.ctx.fillStyle = "rgba(235, 250, 255, 0)"; // alpha < 1 löscht den Bildschrim nur teilweise -> bewegte Gegenstände erzeugen Spuren
    this.ctx.fillRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);

    //--- draw elements
    this.elementList.draw(this.ctx);

    //--- execute element actions
    this.elementList.action();

    this.raf = window.requestAnimationFrame(this.tick.bind(this));
  }
}

export default Game;

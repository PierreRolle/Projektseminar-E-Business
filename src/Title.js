"use strict";

import Element from "./Element";

class Title extends Element {
  constructor(canvasWidth, canvasHeight, text) {
    super();
    this.x = canvasWidth / 2;
    this.y = canvasHeight / 3;
    this.text = text;
    this.fontSize = 90;
    this.font = "Arial";
    this.color = "black";
    this.align = "center";
    this.baseline = "middle";
  }

  //----------------------

  draw(ctx) {
    ctx.font = this.fontSize + "px " + this.font;
    ctx.fillStyle = this.color;
    ctx.textAlign = this.align;
    ctx.textBaseline = this.baseline;
    ctx.fillText(this.text, this.x, this.y);
  }

  //----------------------

  mouseClick(e) {}
}

export default Title;

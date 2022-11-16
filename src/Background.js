"use strict";

import Element from "./Element";

class Background extends Element {
  constructor(canvasWidth, canvasHeight, src) {
    super();
    this.x = canvasWidth/4 + 50;
    this.y = 40;
    this.src = src;
  }
  //----------------------

  draw(ctx){
    const image = new Image();
    image.src = this.src;
    ctx.drawImage(image, this.x, this.y);
    }

    mouseClick(e){}
}

export default Background;
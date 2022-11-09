import Element from "./Element";

class Button extends Element {
  constructor(x, y, width, height, text, color, textColor, onClick) {
    super();
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = text;
    this.color = color;
    this.textColor = textColor;
    this.onClick = onClick;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);

    ctx.fillStyle = this.textColor;
    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.fillText(this.text, this.x + this.width / 2, this.y + this.height / 2);
  }

  mouseClick(e) {
    if (
      e.clientX > this.x &&
      e.clientX < this.x + this.width &&
      e.clientY > this.y &&
      e.clientY < this.y + this.height
    ) {
      this.onClick();
    }
  }
}

export default Button;

import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(probs) {
    super(probs);
    this.setTitle("Game");
    this.path = "/game"
  }

  async getHtml() {
    return `
      <div class="gameContainer">
        <div class="gameHeader">
          <h3>Hier stehen Herzen</h3>
          <a href="/mainMenu" class="closeButton" data-link>X</a> 
        </div>
        <div>
          <canvas width="520px" height="520px" id="gameCanvas"></canvas>
        </div>
      </div>
        `;
  }
}

  
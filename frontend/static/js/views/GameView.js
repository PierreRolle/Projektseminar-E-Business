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
          <div style="font-weight:bold; display:flex">
            <div style="padding-right: 10px">Tnt:</div>
            <div id="tnt-count">0</div>
          </div>
          <div id="timer" style="font-weight:bold">90 Sek.</div>
          <a href="/mainMenu" class="closeButton" data-link>X</a> 
        </div>
        <div>
          <canvas width="520px" height="520px" id="gameCanvas"></canvas>
        </div>
      </div>
        `;
  }
}

  
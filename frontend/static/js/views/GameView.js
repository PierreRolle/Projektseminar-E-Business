import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(probs) {
    super(probs);
    this.setTitle("Game");
    this.path = "/game";
  }

  async getHtml() {
    return `
      <div class="gameContainer">
        <div class="gameHeader">
          <div style="font-weight:bold; display:flex">
            <div style="padding-right: 10px">Tnt:</div>
            <div id="tnt-count">0</div>
          </div>
          <div style="font-weight:bold; display:flex">
            <div id="time-to-complete" style="padding-right:10px"></div>
            <div>Sek.</div>
          </div>
          <div style="font-weight:bold; display:flex">
            <div style="padding-right: 10px">Level:</div>
            <div id="level-count">1</div>
          </div> 
          <a href="/mainMenu" class="closeButton" data-link onclick="
          (() => {
            Array.from(Array(1000).keys()).map((e) => {
        clearInterval(e);
      });
            window.removeEventListener('keydown', window.keyHandler);
          })()
          ">
            <img src="/static/images/Exit.png"
          height = "24px" width = "24px" >
          </a> 
        </div>
        <div>
          <canvas width="520px" height="520px" id="gameCanvas"></canvas>
        </div>
      </div>
        `;
  }
}

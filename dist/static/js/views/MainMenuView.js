import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(probs) {
    super(probs);
    this.setTitle("Main Menu");
  }

  /* getHtml() {
    return `
      <div>
        <img src="/static/images/Schatzinsel_Überschrift.png" width = "500px">
        <nav>
          <a href="/game" class="button" data-link>
            Spiel starten
          </a>
          <a href="/manual" class="button" data-link>
            Handbuch öffnen
          </a>
        </nav>
      </div>
      `;
  } */

  getHtml() {
    return `
      <div>
        <img src="/static/images/Schatzinsel_Überschrift.png" width = "500px">
        <nav>
          <button id="Spiel" class="button">
            Spiel starten
          </button>
          <button id="Handbuch" class="button">
            Handbuch öffnen
          </button>
        </nav>
      </div>
      `;
  }
}

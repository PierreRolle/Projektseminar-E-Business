import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(probs) {
    super(probs);
    this.setTitle("Main Menu");
  }

  async getHtml() {
    return `
      <div>
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
  }
}

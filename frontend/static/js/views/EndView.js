import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(probs) {
    super(probs);
    this.setTitle("End");
  }

  async getHtml() {
    return `
    <div class="manualContainer">
        <div class="manualButtonContainer">
            <a href="/mainMenu" class="closeButton" data-link>X</a>
        </div>
        <h2 class="header">Hier ist das Ende</h2>
        <p>
             EnRiedel
        </p>
        <a href="/mainMenu" class="button" data-link>Zurück zum Hauptmenü!</a>
    </div>
    `;
  }
}

import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(probs) {
    super(probs);
    this.setTitle("Main Menu");
  }

  async getHtml() {
    return `
        <div class="manualContainer">
          <div class="manualButtonContainer">
            <a href="/mainMenu" class="closeButton" data-link>X</a>
          </div>
          <h2 class="header">Hier stehen Handbuch-Sachen</h2>
          <p>
            Für WASD braucht man nur eine Hand.
          </p>
      </div>
    `;
  }
}

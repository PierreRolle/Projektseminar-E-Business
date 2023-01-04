import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(probs) {
    super(probs);
    this.setTitle("End");
  }

  async getHtml() {
    return `
    <div class="manualContainerEnd">
        <div class="manualButtonContainer">
            <a href="/mainMenu" class="closeButton" data-link>X</a>
        </div>
        <img class="headerEnd imageEnd" src="/static/images/Schatzinsel_Überschrift.png" width = "500px">
        <img class="imageEnd" src="/static/images/Schatz_geborgen.png" width = "500px">
        <img src="/static/images/Herzlichen_Glückwunsch.png" width = "500px">
        <a href="/mainMenu" class="button" data-link>Zurück zum Hauptmenü!</a>
    </div>
    `;
  }
}

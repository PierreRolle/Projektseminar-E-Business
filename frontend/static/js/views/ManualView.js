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
            <a href="/mainMenu" class="closeButton" data-link><img src="/static/images/Exit.png"
            height = "24px" width = "24px" ></a>
          </div>
          <h2 class="header">Dein Freund und Helfer</h2>
          <p>
            Für WASD braucht man nur eine Hand.</br>
            Bewegung: </br>
            <img src="/static/images/tiles/WTaste.png" height = "48px" width = "48px">: Hoch </br>
            <img src="/static/images/tiles/STaste.png" height = "48px" width = "48px">: Runter </br>
            <img src="/static/images/tiles/ATaste.png" height = "48px" width = "48px">: Links </br>
            <img src="/static/images/tiles/DTaste.png" height = "48px" width = "48px">: Rechts </br>
            </br>
            Aktionen: </br>
            <img src="/static/images/tiles/RTaste.png" height = "48px" width = "48px">: zum reseten des Levels </br>
            <img src="/static/images/tiles/ETaste.png" height = "48px" width = "48px">: - Teleport, wenn auf einem Teleporter benutzt </br>
               - ins nächste Level gehen, wenn auf ein Leiter nach unten benutzt</br>
               - beenden des Spiels , wenn auf der Schatztruhe benutzt</br>
            <img src="/static/images/tiles/QTaste.png" height = "48px" width = "48px">: zum Dynamit legen </br>
            </br>
          Gegner:</br>
            <img src="/static/images/tiles/Fledermaus.png" height = "48px" width = "48px">: Ein vertikal gehender Gegner. Trifft sie auf eine Wand dreht sei um. Hüte dich vor ihren fiesen Zähnen. </br>
            Sie ist außerdem sehr robust und dementsprechend nicht wegsprengbar.</br>
            <img src="/static/images/tiles/Käfer.png" height = "48px" width = "48px">: Ein horizontal gehender Gegner. Trifft er auf eine Wand, dreht er um. Hüte dich vor seinen spitzen Mundwerkzeugen.</br>
            Erist außerdem sehr robust und dementsprechend nicht wegsprengbar.</br>
          Items: </br>
          <img src="/static/images/tiles/Tnt-klein.png" height = "48px" width = "48px">: Deine wichtigsten Freunde auf deiner Reise. Kann zum Steine sprengen genutzt werden. </br>
          <img src="/static/images/tiles/Stein.png" height = "48px" width = "48px">: Dein häufigster Feind. Er steht im Weg und muss weg. Kann mit Dynamit weggesprengt werden. </br>
          <img src="/static/images/tiles/Teleporter.png" height = "48px" width = "48px">: Ist meist im Duo anzutreffen. Kann benutzt werden zum teleportieren.</br>
          </p>
      </div>
    `;
  }
}

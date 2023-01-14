import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(probs) {
    super(probs);
    this.setTitle("Handbuch_2");
  }

  async getHtml() {
    return `
        <div class="manualContainer">
          <div class="manualButtonContainer">
            <a href="/manual" class="closeButton" data-link> <img src="/static/images/tiles/Zurueck.png"
            height = "24px" width = "24px" > </a>
            <a href="/mainMenu" class="closeButton" data-link><img src="/static/images/Exit.png"
            height = "24px" width = "24px" ></a>
          </div>
          <h2 class="header">Dein Freund und Helfer</h2>
          <p>
          <div class="headL">
            Gegner:</br></br>
          </div>

          <div class="ItemsandEnemies"> 
            <img src="/static/images/tiles/Fledermaus.png" height = "48px" width = "48px">
              
            <div class="minus"> Ein vertikal gehender Gegner. Trifft sie auf eine Wand, dreht sie um. 
            Hüte dich vor ihren fiesen Zähnen.
            Sie ist außerdem sehr robust und dementsprechend nicht wegsprengbar.
            </div> 
          </div>
          </br>

          <div class="ItemsandEnemies"> 
            <img src="/static/images/tiles/Käfer.png" height = "48px" width = "48px">
              
            <div class="minus"> Ein horizontal gehender Gegner. Trifft er auf eine Wand, dreht er um. 
            Hüte dich vor seinen spitzen Mundwerkzeugen.</br>
            Er ist sehr robust und dementsprechend nicht wegsprengbar.
            </div>
          </div></br>
          

          <div class="headL">
            Items: </br></br>
          </div>
          <div class="ItemsandEnemies">
            <img src="/static/images/tiles/Tnt-klein.png" height = "48px" width = "48px">
              
            <div class="minus">  Deine wichtigsten Freunde auf deiner Reise. 
            Kann zum Steine sprengen genutzt werden.
            </div> </br>

          </div>
          </br>

          <div class="ItemsandEnemies">
            <img src="/static/images/tiles/Stein.png" height = "48px" width = "48px">
              
            <div class="minus">  
            Dein häufigster Feind. Er steht im Weg und muss weg. 
            Kann mit Dynamit weggesprengt werden. </br>
            </div>
          </div>
          </br>
          <div class="ItemsandEnemies">
            <img src="/static/images/tiles/Teleporter.png" height = "48px" width = "48px">
              
            <div class="minus"> 
            Ist meist im Duo anzutreffen. Zwischen ihnen kann man sich hin und her teleportieren.</br>
            </div>
          </div>
          </p>
      </div>
    `;
  }
}

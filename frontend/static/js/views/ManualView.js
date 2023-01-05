import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(probs) {
    super(probs);
    this.setTitle("Handbuch");
  }

  async getHtml() {
    return `
        <div class="manualContainer">
          <div class="manualButtonContainer">
            <a href="/manual2" class="weiter" data-link> <img src="/static/images/tiles/Weiter.png"
            height = "24px" width = "24px" > </a>
              <div class="closebutton">
              <a href="/mainMenu" class="closeButton" data-link><img src="/static/images/Exit.png"
              height = "24px" width = "24px" ></a> </div>
          </div>
          <h2 class="header">Dein Freund und Helfer</h2>
          <p>
            Für WASD braucht man nur eine Hand.</br>

          <div class="headL">
            Bewegung:
          </div>

          <div class="Button"> 
            <img src="/static/images/tiles/WTaste.png" height = "48px" width = "48px">- Hoch </br>
          </div>

          <div class="Button"> 
            <img src="/static/images/tiles/STaste.png" height = "48px" width = "48px">- Runter </br>
          </div>

          <div class="Button">
            <img src="/static/images/tiles/ATaste.png" height = "48px" width = "48px">- Links </br>
          </div>

          <div class="Button">
            <img src="/static/images/tiles/DTaste.png" height = "48px" width = "48px">- Rechts </br>
          </div>
            </br>

          <div class="headL">
            Aktionen: </br>
          </div>

          <div class="Button"> 
            <img src="/static/images/tiles/RTaste.png" height = "48px" width = "48px">
            - Wiederholen des Levels </br>
          </div>
          </br>
          <div class="Button">
            <img src="/static/images/tiles/ETaste.png" height = "48px" width = "48px">
              <div class="Zeile">
               - Teleportiert, wenn auf 
              <img src="/static/images/tiles/Teleporter.png" height = "16px" width = "16px"> 
              benutzt wird. </br>
               - Bringt einen ins nächste Level, wenn es auf 
              <img src="/static/images/tiles/Leiter2.png" height = "16px" width = "16px"> 
               benutzt wird.</br> 
               - Birgt den Schatz, wenn es auf 
               <img src="/static/images/tiles/TreasureChest.png" height = "16px" width = "16px"> 
               benutzt wird. </br>
               </div>
          </div>  
          </br>
          <div class="Button">  
            <img src="/static/images/tiles/QTaste.png" height = "48px" width = "48px">
            - <div class="minus">
             zum Dynamit legen (sprengt Steine in horizontaler und vertikaler Richtung) </br>
          </div>

            </br>
          </p>
      </div>
    `;
  }
}

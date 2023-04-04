import { startGame } from "./game/GameState.js";

document.querySelector("#app").innerHTML = `
    <div>
    <img src="/static/images/Schatzinsel_Überschrift.png" width = "500px">
    <div>
      <button class="button" id="toGameButton">
        Spiel starten
      </button>
      <button class="button" onClick="changeToManual();">
        Handbuch öffnen
      </button>
    </div>
    </div>
`;

document.addEventListener("click", (e) => {
  if (e.target.id == "toGameButton") {
    setTimeout(() => {
      changeToGame();
      startGame();
    }, 100);
  }
});

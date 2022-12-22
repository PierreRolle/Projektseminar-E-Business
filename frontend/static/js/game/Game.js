import Level from "./Level.js";
import getLevelFromDb from "./LevelDB.js";

export default class Game {
  constructor(probs) {
    this.probs = probs;
    this.currentLevel = this.probs.currentLevel;
    this.maxLevel = this.probs.maxLevel;
    this.bombCount = this.probs.bombCount;
    this.level = this.probs.level;
    this.field = this.probs.field;
    this.timer = this.startTimer();
  }

  /**
   *
   * @param {*} level
   * setzt Level auf neue Instanz der Klasse Level
   */

  setLevel(level) {
    this.level = new Level(level);
    this.timer = this.startTimer();
  }

  /**
   *
   * @param {*} levelDiff
   * inkrementiert Level
   */

  incrementCurrentLevel() {
    this.currentLevel = this.currentLevel + 1;
  }

  /**
   * 
   * @param {*} bombCount
   * setzt Anzahl der Bombem auf übergebenen Wert 
   */

  setBombCount(bombCount) {
    this.bombCount = bombCount;
  }

  startTimer() {
    document.getElementById("time-to-complete").innerHTML = this.level.timeToComplete;
    const timer = setInterval(() => {
      this.level.timeToComplete--;
      document.getElementById("time-to-complete").innerHTML = this.level.timeToComplete;
      if (this.level.timeToComplete === 0) {
        this.resetLevel()
      }
    }, 1000);
    return timer
  }

  clearTimer() {
    clearInterval(this.timer);
  }

  resetLevel() {
    this.clearTimer()
    this.clearTntTimer()
    this.setLevel(getLevelFromDb(this.currentLevel));
    this.setBombCount(0);
    document.getElementById("tnt-count").innerHTML = this.bombCount;
  }

  startTntTimer(tntsPlaced) {
    this.tntTimer = setTimeout(() => {
        this.clearTnt(tntsPlaced);
        this.field.drawBackground(this.level.backgroundArray);
        this.field.drawItems(this.level.itemArray);
        this.field.drawEntities(this.level.entityArray);
    }, 800);
  }

  clearTntTimer() {
    clearTimeout(this.tntTimer);
  }

  clearTnt = (tntsPlaced) => {
    tntsPlaced.forEach((tnt) => {
      this.level.itemArray[tnt[0]][tnt[1]] = "";
    });
  };
}

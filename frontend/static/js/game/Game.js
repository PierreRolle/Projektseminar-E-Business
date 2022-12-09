import Level from "./Level.js";

export default class Game {
  constructor(probs) {
    this.probs = probs;
    this.currentLevel = this.probs.currentLevel;
    this.maxLevel = this.probs.maxLevel;
    this.bombCount = this.probs.bombCount;
    this.level = this.probs.level;
    this.field = this.probs.field;
  }

  /**
   *
   * @param {*} level
   * setzt Level auf neue Instanz der Klasse Level
   */

  setLevel(level) {
    this.level = new Level(level);
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
}

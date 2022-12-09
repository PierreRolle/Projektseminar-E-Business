import Level from "./Level.js";

export default class Game {
  constructor(probs) {
    this.probs = probs;
    this.currentLevel = this.probs.currentLevel;
    this.maxLevel = this.probs.maxLevel;
    this.lifeCount = this.probs.lifeCount;
    this.bombCount = this.probs.bombCount;
    this.level = this.probs.level;
    this.field = this.probs.field;
  }

  setLevel(level) {
    this.level = new Level (level);
  }

  increaseCurrentLevel(levelDiff) {
    this.currentLevel = this.currentLevel + levelDiff;
  }
a
  setBombCount(bombDiff) {
    this.bombCount = this.bombCount + bombDiff;
  }
}

export default class {
  constructor(backgroundLayer, collisionLayer, elementLayer) {
    this.backgroundLayer = backgroundLayer;
    this.collisionLayer = collisionLayer;
    this.elementLayer = elementLayer;
  }

  setTitle(title) {
    document.title = title;
  }

  async getHtml() {
    return "";
  }
}

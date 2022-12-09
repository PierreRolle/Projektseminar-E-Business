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
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
            rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
            ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
            dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
            est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in
            hendrerit in vulputate velit esse molestie consequat, vel illum dolore
            eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
            dignissim qui blandit praesent luptatum zzril delenit augue duis dolore
            te feugait nulla facilisi. Lorem ipsum dolor sit amet,olores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
            est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in
            hendrerit in vulputate velit esse molestie consequat, vel illum dolore
            eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
            dignissim qui blandit praesent luptatum zzril delenit augue duis dolore
            te feugait nulla facilisi. Lorem ipsum dolor sit amet,eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
            dignissim qui blandit praesent luptatum zzril delenit augue duis dolore
            te feugait nulla facilisi. Lorem ipsum,
          </p>
      </div>
    `;
  }
}

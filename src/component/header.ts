export function headerComp() {
  class HeaderComp extends HTMLElement {
    constructor() {
      super();

      var headerEl = document.createElement("div");
      headerEl.setAttribute("class", "headerCompClass");
      var styleheaderEl = document.createElement("style");
      this.appendChild(styleheaderEl);
      this.appendChild(headerEl);
    }
  }
  customElements.define("header-comp", HeaderComp);
}

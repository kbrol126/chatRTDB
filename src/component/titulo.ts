export function titlecomp() {
  class TitleComp extends HTMLElement {
    constructor() {
      super();
      var variant = this.getAttribute("titleText") || "label";
      var headerEl = document.createElement("h1");
      headerEl.innerText = variant;
      headerEl.setAttribute("class", "titlecompClass");
      var styleheaderEl = document.createElement("style");
      this.appendChild(styleheaderEl);
      this.appendChild(headerEl);
    }
  }
  customElements.define("title-comp", TitleComp);
}

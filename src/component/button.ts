export function buttonComp() {
  class ButtonClass extends HTMLElement {
    constructor() {
      super();

      let variant = this.getAttribute("buttonText") || "log in";
      //creo el div contenedor
      let buttonEl = document.createElement("button");
      buttonEl.innerText = variant;
      buttonEl.setAttribute("class", "buttonComp");

      this.appendChild(buttonEl);
    }
  }
  customElements.define("button-comp", ButtonClass);
}

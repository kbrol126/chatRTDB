export function buttonComp() {
  class ButtonClass extends HTMLElement {
    constructor() {
      super();

      let variant = this.getAttribute("buttonText") || "log in";
      //creo el div contenedor
      let buttonEl = document.createElement("button");
      buttonEl.innerText = variant;
      buttonEl.setAttribute("class", "buttonComp");
      buttonEl.setAttribute("type", "submit");
      buttonEl.setAttribute("name", "enviar");
      let styleEl = document.createElement("style");
      styleEl.innerText = `
      .buttonComp{

        height: 55px;
        width: 312px;
        border-radius: 4px;
        border:none;
        background: #9CBBE9;
        
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 22px;
        line-height: 26px;
        text-align: center;
        color: #000000;
      }`;
      buttonEl.appendChild(styleEl);
      this.appendChild(buttonEl);
    }
  }
  customElements.define("button-comp", ButtonClass);
}

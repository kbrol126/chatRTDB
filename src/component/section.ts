export function sectionComp() {
  class SectionClass extends HTMLElement {
    constructor() {
      super();

      let variant = this.getAttribute("variant") || "label";
      //creo el div contenedor
      let sectionEl = document.createElement("section");
      sectionEl.setAttribute("class", "sectionInput");

      //creo label del input
      let labelEl = document.createElement("label");
      labelEl.textContent = variant;
      labelEl.setAttribute("class", "label__del__input");
      labelEl.setAttribute("for", "fname");

      //creo el input
      let inputEl = document.createElement("input");
      inputEl.setAttribute("class", "inputComp");

      sectionEl.appendChild(labelEl);
      sectionEl.appendChild(inputEl);
      this.appendChild(sectionEl);
    }
  }
  customElements.define("section-comp", SectionClass);
}

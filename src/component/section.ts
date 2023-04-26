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
      inputEl.setAttribute("name", "nombre");

      let style = document.createElement("style");
      style.innerText = `
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
      .sectionInput{
        display: grid;
        gap: 5px;
        
    }
    
    .label__del__input{
    
    max-width: 271px;
    height: 28px;
    
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    
    color: #000000;
    } 
    .inputComp{
        height: 55px;
        max-width: 312px;
        border: 2px solid #000000;
        border-radius: 4px;
    }
    
      `;
      sectionEl.appendChild(style);
      sectionEl.appendChild(labelEl);
      sectionEl.appendChild(inputEl);
      this.appendChild(sectionEl);
    }
  }
  customElements.define("section-comp", SectionClass);
}

import { Router } from "@vaadin/router";
class HomeClass extends HTMLElement {
  connectedCallback() {
    this.render();
    let form = document.querySelector("form");

    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      let target = e.target as any;
      console.log(target.nombre.value);
      Router.go("/chat");
    });
  }
  render() {
    this.innerHTML = `
            <header-comp></header-comp>
            <div class="content">
            <title-comp titleText="Bienvenidx"></title-comp>
            <form class="form__class">
                <section-comp variant="tu nombre"></section-comp>
                <button-comp buttonText="Comenzar"></button-comp>
            </form>
            </div>
            `;
  }
}
customElements.define("home-page", HomeClass);

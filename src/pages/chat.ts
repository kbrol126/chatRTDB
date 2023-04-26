class ChatClass extends HTMLElement {
  connectedCallback() {
    this.render();
    let form = document.querySelector("form");

    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      let target = e.target as any;
      console.log(target.nombre.value);
    });
  }
  render() {
    this.innerHTML = `
    
            <header-comp></header-comp>
            <div class="content__chat">
            <title-comp titleText="Chat"></title-comp>
            <div class="mensajes"></div>
            <form class="form__class">
                <section-comp variant="escribe tu mensaje"></section-comp>
                <button-comp buttonText="Comenzar"></button-comp>
            </form>
            </div>
            `;
  }
}
customElements.define("chat-page", ChatClass);

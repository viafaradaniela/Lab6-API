var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import "./components/indexComponents.js";
import { getCharacters } from "./components/Services/Simpsons.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            const Simpsons = yield getCharacters();
            this.render(Simpsons);
        });
    }
    render(Simpsons) {
        if (!this.shadowRoot)
            return;
        const characters = Simpsons.map(({ character, image, quote }) => `
        <link rel="stylesheet" href="./app/components/Services/StyleSimpsons.css">
            
             <article class="text">
             <div class="card-container">
             <h3>${character}</h3>
             <p>${quote}</p>
             <div class="character">
             <img src="${image}" class="img">
             </div>
             </div>
             </article>
            `);
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/components/Services/StyleSimpsons.css">

            <section>
            ${characters.join("")}
            </section>
            `;
    }
}
customElements.define("app-container", AppContainer);

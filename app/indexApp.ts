import "./components/indexComponents.js";
import {getCharacters} from "./components/Services/Simpsons.js";
import { Simpsons } from "./components/Types/Types.js";


class AppContainer extends HTMLElement{

    constructor(){
        super ();
        this.attachShadow({mode: "open"}); 
    }
    async connectedCallback(){
        const Simpsons = await getCharacters();
        this.render(Simpsons);
    }
    render(Simpsons: Array<Simpsons>){
        if (!this.shadowRoot) return;

        const characters = Simpsons.map(({character,image,quote}) =>  `
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

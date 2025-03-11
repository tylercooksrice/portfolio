import { getMyComponentHTML } from './project-html.js';
import { getMyComponentCSS } from './project-css.js';

class ProjectCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        
        const style = document.createElement('style');
        style.textContent = getMyComponentCSS();
        const content = getMyComponentHTML();

        this.innerHTML = '';
        this.appendChild(style);
        this.innerHTML += content;      
        console.log("Added Successfully");
    }
}
customElements.define('project-card', ProjectCard);


document.addEventListener('DOMContentLoaded', () => {

})

function init() {
    const grid = document.getElementById("grid");
    const menu  = document.getElementById("menu");
    const button = document.getElementById("menuButton");
    let visible = false;

    button.addEventListener("click", () => {
        if(visible == false) { // display the menu
            grid.style.display = "block";
            menu.style.display = "flex";
            visible = !visible;

        } else {
            grid.style.display = "grid";
            menu.style.display = "none";
            visible = !visible; 

        }

        console.log("works")
      });
}
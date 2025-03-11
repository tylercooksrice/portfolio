import { getMyComponentHTML } from './project-html.js';
import { getMyComponentCSS } from './project-css.js';

const projectData = [
    {projectName: "Sentiment Analysis Model", picture: "public/images/BagOfWords.png", link: "https://github.com/tylercooksrice/sentiment-analysis-model", 
        info: " Predicting Using TF-IDF and Bag of Words (CountVectorizer) with Logistic Regression"}
]

localStorage.setItem("projects", JSON.stringify(projectData));

document.addEventListener('DOMContentLoaded', () => {
    const data = localStorage.getItem("projects");
    const projectData = JSON.parse(data);
    if (!projectData) {
        alert("No local data found.");
    }
    
    async function loadRemoteData() {

    }    

    class ProjectCard extends HTMLElement {
        constructor() {
            super();
        }
    
        connectedCallback() {
            
            const style = document.createElement('style');
            style.textContent = getMyComponentCSS();
            const content = getMyComponentHTML(projectData[0]);
    
            this.innerHTML = '';
            this.appendChild(style);
            this.innerHTML += content;      
            console.log("Added Successfully");
        }
    }
    customElements.define('project-card', ProjectCard);
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
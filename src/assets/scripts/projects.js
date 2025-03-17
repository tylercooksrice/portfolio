import { getMyComponentHTML } from './project-html.js';
import { getMyComponentCSS } from './project-css.js';

let projectData = [
    {
        projectName: "Sentiment Analysis Model",
        picture: "public/images/BagOfWords.png",
        link: "https://github.com/tylercooksrice/sentiment-analysis-model",
        caption: "Predicting Using TF-IDF and Bag of Words (CountVectorizer) with Logistic Regression",
        info: `This project performs a key analysis on Amazon Fine Foods Reviews: conducting sentiment analysis using two different models: 
        TF-IDF and Bag of Words (CountVectorizer). The dataset contains over 500,000 reviews, and we used Logistic Regression to classify reviews 
        as positive or negative, achieving an accuracy of 87%.`
    },
    {
        projectName: "Journal App",
        picture: "public/images/journal.png",
        link: "https://github.com/cse110-sp24-group35/journal.git",
        caption: "The application is a task management and journaling tool with a Kanban board, calendar, markdown-supported journal, and offline access via PWA.",
        info: `The application offers a comprehensive task management system, featuring a 
        pie chart for task completion, a one-click checklist for today's tasks, and a seven-day 
        upcoming task view. A calendar provides a quick overview of tasks by due date, with hover and 
        click options for more details. The Kanban board includes customizable columns (PLANNED, ONGOING, 
        COMPLETED, ABANDONED), allowing users to drag and drop tasks and quickly assign statuses. A journal 
        system organizes entries in a file-explorer layout, supporting markdown with live preview and an 
        auto-save feature with a 0.5-second delay. Additionally, offline functionality is enabled through 
        ServiceWorker caching, ensuring continued access without an internet connection, and the platform 
        operates as a Progressive Web App (PWA).`
}
];

let req = new XMLHttpRequest();
let remoteData = [];

req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    const response = JSON.parse(req.responseText);
    remoteData = response.record.projectData;
    //projectData = projectData.concat(remoteData);
    //console.log("Remote data loaded:", remoteData);
  }
};

req.open("GET", "https://api.jsonbin.io/v3/b/67d0c1a48a456b7966740694", true);
req.setRequestHeader("X-Master-Key", "$2a$10$tpVp/oLdF7ZhigZ6XsZ33Of4/oY33HoXOcOe3ARJaE1jjphBxhcLq");
req.send();

localStorage.setItem("projects", JSON.stringify(projectData));

let remote = false;

document.addEventListener('DOMContentLoaded', () => {
    const data = localStorage.getItem("projects");
    projectData = JSON.parse(data);
    if (!projectData) {
        alert("No local data found.");
    }
      class ProjectCard extends HTMLElement {
        constructor() {
            super();
        }
    
        connectedCallback() {  
            const style = document.createElement('style');
            style.textContent = getMyComponentCSS();
            let htmlContent = '';
            if (!remote) {
                projectData.forEach(project => {
                    htmlContent += getMyComponentHTML(project);
                });
            } else {
                projectData.forEach(project => {
                    remoteData += getMyComponentHTML(project);
                });
            }
    
            this.innerHTML = '';
            this.appendChild(style);
            this.innerHTML += htmlContent;      
            console.log("Added Successfully");
        }
    }
    customElements.define('project-card', ProjectCard);

    document.getElementById('loadLocal').addEventListener('click', function() {

        const projectCard = document.createElement('project-card');
        document.getElementById('projectDisplay').appendChild(projectCard);
    });

    document.getElementById('loadRemote').addEventListener('click', function() {

        const projectCard = document.createElement('project-card');
        document.getElementById('projectDisplay').appendChild(projectCard);
    });
});

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
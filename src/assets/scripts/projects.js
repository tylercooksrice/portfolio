window.addEventListener("DOMContentLoaded", init);

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
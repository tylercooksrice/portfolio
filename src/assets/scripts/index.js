
document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementsByTagName("toggle");
    const currentTheme = "light";
    currentTheme = localStorage.getItem("theme");

    toggleSwitch.addEventListener("clicked", function(){
        if(this.checked) {
            localStorage.setItem("theme", "dark");
            alert("test");
        } else {
            localStorage.setItem("theme", "light");
        }
    });

    if(currentTheme === "dark") {
        
    } else if (currentTheme === "light") {

    }
})
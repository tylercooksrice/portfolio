const registerServiceWorker = async () => {
    if ("serviceWorker" in navigator) {
      try {
        const registration = await navigator.serviceWorker.register("/src/assets/scripts/sw.js", {
          scope: "/src/assets/scripts/",
        });
        if (registration.installing) {
          console.log("Service worker installing");
        } else if (registration.waiting) {
          console.log("Service worker installed");
        } else if (registration.active) {
          console.log("Service worker active");
        }
      } catch (error) {
        console.error(`Registration failed with ${error}`);
      }
    }
  };
  
  
  
  registerServiceWorker();

document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementsByTagName("toggle");
    var currentTheme = "light";
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
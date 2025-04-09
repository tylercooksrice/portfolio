const registerServiceWorker = async () => {
    if ("serviceWorker" in navigator) {
      try {
        const registration = await navigator.serviceWorker.register("/src/assets/scripts/sw.js", {
          scope: "/",
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

  async function getTranslation() {
    const response = await fetch("https://libretranslate.com/translate", {
      method: "POST",
      body: JSON.stringify({
        q: "Ciao!",
        source: "auto", 
        target: "en",
      }),
      headers: { "Content-Type": "application/json" },
    });
  
    const translations = await response.json();
    console.log(translations);
  }
 
  document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById("toggleSwitcher");
    const toggleText = document.querySelector("toggle");
    let currentTheme = localStorage.getItem("theme") || "light"; 
    getTranslation();
    if (currentTheme === "dark") {
        document.body.classList.add("darkMode");
        toggleSwitch.checked = true; 
    } else {
        document.body.classList.remove("darkMode");
        toggleSwitch.checked = false;
    }

    toggleSwitch.addEventListener("change", function () {
        if (this.checked) {
            localStorage.setItem("theme", "dark");
            document.body.classList.add("darkMode");
            toggleText.childNodes[0].nodeValue = "Toggle Light Mode";
        } else {
            localStorage.setItem("theme", "light");
            document.body.classList.remove("darkMode");
            toggleText.childNodes[0].nodeValue  = "Toggle Dark Mode";
        }
    });
});

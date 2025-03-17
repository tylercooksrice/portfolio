let req = new XMLHttpRequest();

req.onreadystatechange = () => {
  if (req.readyState === XMLHttpRequest.DONE) {
    if (req.status === 200) { 
      try {
        const data = JSON.parse(req.responseText); // Parse JSON
        
        console.log("Full Response:", data); // Log full response to debug
        
        // Ensure 'record' and 'projectData' exist before accessing
        if (data.record && Array.isArray(data.record.projectData)) {
          console.log("Project Name:", data.record.projectData[0].projectName); 
        } else {
          console.error("Error: 'record' or 'projectData' is missing in response.");
        }
      } catch (error) {
        console.error("JSON Parsing Error:", error);
      }
    } else {
      console.error("Error fetching data:", req.statusText);
    }
  }
};

req.open("GET", "https://api.jsonbin.io/v3/b/67d0c1a48a456b7966740694", true);
req.setRequestHeader("X-Master-Key", "$2a$10$tpVp/oLdF7ZhigZ6XsZ33Of4/oY33HoXOcOe3ARJaE1jjphBxhcLq");
req.send();


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
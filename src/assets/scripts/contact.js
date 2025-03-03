document.addEventListener('DOMContentLoaded', () => {
  const email = document.getElementById("email");
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const phone = document.getElementById("phone");
  const comments = document.getElementById("comments");
  
  firstName.addEventListener("input", (event) => {
    const output = document.getElementById("first-name-error");
    if(firstName.validity.valid) {
      output.textContent = " ";
    } else {
      console.log("Invalid character detected!");
      output.textContent = "Invalid character detected";
      setTimeout(function (){
        output.textContent = "This field is required";
      }, 3000);
    }
  })

  email.addEventListener("input", (event) => {
    const output = document.getElementById("email-error");
    if(email.validity.valid) {
      output.textContent = " ";
    } else {
      console.log("Invalid character detected!");
      output.textContent = "Invalid character detected";
      setTimeout(function (){
        output.textContent = "This field is required";
      }, 3000);
    }
  })

})  
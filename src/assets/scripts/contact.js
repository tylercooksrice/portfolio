document.addEventListener('DOMContentLoaded', () => {
  const email = document.getElementById("email");
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const phone = document.getElementById("phone");
  const comments = document.getElementById("comments");
  
  firstName.addEventListener("input", (event) => {
    const output = document.getElementById("first-name-error");
    if(firstName.validity.valid) {

    } else {
      console.log("Invalid character detected!");
      firstName.setCustomValidity("Enter your first name!");
      setTimeout(function (){

      }, 3000);
    }
  })

  lastName.addEventListener("input", (event) => {
    const output = document.getElementById("last-name-error");
    if(lastName.validity.valid) {

    } else {
      console.log("Invalid character detected!");
      lastName.setCustomValidity("Enter your last name!");

      setTimeout(function (){

      }, 3000);
    }
  })

  email.addEventListener("input", (event) => {
    const output = document.getElementById("email-error");
    if(email.validity.valid) {

    } else {
      console.log("Invalid character detected!");
      email.setCustomValidity("Please enter a valid email address!");

      setTimeout(function (){

      }, 3000);
    }
  })

})  
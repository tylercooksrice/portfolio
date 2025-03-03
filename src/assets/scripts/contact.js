document.addEventListener('DOMContentLoaded', () => {
  const email = document.getElementById("email");
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const phone = document.getElementById("phone");
  const comments = document.getElementById("comments");

  email.addEventListener("input", (event) => {
    const output = document.getElementById("email-error");
    if(email.validity.valid) {
      output.textContent = "This field is required.";
    } else {
      console.log("Invalid character detected!");
      output.textContent = "Invalid character detected";
      setTimeout(function (){
        output.textContent = "";
      }, 3000);
    }
  })

})  
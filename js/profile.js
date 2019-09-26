document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("updateBtn").addEventListener("click", event => {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let addtionalEmail = document.getElementById("additionalEmail").value;
    let password = document.getElementById("password").value;
    let passwordConfirm = document.getElementById("passwordConfirm").value;
    let username = document.getElementById("userName").value;
    let mobile = document.getElementById("mobile").value;
    let address = document.getElementById("address").value;

    console.log(email);
    console.log(addtionalEmail);
    console.log(password);
    console.log(passwordConfirm);
    console.log(username);
    console.log(mobile);
    console.log(address);
  });
});

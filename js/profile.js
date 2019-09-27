document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("updateBtn").addEventListener("click", event => {
    event.preventDefault();

    // let email = document.getElementById("email").value;
    let addtionalEmail = document.getElementById("additionalEmail").value;
    // let password = document.getElementById("password").value;
    // let passwordConfirm = document.getElementById("passwordConfirm").value;
    // let username = document.getElementById("userName").value;
    let mobile = document.getElementById("mobile").value;
    let address = document.getElementById("address").value;

    // console.log(email);
    console.log(addtionalEmail);
    // console.log(password);
    // console.log(passwordConfirm);
    // console.log(username);
    console.log(mobile);
    console.log(address);

    let user = JSON.parse(localStorage.getItem('foodieUser'));

    fetch(`http://thesi.generalassemb.ly:8080/profile`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
            // 'Authorization': `Bearer ${localStorage.token}`
        },
        body: JSON.stringify({
            "additionalEmail" : addtionalEmail,
            "mobile" : mobile,
            "address": address,
        })
    }).then(r=>{
        if(r.status === 200){
            // window.location.reload();
            let inform = document.createElement("p");
            let textInform = document.createTextNode("Your profile has been updated!");
            inform.appendChild(textInform);
            
            document.getElementById("update").appendChild(inform);
        }
    })



  });






});

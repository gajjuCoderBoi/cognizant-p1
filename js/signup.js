
let email = document.getElementById("exampleInputEmail1").value;
let password = document.getElementById("exampleInputPassword1").value;


fetch("http://thesi.generalassemb.ly:8080/signup",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({'email': `${email}`, 'password': `${password}`,'username':`${email}`})
})
.then(function(res){ console.log(res) })
.catch(function(res){ console.log(res) })
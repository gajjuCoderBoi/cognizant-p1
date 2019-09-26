document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('signupBtn').addEventListener('click', (event) => {

        let email = document.getElementById("email").value;
        let addtionalEmail = document.getElementById("addtionalEmail").value;
        let password = document.getElementById("password").value;
        let passwordConfirm = document.getElementById("passwordConfirm").value;
        let username = document.getElementById("userName").value;
        let mobile = document.getElementById("mobile").value;
        let address = document.getElementById("address").value;

        document.querySelector("#signUp").addEventListener("submit",e=>{
            e.preventDefault();
        })

        event.preventDefault();
        console.log(email);
        console.log(addtionalEmail);
        console.log(password);
        console.log(passwordConfirm);
        console.log(username);
        console.log(mobile);
        console.log(address);
       


        // fetch("http://thesi.generalassemb.ly:8080/signup",
        // {
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        // method: "POST",
        // body: JSON.stringify({'email': `${email}`, 'password': `${password}`,'username':`${email}`})
        // })
        // .then(res=> res.json() ).then(res=>{console.log()})
        // .catch((res)=>{ console.log("Error:"+ res) })
    })
});

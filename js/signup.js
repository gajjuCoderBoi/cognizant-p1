document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('signupBtn').addEventListener('click', (event) => {

        let email = document.getElementById("exampleInputEmail1").value;

        let password = document.getElementById("exampleInputPassword1").value;

        event.preventDefault();
        console.log(email);
        console.log(password);

        fetch("http://thesi.generalassemb.ly:8080/signup",
        {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({'email': `${email}`, 'password': `${password}`,'username':`${email}`})
        })
        .then(res=> return res.json() ).then(res=>{console.log(res)})
        .catch((res)=>{ console.log("Error:"+ res) })
    })
});

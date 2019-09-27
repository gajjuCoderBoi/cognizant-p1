document.addEventListener("DOMContentLoaded", () => {
  getProfile();

    async function getProfile() {
      let user = JSON.parse(localStorage.getItem("foodieUser"));
      if (user) {
          let token = user.token;
          let r = await fetch('http://thesi.generalassemb.ly:8080/profile', {
              method: "GET",
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
              },
          })
          .then(res=>res.json())
          .then(res=>{
            document.getElementById("additionalEmail").value = res.additionalEmail;
            document.getElementById("userName").value = res.user.username;
            document.getElementById("mobile").value = res.mobile;
            document.getElementById("address").value = res.address;
            console.log(res);
          })
          .catch(e => console.log(e))
      }
  }
  
  document.getElementById("updateBtn").addEventListener("click", event => {
    event.preventDefault();

   
    let addtionalEmail = document.getElementById("additionalEmail").value;
    let username = document.getElementById("userName").value;
    let mobile = document.getElementById("mobile").value;
    let address = document.getElementById("address").value;

    console.log(addtionalEmail);
    console.log(username);
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

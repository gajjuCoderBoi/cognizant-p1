document.addEventListener("DOMContentLoaded", function () {

    let loggedin = false
    ;

    document.getElementById('navBarForm').innerHTML = getNavBar(null);
//         loggedin ?
//             `                <button type="button" id = "profile" class="btn btn-primary">Username</button>
// ` :
//             `
//     <input id="emailInput" class="form-control mr-sm-2" type="text" placeholder="Email">
//                 <input id= "passwordInput" class="form-control mr-sm-2" type="password" placeholder="Password">
//                 <button type="button" id = "login" class="btn btn-success mr-sm-2">Login</button>
//                 <button type="button" id = "signup" class="btn btn-success">Sign up</button>
//     `;

    let signup = document.getElementById("signup"),
        login = document.getElementById('login'),
        profile = document.getElementById('profile');
    if (profile) {

    }
    if (login && signup) {
        document.getElementById("signup").addEventListener("click", function () {
            window.location.href = "signup.html";
        });


        document.getElementById("login").addEventListener("click", function () {
            let email = document.getElementById("emailInput").value;
            let password = document.getElementById("passwordInput").value;

            console.log(email);
            console.log(password);

            if (!(email && password)) {
                alert("Please fill all the fields!!!")
            } else {
                fetch('http://thesi.generalassemb.ly:8080/login', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "email": email,
                        "password": password
                    })
                }).then(r => r.json())
                    .then(res => {
                        console.log(res);
                        localStorage.setItem("userToken", res.token);
                        
                        document.getElementById('navBarForm').innerHTML = getNavBar(res.username);

                    }).catch(e => {
                    console.log(e)
                })
            }
        });
    }

    function getNavBar(userName){
        return userName ?
            `                <button type="button" id = "profile" class="btn btn-primary mr-sm-2">${userName}</button>
                            <button type="button" id="profile" class="btn btn-danger">Logout</button>
` :
            `
    <input id="emailInput" class="form-control mr-sm-2" type="text" placeholder="Email">
                <input id= "passwordInput" class="form-control mr-sm-2" type="password" placeholder="Password">
                <button type="button" id = "login" class="btn btn-success mr-sm-2">Login</button>
                <button type="button" id = "signup" class="btn btn-success">Sign up</button>
    `;
    }

    
    fetch('http://thesi.generalassemb.ly:8080/post/list')
        .then(res => res.json())
        .then(async posts => {
            for (let i = 0; i < 5; i++) {
                let div = document.createElement('div');
                let comments = [];
                await fetch(`http://thesi.generalassemb.ly:8080/post/${posts[i].id}/comment`)
                    .then(res => res.json())
                    .then(comnts => {
                        comments = comnts;
                    })

                div.innerHTML = createPostDiv(posts[i], comments);
                document.querySelector('.container').appendChild(div);

            }
        });

});

function deletePost(post) {
    let id = post.id.split('-')[1];
    console.log(id);
}

function deleteComment(comment) {
    let id = comment.id.split('-')[1];
    console.log(id);
}

function createPostDiv(post, comments = []) {
    return `
<div class="card post-card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-12">
                        <p>
                            <a class="float-left text-primary"><strong>${post.user.username}</strong></a>
                        </p>
                        
                        <div class="clearfix"></div>
                        <h5>
                            <a class="float-left text-secondary"><strong>${post.title}</strong></a>

                        </h5>
                        <div class="clearfix"></div>
                        <p>${post.description}</p>
                        <p>
                            <a class="float-right text-white btn btn-danger ml-2 deletePostButton" onclick="deletePost(this)" id="${'post-' + post.id}">Delete Post</a>
                            <a class="float-right btn btn-outline-primary ml-2 replyPostButton"> Reply</a>
                        </p>
                    </div>
                </div>
                ${
        comments.map(comment => createCommentDiv(comment)).join('')
    }
                
        </div>
<div/>`;

}

function createCommentDiv(comment) {
    return `
<div class="card comment-card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-12">
                                <p><a class="text-primary"><strong>${comment.user.username}</strong></a></p>
                                <p>${comment.text}</p>
                                <p>
                                    <a class="float-right btn text-white btn-danger deleteCommentButton" onclick="deleteComment(this)" id="${'comment-' + comment.id}">Delete Comment</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
`
}

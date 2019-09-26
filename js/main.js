document.addEventListener("DOMContentLoaded", function () {
    

    document.getElementById("signup").addEventListener("click",function(){
        window.location.href = "signup.html";
    });

    document.getElementById("login").addEventListener("click",function(){
        let email = document.getElementById("emailInput").value;
        let password = document.getElementById("passwordInput").value;

        console.log(email);
        console.log(password);
        // window.location.href = "index.html";
    });


    fetch('http://thesi.generalassemb.ly:8080/post/list')
        .then(res=>res.json())
        .then(async posts=>{
            for (let i=0;i<5;i++)
           {
                let div = document.createElement('div');
                let comments = [];
                await fetch(`http://thesi.generalassemb.ly:8080/post/${posts[i].id}/comment`)
                .then(res=>res.json())
                .then(comnts=>{
                    comments=comnts;
                })

                div.innerHTML = createPostDiv(posts[i],comments);
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
                            <a class="float-right text-white btn btn-danger ml-2 deletePostButton" onclick="deletePost(this)" id="${'post-'+post.id}">Delete Post</a>
                            <a class="float-right btn btn-outline-primary ml-2 replyPostButton"> Reply</a>
                        </p>
                    </div>
                </div>
                ${
                    comments.map(comment=>createCommentDiv(comment)).join('')
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
                                    <a class="float-right btn text-white btn-danger deleteCommentButton" onclick="deleteComment(this)" id="${'comment-'+comment.id}">Delete Comment</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
`
}

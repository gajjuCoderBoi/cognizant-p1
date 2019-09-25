document.addEventListener("DOMContentLoaded", function () {

    fetch('http://thesi.generalassemb.ly:8080/post/list')
        .then(res=>res.json())
        .then(posts=>{
            for (let i=0;i<5;i++)
           {
                let div = document.createElement('div');
                div.innerHTML = createPostDiv(posts[i]);
                document.querySelector('.container').appendChild(div);
            }
        });

});


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
                        <p>${post.description}</p><p>
                            <a class="float-right text-white btn btn-danger ml-2">Delete Post</a>
                            <a class="float-right btn btn-outline-primary ml-2"> Reply</a>
                        </p>
                    </div>
                </div>
        </div>
        <div/>`;

}

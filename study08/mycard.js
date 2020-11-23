
/**
 * jsonplaceholder 에서 post를 가져오자!
 */
// function getPosts2() {
//     fetch('https://jsonplaceholder.typicode.com/posts').then(function(response){
//         console.log('response', response);
//         response.json().then(function(body) {
//             console.log('body', body);
//         })
//     });
// }

async function getPosts() {
    var response = await fetch('https://jsonplaceholder.typicode.com/posts');
    var posts = await response.json();

    return posts;
}

function renderPostCards(posts) {
    var html = '';
    for(var i = 0; i < posts.length; i++) {
        var post = posts[i];
        html = html + `
        <a class="card1" href="#">
          <h3>${post.title}</h3>
          <p class="small">
            ${post.body}
          </p>
          <div class="go-corner" href="#">
            <div class="go-arrow">→</div>
          </div>
        </a>`;
    }
    document.querySelector('.container').innerHTML = html;
}

async function init() {
    var posts = await getPosts();
    renderPostCards(posts);
}

init();

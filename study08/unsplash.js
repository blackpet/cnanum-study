async function getPhotos() {
    var response = await fetch('https://api.unsplash.com/search/photos?client_id=smACiefvYhoo73pIord4kktIdFbNUDlROkf1igTfaHk&query=wanderlust');
    var json = await response.json();
    return json;
}

function renderphotos(json) {
    var html = '';
    for(var i = 0; i < json.results.length; i++) {
        var photo = json.results[i];
        html = html + `
        <a class="card2" href="#">
        <img src="${photo.urls.thumb}" alt="${photo.user.name}">
        <h3>${photo.alt_description}</h3>
        
        <div class="go-corner" href="#">
          <div class="go-arrow">
            →
          </div>
        </div>
      </a>
        `;
        console.log(json)
    }
    document.querySelector('.container').innerHTML = html;
};

async function init() {
    var json = await getPhotos();
    renderphotos(json);
}

init();
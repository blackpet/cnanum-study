async function pushphotos() {
    var photoURL = await fetch('https://api.unsplash.com/search/photos?client_id=SH9BHpqzegAovALwDez6MkcMkf5767bqdVzusQcuPFQ&query=mountian');
    var photos = await photoURL.json();
    return photos;
}

function renderphotos(photos) {
    var html = '';
    for(var i = 0; i < photos.results.length; i++) {
        var photo = photos.results[i];
        html = html + `
        <div class="cardImg">
            <img class="card-img-top" src="${photo.urls.regular}" alt="${photo.urls.name}">
            <div class="card-body">
                <h4 class="card-title">${photo.alt_description}Wildlife Photography</h4>
                <p class="card-text">${photo.created_at}</p>
                <a href="javascript:void(0);" class="btn btn-primary btn-lg btn-block"><i class="fa fa-heart"></i> Love this pic</a>
            </div>
        </div>
        `;
        console.log(photos)
    }
    document.querySelector('.card').innerHTML = html;
};

async function init() {
    var photos = await pushphotos();
    renderphotos(photos);
};

init();


async function pushphotos() {
    var photoURL = await fetch('https://api.unsplash.com/search/photos?client_id=SH9BHpqzegAovALwDez6MkcMkf5767bqdVzusQcuPFQ&query=mountian');
    var photos = await photoURL.json();
    return photos;
}

function renderphotos(photos) {
    var html = '';
    for(var i = 0; i < photos.results.length; i++) {
        var photo = photos.results[i];
        html = html + `
        <div class="cardImg">
            <img class="card-img-top" src="${photo.urls.regular}" alt="${photo.urls.name}">
            <div class="card-body">
                <h4 class="card-title">${photo.alt_description}Wildlife Photography</h4>
                <p class="card-text">${photo.created_at}</p>
                <a href="javascript:void(0);" class="btn btn-primary btn-lg btn-block"><i class="fa fa-heart"></i> Love this pic</a>
            </div>
        </div>
        `;
        console.log(photos)
    }
    document.querySelector('.card').innerHTML = html;
};

async function init() {
    var photos = await pushphotos();
    renderphotos(photos);
};

init();
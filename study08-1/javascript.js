async function pushphotos() {
    var response = await fetch('https://api.unsplash.com/search/photos?client_id=SH9BHpqzegAovALwDez6MkcMkf5767bqdVzusQcuPFQ&query=mountian');
    var photos = await response.json();
    return photos;
    // 변수명의 의미
    // pushphotos = 사진을 가져옴
    // response = 접근하고자 하는 url의 응답을 기다림
    // photos = url의 주데이터가 사진들
}

function rendercards(photos) {
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
    // 변수명의 의미
        // rendercards = 카드들을 동적으로 출력
        // html = innerHMTL의 값을 지정할 변수
        // photo = 사진들의 i(사진들의 각각의 사진)를 지정
};

async function init() {
    var photos = await pushphotos();
    rendercards(photos);
    // 변수명의 의미
        // init = 동적으로 출력한 카드들을 새로 출력
        // photos = url의 주데이터가 사진들
};

init();


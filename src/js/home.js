const main = document.querySelector(".principal");

fetch(genres_list_http + new URLSearchParams({
    api_key: api_key
}))
.then(res => res.json())
.then(data => {
    data.genres.forEach(item => {
        fetchMoviesByGenres(item.id, item.name);
    });
})
.catch(err => console.error(err));

const fetchMoviesByGenres = (id, genre) => {
    fetch(movie_genres_http + new URLSearchParams({
        api_key: api_key,
        with_genres: id,
        page: Math.floor(Math.random() * 3) + 1
    }))
    .then(res => res.json())
    .then(data => {
        makeCategoryElements(`${genre}_movies`, data.results);
    })
    .catch(err => console.log(err));
};

const makeCategoryElements = (category, data) => {
    main.innerHTML += `
     <div class="lista-filmes">
            <button class="pre-btn">
                <img src="./src/img/prev.png" alt="previous button">
            </button>
            <h1 class="filmes-categoria">${category.replace("_", " ")}</h1>
            <div class="movie-container" id="${category}">
            </div>
            <button class="next-btn">
                <img src="./src/img/next.png" alt="next button">
            </button>
        </div>
    `;
    makeCards(category, data);
};

const makeCards = (id, data) => {
    const movieContainer = document.getElementById(id);
    data.forEach((item, i) => {
        if (item.backdrop_path == null) {
            item.backdrop_path = item.poster_path;
            if (item.backdrop_path == null) {
                return;
            }
        }
        movieContainer.innerHTML += `
        <div class="filme">
            <img src="${img_url}${item.backdrop_path}" alt="poster">
            <p class="filme-titulo">${item.title}</p>
        </div>
        `;
        if (i === data.length - 1) {
            setTimeout(() => {
                setupScrolling();
            }, 100);
        }
    });
};

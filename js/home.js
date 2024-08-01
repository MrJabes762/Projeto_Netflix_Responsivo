const main = document.querySelector(".main");

const fetchGenres = async () => {
    try {
        const res = await fetch(genres_list_http + new URLSearchParams({ api_key }));
        const data = await res.json();
        data.genres.forEach(genre => fetchMoviesByGenre(genre.id, genre.name));
    } catch (error) {
        console.error("Error fetching genres:", error);
    }
};

const fetchMoviesByGenre = async (id, genre) => {
    try {
        const res = await fetch(movie_genres_http + new URLSearchParams({
            api_key,
            with_genres: id,
            page: Math.floor(Math.random() * 3) + 1
        }));
        const data = await res.json();
        createCategoryElement(`${genre}_movies`, data.results);
    } catch (error) {
        console.error("Error fetching movies:", error);
    }
};

const createCategoryElement = (category, data) => {
    main.innerHTML += `
    <div class="movie-list">
        <button class="pre-btn"><img src="img/prev.png" alt="previous button"></button>
        <h1 class="movie-category">${category.replace("_", " ")}</h1>
        <div class="movie-container" id="${category}"></div>
        <button class="next-btn"><img src="img/next.png" alt="next button"></button>
    </div>
    `;
    createMovieCards(category, data);
};

const createMovieCards = (id, data) => {
    const movieContainer = document.getElementById(id);
    data.forEach(item => {
        if (!item.backdrop_path) {
            item.backdrop_path = item.poster_path;
            if (!item.backdrop_path) return;
        }

        movieContainer.innerHTML += `
        <div class="movie">
            <img src="${img_url}${item.backdrop_path}" alt="poster">
            <p class="movie-title">${item.title}</p>
        </div>
        `;
    });
    setTimeout(setupScrolling, 100);
};
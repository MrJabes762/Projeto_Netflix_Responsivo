const setupScrolling = () => {
    const containers = document.querySelectorAll(".movie-container");
    const nextBtns = document.querySelectorAll(".next-btn");
    const prevBtns = document.querySelectorAll(".pre-btn");

    containers.forEach((container, i) => {
        const containerWidth = container.getBoundingClientRect().width;
        nextBtns[i].addEventListener('click', () => container.scrollLeft += containerWidth);
        prevBtns[i].addEventListener('click', () => container.scrollLeft -= containerWidth);
    });
};
document.addEventListener('DOMContentLoaded', fetchGenres);
const setupScrolling = () => {
    const containers = [...document.querySelectorAll(".movie-container")];
    const nextButtons = [...document.querySelectorAll(".next-btn")];
    const prevButtons = [...document.querySelectorAll(".pre-btn")];

    containers.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;
        nextButtons[i].addEventListener("click", () => {
            item.scrollLeft += containerWidth;
        });
        prevButtons[i].addEventListener("click", () => {
            item.scrollLeft -= containerWidth;
        });
    });
};
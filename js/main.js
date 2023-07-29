document.addEventListener("DOMContentLoaded", (event) => {
    document.body.addEventListener('click', (e) => {
        const clickedElement = e.target;
        if (clickedElement.classList.contains('calendly-close-overlay') ||         	clickedElement.classList.contains('calendly-popup-close')) {
            e.preventDefault();e.stopPropagation();
        }
    });
});
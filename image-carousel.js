const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".carousel-dot");
const previousButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");

let currentSlide = 0;

function showSlide(index) {
    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");

    currentSlide = index;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    if (currentSlide < 0) {
        currentSlide = slides.length -1;
    }

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
}

nextButton.addEventListener("click", function () {
    showSlide(currentSlide + 1);
});

previousButton.addEventListener("click", function () {
    showSlide(currentSlide - 1);
});

dots.forEach(function (dot, index) {
    dot.addEventListener("click", function () {
        showSlide(index);
    });
});

//Bytte automatisk bilde
setInterval(function () {
    showSlide(currentSlide + 1);
}, 5000);
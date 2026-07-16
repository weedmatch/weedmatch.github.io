const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".carousel-dot");

let currentSlide = 0;
let autoPlay;


function showSlide(index) {

    slides.forEach((slide, i) => {

        slide.classList.remove("active");

        if (i === index) {
            slide.classList.add("active");
        }

    });


    dots.forEach((dot, i) => {

        dot.classList.remove("active");

        if (i === index) {
            dot.classList.add("active");
        }

    });


    currentSlide = index;

}



function nextSlide() {

    let next = currentSlide + 1;

    if (next >= slides.length) {
        next = 0;
    }

    showSlide(next);

}



function startCarousel() {

    autoPlay = setInterval(nextSlide, 5000);

}



dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        showSlide(index);

        clearInterval(autoPlay);
        startCarousel();

    });

});



showSlide(0);
startCarousel();

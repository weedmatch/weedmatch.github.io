const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".carousel-dot");

let currentSlide = 0;
let autoPlay;


function showSlide(index) {

    const direction = index > currentSlide ? 1 : -1;

    slides.forEach((slide, i) => {

        slide.classList.remove("active");

        if (i === index) {
            slide.style.transform = direction === 1 
                ? "translateX(100%)" 
                : "translateX(-100%)";

            setTimeout(() => {
                slide.classList.add("active");
            }, 50);
        }

    });


    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    dots[index].classList.add("active");

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

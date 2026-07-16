const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".carousel-dot");

let currentSlide = 0;
let autoPlay;


function showSlide(index) {

    if (index === currentSlide) return;


    const current = slides[currentSlide];
    const next = slides[index];


    const direction = index > currentSlide ? 1 : -1;


    // Move current slide out
    current.classList.remove("active");
    current.style.transform = direction === 1
        ? "translateX(-100%)"
        : "translateX(100%)";


    // Position next slide
    next.style.transform = direction === 1
        ? "translateX(100%)"
        : "translateX(-100%)";


    setTimeout(() => {

        next.classList.add("active");

    }, 20);



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


slides[0].classList.add("active");
dots[0].classList.add("active");

startCarousel();

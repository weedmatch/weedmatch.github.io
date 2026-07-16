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

const languageWrapper = document.querySelector(".language-wrapper");
const languageSelector = document.querySelector(".language-selector");
const selectedLanguage = document.querySelector(".selected-language");
const languageOption = document.querySelector(".language-option");


languageSelector.addEventListener("click", () => {

    languageWrapper.classList.toggle("open");

});


languageOption.addEventListener("click", () => {

    if(selectedLanguage.textContent === "English") {

        selectedLanguage.textContent = "Deutsch";
        languageOption.textContent = "English";

    } else {

        selectedLanguage.textContent = "English";
        languageOption.textContent = "Deutsch";

    }

    languageWrapper.classList.remove("open");

});

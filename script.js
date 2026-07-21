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


// Language Dropdown

if (languageSelector && languageWrapper) {

    languageSelector.addEventListener("click", () => {
    console.log("language clicked");
    languageWrapper.classList.toggle("open");
});

}


if (languageOption && selectedLanguage && languageWrapper) {

    languageOption.addEventListener("click", () => {

        if (selectedLanguage.textContent.trim() === "English") {

            selectedLanguage.textContent = "Deutsch";
            languageOption.textContent = "English";

        } else {

            selectedLanguage.textContent = "English";
            languageOption.textContent = "Deutsch";

        }

        languageWrapper.classList.remove("open");

    });

}


// Contact Dropdown

const contactWrapper = document.querySelector(".contact-wrapper");
const contactToggle = document.querySelector(".contact-toggle");


if (contactToggle && contactWrapper) {

    contactToggle.addEventListener("click", (event) => {
        event.stopPropagation();
        contactWrapper.classList.toggle("open");
    });

}


// Close Dropdowns When Clicking Outside

document.addEventListener("click", (event) => {

    if (languageWrapper && !event.target.closest(".language-wrapper")) {
        languageWrapper.classList.remove("open");
    }


    if (contactWrapper && !event.target.closest(".contact-wrapper")) {
        contactWrapper.classList.remove("open");
    }

});

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







const sliderImages = document.querySelectorAll(".slider-image");

let currentSliderImage = 0;


function changeSliderImage() {

    sliderImages[currentSliderImage].classList.remove("active");


    currentSliderImage++;


    if (currentSliderImage >= sliderImages.length) {

        currentSliderImage = 0;

    }


    sliderImages[currentSliderImage].classList.add("active");

}


if (sliderImages.length > 0) {

    setInterval(changeSliderImage, 3000);

}










const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {

        faqItems.forEach(other => {

            if (other !== item) {

                other.classList.remove("active");

                other.querySelector(".faq-answer").style.maxHeight = null;

                other.querySelector(".faq-icon").textContent = "+";

            }

        });


        item.classList.toggle("active");

        const answer = item.querySelector(".faq-answer");
        const icon = item.querySelector(".faq-icon");


        if (item.classList.contains("active")) {

            answer.style.maxHeight = answer.scrollHeight + "px";

            icon.textContent = "×";

        } else {

            answer.style.maxHeight = null;

            icon.textContent = "+";

        }

    });

});











// =============================
// SUBSCRIPTION SLIDER
// =============================

const subscriptionImage = document.getElementById("subscription-image");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const subscriptionDots = document.querySelectorAll(".subscription-dot");


const subscriptionPlans = [

    "assets/images/free-match.png",
    "assets/images/most-popular.png",
    "assets/images/sesh.png"

];

let currentSubscription = 1;

function updateSubscriptionSlider() {

    subscriptionImage.style.opacity = "0";
    subscriptionImage.style.transform = "translateX(30px)";


    setTimeout(() => {

        subscriptionImage.src = subscriptionPlans[currentSubscription];

        subscriptionImage.style.transform = "translateX(0)";
        subscriptionImage.style.opacity = "1";

    }, 300);


    subscriptionDots.forEach((dot, index)=>{
        dot.classList.toggle(
            "active",
            index === currentSubscription
        );
    });


    // Hide arrows at ends

    if(currentSubscription === 0){

        leftArrow.style.visibility = "hidden";
        rightArrow.style.visibility = "visible";

    }

    else if(currentSubscription === subscriptionPlans.length - 1){

        rightArrow.style.visibility = "hidden";
        leftArrow.style.visibility = "visible";
    }

    else {

        leftArrow.style.visibility = "visible";
        rightArrow.style.visibility = "visible";
    }

}


rightArrow.addEventListener("click", ()=>{

    if(currentSubscription < subscriptionPlans.length - 1){
        currentSubscription++;
        updateSubscriptionSlider();
    }

});


leftArrow.addEventListener("click", ()=>{
    if(currentSubscription > 0){

        currentSubscription--;
        updateSubscriptionSlider();
    }

});

updateSubscriptionSlider();











// Contact form

const fileInput = document.getElementById("attachment");
const fileList = document.querySelector(".file-list");

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

fileInput.addEventListener("change", () => {

    for (const file of fileInput.files) {

        if (file.size > MAX_FILE_SIZE) {

            alert(`"${file.name}" is larger than 10 MB. Please choose a smaller file.`);

            fileInput.value = "";
            fileList.textContent = "No file chosen";

            return;
        }
    }

    if (fileInput.files.length === 0) {

        fileList.textContent = "No file chosen";

    } else {

        fileList.textContent = Array.from(fileInput.files)
            .map(file => file.name)
            .join(", ");

    }

});




const form = document.getElementById("contactForm");

const submitButton = form.querySelector(".contact-submit");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    submitButton.disabled = true;

    let dots = 0;

    const loadingAnimation = setInterval(() => {

        dots = dots >= 3 ? 1 : dots + 1;

        submitButton.textContent =
            "Sending" + ".".repeat(dots);

    }, 400);


    const scriptURL = "https://script.google.com/macros/s/AKfycbw6qxVG919XL0wcwfSFmYHLi_YJb4oWk7PjcsIoDBp-Pq_X2o0hKze__bW5E-YLjsg/exec";
    
    const file = fileInput.files[0];

    let fileData = null;


    // Convert file to Base64

    if (file) {

        fileData = await new Promise((resolve, reject) => {

            const reader = new FileReader();

            reader.onload = () => {

                resolve({
                    name: file.name,
                    type: file.type,
                    data: reader.result
                });

            };

            reader.onerror = reject;

            reader.readAsDataURL(file);

        });

    }


    const formObject = {

        fullname: form.fullname.value,
        email: form.email.value,
        inquiry: form.inquiry.value,
        message: form.message.value,
        file: fileData

    };


    try {

        const response = await fetch(scriptURL, {

    method: "POST",
    body: JSON.stringify(formObject)

});

const result = await response.text();

if (result !== "Success") {
    throw new Error(result);
}


        clearInterval(loadingAnimation);

        submitButton.textContent = "Submit";
        submitButton.disabled = false;


        alert("Message sent!");

        form.reset();

        fileList.textContent = "No file chosen";


    } catch (error) {

        clearInterval(loadingAnimation);

        submitButton.textContent = "Submit";
        submitButton.disabled = false;

        console.error(error);

        alert("Message not sent.");

    }

});
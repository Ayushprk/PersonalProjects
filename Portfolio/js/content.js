var slideshows = document.getElementsByClassName("slideshow");

for (var i = 0; i < slideshows.length; i++) {
    initializeSlideshow(slideshows[i]);
}

function initializeSlideshow(slideshow) {
    var prevButton = slideshow.querySelector(".prev");
    var nextButton = slideshow.querySelector(".next");
    var indicator = slideshow.querySelector(".indicator");
    var slides = slideshow.getElementsByTagName("img");
    var slideIndex = 0;

    showSlide(slideshow, slideIndex);

    prevButton.addEventListener("click", function() {
        changeSlide(slideshow, -1);
    });

    nextButton.addEventListener("click", function() {
        changeSlide(slideshow, 1);
    });
}

function changeSlide(slideshow, n) {
    var slides = slideshow.getElementsByTagName("img");
    var slideIndex = parseInt(slideshow.getAttribute("data-index")) || 0;
    slideIndex += n;

    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    slideshow.setAttribute("data-index", slideIndex);
    showSlide(slideshow, slideIndex);
}

function showSlide(slideshow, n) {
    var slides = slideshow.getElementsByTagName("img");
    var indicator = slideshow.querySelector(".indicator");

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[n].style.display = "block";
    indicator.innerHTML = (n + 1) + " / " + slides.length;
}
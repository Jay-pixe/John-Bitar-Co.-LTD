// JavaScript functionality (if any) can be added here
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.nextElementSibling.classList.toggle('active');
  });
});

//Above ends the header


///this start the slide share

let slideIndex = 0;
let slideInterval;

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("active");
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

function currentSlide(n) {
    clearInterval(slideInterval);
    slideIndex = n - 1;
    showSlides();
}

document.addEventListener("DOMContentLoaded", function () {
    showSlides();

    const radioButtons = document.querySelectorAll('.dot');
    radioButtons.forEach((radioButton, index) => {
        radioButton.addEventListener('click', () => currentSlide(index + 1));
    });

    slideInterval = setInterval(showSlides, 5000);
});




///explore our products
function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

function scrollToProducts() {
    var productsSection = document.getElementById('products');
    productsSection.scrollIntoView({ behavior: 'smooth' });
}



document.addEventListener('DOMContentLoaded', function() {
  const dropdowns = document.querySelectorAll('nav ul li');
  let currentOpenDropdown = null;
  let hideTimeout;

  dropdowns.forEach(dropdown => {
    const submenu = dropdown.querySelector('ul');

    dropdown.addEventListener('mouseover', function() {
      if (currentOpenDropdown && currentOpenDropdown !== submenu) {
        clearTimeout(hideTimeout);
        currentOpenDropdown.style.display = 'none';
      }

      if (submenu) {
        clearTimeout(hideTimeout);
        submenu.style.display = 'block';
        currentOpenDropdown = submenu;
      }
    });

    dropdown.addEventListener('mouseleave', function() {
      if (submenu) {
        hideTimeout = setTimeout(() => {
          submenu.style.display = 'none';
          currentOpenDropdown = null;
        }, 300); // Adjust the delay as needed
      }
    });

    if (submenu) {
      submenu.addEventListener('mouseover', function() {
        clearTimeout(hideTimeout);
      });

      submenu.addEventListener('mouseleave', function() {
        hideTimeout = setTimeout(() => {
          submenu.style.display = 'none';
          currentOpenDropdown = null;
        }, 300); // Adjust the delay as needed
      });
    }
  });
});

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

// Above ends the header

// Slide share functionality
let slideIndex = 0;
let slideInterval;

const showSlides = (n) => {
  const slides = document.querySelectorAll('.mySlides');
  if (n >= slides.length) { slideIndex = 0; }
  if (n < 0) { slideIndex = slides.length - 1; }

  slides.forEach((slide) => {
    slide.classList.remove('fade-in');
    slide.style.display = 'none';
  });

  slides[slideIndex].style.display = 'block';
  setTimeout(() => {
    slides[slideIndex].classList.add('fade-in');
  }, 20);
};

const plusSlides = (n) => {
  clearInterval(slideInterval);
  showSlides(slideIndex += n);
  startSlideShow();
};

const startSlideShow = () => {
  slideInterval = setInterval(() => {
    showSlides(++slideIndex);
  }, 10000); // Change image every 10 seconds
};

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
  showSlides(slideIndex);
  startSlideShow();
});

// Explore our products
function scrollToProducts() {
  var productsSection = document.getElementById('products');
  productsSection.scrollIntoView({ behavior: 'smooth' });
}

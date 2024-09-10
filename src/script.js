const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-slide');
const nextButton = document.querySelector('.next-slide');
let currentSlide = 0;

function showSlide(index) {
    const totalSlides = slides.length;
    currentSlide = (index + totalSlides) % totalSlides;
    document.querySelector('.slider-container').style.transform = `translateX(-${currentSlide * 100}%)`;
}

nextButton.addEventListener('click', () => showSlide(currentSlide + 1));
prevButton.addEventListener('click', () => showSlide(currentSlide - 1));


const navLinks = document.getElementById('nav-links');
const menuIcon = document.getElementById('menu-icon');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
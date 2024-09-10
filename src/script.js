const navLinks = document.getElementById('nav-links');
const menuIcon = document.getElementById('menu-icon');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    });
});
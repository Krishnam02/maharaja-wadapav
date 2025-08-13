AOS.init({
    duration: 1000,
    once: true
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
        // Close mobile menu after click
        document.querySelector('.nav-links').classList.remove('show');
    });
});

// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Slide Box - show on scroll bottom
window.addEventListener('scroll', function () {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        document.getElementById('slideBox').classList.add('show');
    }
});

// Close slide box
document.getElementById('closeBox').addEventListener('click', function () {
    document.getElementById('slideBox').classList.remove('show');
});

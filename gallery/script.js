
function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("active");
}

const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});

function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("active");
}

const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');

document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
        lightbox.classList.add('show');
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
    });
});

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('show');
});

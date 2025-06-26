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

// Анімація зображень при скролі
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-on-scroll');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    // Анімувати всі зображення з галереї
    document.querySelectorAll('.gallery img').forEach((img, i) => {
        img.classList.add(`delay-${(i % 10) + 1}`);
        observer.observe(img);
    });
});
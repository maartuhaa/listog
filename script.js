
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


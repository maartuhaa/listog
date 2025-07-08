
function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
}

// Закрити меню при кліку поза меню (і поза бургером)
document.addEventListener('click', function(event) {
    const navLinks = document.getElementById("nav-links");
    const burger = document.querySelector('.burger');

    const isClickInsideMenu = navLinks.contains(event.target);
    const isClickOnBurger = burger.contains(event.target);

    // Якщо клік поза меню і бургером і меню відкрите — закриваємо меню
    if (!isClickInsideMenu && !isClickOnBurger && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});

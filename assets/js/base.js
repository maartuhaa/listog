/* =====================
   BURGER MENU
===================== */
function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
}

/* Close menu on outside click */
document.addEventListener("click", (event) => {
    const navLinks = document.getElementById("nav-links");
    const burger = document.querySelector(".burger");

    if (!navLinks || !burger) return;

    const insideMenu = navLinks.contains(event.target);
    const insideBurger = burger.contains(event.target);

    if (!insideMenu && !insideBurger) {
        navLinks.classList.remove("active");
    }
});

/* =====================
   HEADER SHRINK ON SCROLL
===================== */
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});

/* =====================
   SMOOTH SCROLL (anchors)
===================== */
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        document.getElementById("nav-links")?.classList.remove("active");
    });
});

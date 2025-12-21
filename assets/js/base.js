/* =====================
   BURGER MENU
===================== */
function toggleMenu() {
    const menu = document.querySelector(".menu");
    if (!menu) return;
    menu.classList.toggle("active");
}

/* =====================
   CLOSE MENU ON OUTSIDE CLICK
===================== */
document.addEventListener("click", (event) => {
    const menu = document.querySelector(".menu");
    const burger = document.querySelector(".burger");

    if (!menu || !burger) return;

    const clickInsideMenu = menu.contains(event.target);
    const clickOnBurger = burger.contains(event.target);

    if (!clickInsideMenu && !clickOnBurger) {
        menu.classList.remove("active");
    }
});

/* =====================
   HEADER SHRINK ON SCROLL
===================== */
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (!header) return;
    header.classList.toggle("shrink", window.scrollY > 50);
});

/* =====================
   SMOOTH SCROLL (ANCHORS)
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

        // close mobile menu after click
        document.querySelector(".menu")?.classList.remove("active");
    });
});

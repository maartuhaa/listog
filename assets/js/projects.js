/* =====================================================
   PROJECTS PAGE SCRIPT
   - Lightbox (image + video)
   - Keyboard navigation
   - Scroll animation (gallery reveal)
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================
       GALLERY / LIGHTBOX
    ===================== */

    const galleryItems = document.querySelectorAll(
        ".gallery-item img, .gallery-item video"
    );
    const lightbox = document.getElementById("lightbox");

    if (!lightbox || !galleryItems.length) return;

    const closeBtn = lightbox.querySelector(".close");
    const nextBtn = lightbox.querySelector(".next");
    const prevBtn = lightbox.querySelector(".prev");

    let currentIndex = 0;
    let currentElement = null;

    /* ---------- OPEN ---------- */
    function openLightbox(index) {
        currentIndex = index;
        currentElement = galleryItems[index];

        // Clear previous content
        lightbox.querySelectorAll("img, video").forEach(el => {
            if (el.tagName === "VIDEO") el.pause();
            el.remove();
        });

        if (currentElement.tagName === "VIDEO") {
            const video = currentElement.cloneNode(true);
            video.controls = true;
            video.autoplay = true;
            video.muted = false;
            video.loop = false;

            lightbox.appendChild(video);

            // Hide arrows for video
            nextBtn.style.display = "none";
            prevBtn.style.display = "none";
        } else {
            const img = document.createElement("img");
            img.src = currentElement.src;
            img.alt = currentElement.alt || "";

            lightbox.appendChild(img);

            nextBtn.style.display = "";
            prevBtn.style.display = "";
        }

        lightbox.classList.add("show");
        document.body.style.overflow = "hidden";
    }

    /* ---------- CLOSE ---------- */
    function closeLightbox() {
        lightbox.classList.remove("show");
        document.body.style.overflow = "";

        lightbox.querySelectorAll("img, video").forEach(el => {
            if (el.tagName === "VIDEO") el.pause();
            el.remove();
        });
    }

    /* ---------- NEXT / PREV (IMAGES ONLY) ---------- */
    function showNext() {
        do {
            currentIndex = (currentIndex + 1) % galleryItems.length;
        } while (galleryItems[currentIndex].tagName === "VIDEO");

        openLightbox(currentIndex);
    }

    function showPrev() {
        do {
            currentIndex =
                (currentIndex - 1 + galleryItems.length) %
                galleryItems.length;
        } while (galleryItems[currentIndex].tagName === "VIDEO");

        openLightbox(currentIndex);
    }

    /* ---------- EVENTS ---------- */
    galleryItems.forEach((item, index) => {
        item.addEventListener("click", e => {
            e.preventDefault();
            openLightbox(index);
        });
    });

    closeBtn?.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", e => {
        if (e.target === lightbox) closeLightbox();
    });

    nextBtn?.addEventListener("click", showNext);
    prevBtn?.addEventListener("click", showPrev);

    document.addEventListener("keydown", e => {
        if (!lightbox.classList.contains("show")) return;

        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowRight") showNext();
        if (e.key === "ArrowLeft") showPrev();
    });

    /* =====================
       GALLERY SCROLL ANIMATION
    ===================== */

    const galleryBlocks = document.querySelectorAll(".gallery-item");

    if (galleryBlocks.length) {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                        observer.unobserve(entry.target); // one-time animation
                    }
                });
            },
            { threshold: 0.15 }
        );

        galleryBlocks.forEach(item => observer.observe(item));
    }
});

/* =====================
   PAGE TITLE ANIMATION
===================== */
const title = document.querySelector("h1");
if (title) {
    // невелика затримка, щоб виглядало мʼякше
    setTimeout(() => {
        title.classList.add("show");
    }, 100);
}

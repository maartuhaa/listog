/* =====================
   CONTACT FORM + POPUP
===================== */

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const popup = document.getElementById("success-popup");

    if (!form || !popup) return;

    form.addEventListener("submit", e => {
        e.preventDefault();

        const data = new FormData(form);

        fetch("https://formsubmit.co/post@listogas.no", {
            method: "POST",
            body: data
        })
            .then(response => {
                if (!response.ok) throw new Error();
                form.reset();
                popup.classList.add("show");
                document.body.style.overflow = "hidden";
            })
            .catch(() => {
                alert("Noe gikk galt. Prøv igjen senere.");
            });
    });

    /* Close popup on click outside */
    popup.addEventListener("click", e => {
        if (e.target === popup) closePopup();
    });

    /* Close popup on ESC */
    document.addEventListener("keydown", e => {
        if (e.key === "Escape" && popup.classList.contains("show")) {
            closePopup();
        }
    });

    function closePopup() {
        popup.classList.remove("show");
        document.body.style.overflow = "";
    }
});

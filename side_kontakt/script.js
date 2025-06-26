
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

 document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault(); // блокуємо стандартну відправку

  const form = e.target;
  const data = new FormData(form);

  fetch("https://formsubmit.co/post@listogas.no", {
    method: "POST",
    body: data
  })
  .then(response => {
    if (response.ok) {
      window.location.href = "../index.html";  // тут вказаний правильний шлях
    } else {
      alert("Noe gikk galt! Prøv igjen.");
    }
  })
  .catch(error => {
    console.error("Feil ved sending:", error);
    alert("Feil ved sending! Sjekk internett eller prøv igjen senere.");
  });
});

// Gestion du slider d'images et de texte
let currentSlide = 0;

const images = document.querySelectorAll('.image-slider img');
const texts = document.querySelectorAll('.text-slider p');

function changeSlide() {
    // Réinitialiser les classes actives
    images.forEach((img, index) => img.classList.remove('active'));
    texts.forEach((text, index) => text.classList.remove('active'));

    // Activer le slide actuel
    images[currentSlide].classList.add('active');
    texts[currentSlide].classList.add('active');

    // Passer au prochain slide
    currentSlide = (currentSlide + 1) % images.length;
}

// Démarrer le slider (toutes les 3 secondes)
setInterval(changeSlide, 3000);

// Initialiser le premier slide
changeSlide();

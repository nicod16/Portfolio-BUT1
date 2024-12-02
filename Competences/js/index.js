document.addEventListener('DOMContentLoaded', () => {
    const frames = document.querySelectorAll('.frame');

    frames.forEach(frame => {
        const imagesContainer = frame.querySelector('.image-slider .images');
        const images = frame.querySelectorAll('.image-slider img');
        const texts = frame.querySelectorAll('.text-slider p');
        const prevButton = frame.querySelector('.arrow.prev');
        const nextButton = frame.querySelector('.arrow.next');
        let currentIndex = 0;

        // Mettre à jour le slider
        function updateSlider() {
            // Changer la position des images
            imagesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

            // Mettre à jour le texte
            texts.forEach((text, index) => {
                text.classList.toggle('active', index === currentIndex);
            });
        }

        // Bouton précédent
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateSlider();
        });

        // Bouton suivant
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateSlider();
        });

        // Initialisation
        updateSlider();
    });
});

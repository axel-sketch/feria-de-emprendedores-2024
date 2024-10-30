const buttons = [
    document.getElementById('button-1'),
    document.getElementById('button-2'),
    document.getElementById('button-3'),
    document.getElementById('button-4'),
    document.getElementById('button-5')
];

// Escucha cuando el carrusel cambia de imagen
document.getElementById('carouselExampleDark').addEventListener('slid.bs.carousel', function (event) {
    const activeIndex = event.to;

    // Oculta todos los botones primero
    buttons.forEach(button => button.classList.add('d-none'));

    // Muestra solo el botón correspondiente a la imagen activa
    buttons[activeIndex].classList.remove('d-none');
});

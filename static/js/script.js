let indiceCarrusel = 0;

function moverCarrusel(direccion) {
    const pista = document.getElementById("pista");

    if (!pista) return;

    const diapositivas = pista.querySelectorAll(".diapositiva");

    if (diapositivas.length === 0) return;

    indiceCarrusel += direccion;

    if (indiceCarrusel >= diapositivas.length) {
        indiceCarrusel = 0;
    }

    if (indiceCarrusel < 0) {
        indiceCarrusel = diapositivas.length - 1;
    }

    const ancho = pista.parentElement.clientWidth;

    pista.style.transform =
        `translateX(-${indiceCarrusel * ancho}px)`;
}

window.addEventListener("resize", function () {
    const pista = document.getElementById("pista");

    if (!pista) return;

    const ancho = pista.parentElement.clientWidth;

    pista.style.transform =
        `translateX(-${indiceCarrusel * ancho}px)`;
});

let indiceCarrusel = 0;

function moverCarrusel(direccion) {
    const pista = document.getElementById("pista");
    const diapositivas = document.querySelectorAll("#pista .diapositiva");

    if (!pista || diapositivas.length === 0) return;

    indiceCarrusel += direccion;

    if (indiceCarrusel >= diapositivas.length) {
        indiceCarrusel = 0;
    }

    if (indiceCarrusel < 0) {
        indiceCarrusel = diapositivas.length - 1;
    }

    pista.style.transform =
        `translateX(-${indiceCarrusel * 100}%)`;
}

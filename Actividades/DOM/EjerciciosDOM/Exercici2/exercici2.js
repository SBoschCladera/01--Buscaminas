function ocultarMostrar(parrafo, enlace) {

    let parrafoSeleccionado = document.getElementById(parrafo)
    let enlaceSeleccionado = document.getElementById(enlace);


    if (parrafoSeleccionado.className == 'ocult') {
        parrafoSeleccionado.className = 'visible';
        enlaceSeleccionado.innerHTML = 'Ocultar';
    } else {
        parrafoSeleccionado.className = 'ocult';
        enlaceSeleccionado.innerHTML = 'Mostrar'
    }
}
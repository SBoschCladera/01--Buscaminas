/*
13. Crea una pàgina que mostri 2000 quadrats de colors aleatoris i els posiciones a la pantalla
també de forma aleatòria. Cada quadrat ha de mesurar 50x50 píxels.
*/

document.addEventListener("DOMContentLoaded", function (event) {


    iniciarApp(2000);


    // Inicia la app, se introduce cómo parámetro el número de cuadrados a mostrar en pantalla.
    function iniciarApp(numCuadrados) {
        for (let i = 0; i < numCuadrados; i++) {
            crearDiv(arrayColores())
        }
    }

    // Crear un array de colores para el background del cuadrado.
    function arrayColores() {
        let colores = [];

        for (let i = 0; i < 3; i++) {
            let random = parseInt(Math.random() * 255);
            colores.push(random);
        }
        return colores;
    }

    // Crear un cuadrado colocado de forma aleatoria en pantalla (desde una posición "X" e "Y" mayor a un 2% y menor del 98%, 
    // para que no queden fuera de pantalla) con un fondo de color aleatorio.
    function crearDiv(colores) {
        let posicionXRandom = parseInt(Math.random() * 98);
        let posicionYRandom = parseInt(Math.random() * 95);

        let div = document.createElement('div');
        div.className = "caja"
        div.style.position = "absolute";
        div.style.left = `${posicionXRandom}%`;
        div.style.top = `${posicionYRandom}%`;
        div.style.backgroundColor = `rgb(${colores[0]}, ${colores[1]}, ${colores[2]})`;
        document.body.appendChild(div);
    }
});
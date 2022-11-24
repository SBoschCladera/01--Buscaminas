/*
11. Repetir exercici 1 utilizant només els mètodes del DOM createElement,
createTextNode, appendChild.
CONSELL: implementa una funció per crear nodes del DOM. Tendrà 3 paràmetres:
• etiqueta (el nom del node: tr, td, ...)
• txt (el text que conté el node, o null si no en té)
• color (el color de fons, o null si no té color de fons
*/

document.addEventListener("DOMContentLoaded", function (event) {

    // Llamada a la función que crea la tabla.
    crearTabla();

    // Rellena un array con 3 números aleatorios y la combinación de todos para crear un color(cuarta posición del array).
    function arrayColores() {
        let colores = [];
        for (let i = 0; i < 3; i++) {
            let numAleatorio = parseInt(Math.random() * 255);
            colores.push(numAleatorio)
        }
        colores.push(`rgb(${colores[0]}, ${colores[1]}, ${colores[2]})`);
        return colores;
    }

    // Crean un nodo según los parámetros de entrada.
    function crearNodo(etiqueta, txt, color) {
        let nombre = document.createElement(etiqueta);
        let contenido = document.createTextNode(txt);
        nombre.appendChild(contenido);
        nombre.style.backgroundColor = color;

        return nombre;
    }

    // Crea una tabla html
    function crearTabla() {
        let arrayEncabezado = ['ROJO', 'VERDE', 'AZUL', 'COLOR'];
        let coloresEncabezado = ['red', 'green', 'blue'];
        let filas = 20;
        let columnas = 4;

        // Título de la Tabla        
        let titulo = crearNodo('h1', 'Tabla de Colores Aleatorios', 'null');
        document.body.appendChild(titulo);

        // Elemento Tabla        
        let tabla = crearNodo('table', "", null);
        document.body.appendChild(tabla);

        // Elemento Tbody       
        let tbody = crearNodo('tbody', "", null);
        tabla.appendChild(tbody);

        // Crea el encabezado con su contenido
        for (let i = 0; i < 1; i++) {
            let tr = crearNodo('tr', "", null)
            for (let j = 0; j < arrayEncabezado.length; j++) {
                let th = crearNodo('th', arrayEncabezado[j], coloresEncabezado[j])
                th.setAttribute('id', 'idEncabezado' + (j + 1))
                tr.appendChild(th);
            }
            tbody.appendChild(tr);
        }

        // Crea el cuerpo de la tabla con su contenido
        // Tres primeras celdas de la fila.

        for (let i = 0; i < filas; i++) {
            let colores = arrayColores(); // Array con los colores a mostrar.
            let tr = crearNodo('tr', "", null)

            for (let j = 0; j < columnas - 1; j++) {
                let td = crearNodo('td', colores[j], null);
                tr.appendChild(td);
            }

            // Cuarta celda de la fila
            td = crearNodo('td', "", colores[3]);
            tr.appendChild(td);
            tbody.appendChild(tr);
        }
    }
});



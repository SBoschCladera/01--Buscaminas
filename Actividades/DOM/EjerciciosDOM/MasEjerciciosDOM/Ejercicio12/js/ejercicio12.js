/*
12. Repetir exercici 1 utilitzant NOMÉS els mètodes insertRow i insertCell. Per emplenar el
contingut de la cel·la usa la seva propietat textContent i pel color de fons
style.backgroundColor. Mira exemples a
https://www.w3schools.com/jsref/coll_table_rows.asp
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

    // Crea una tabla html
    function crearTabla() {
        let arrayEncabezado = ['ROJO', 'VERDE', 'AZUL', 'COLOR'];
        let filas = 20;
        let columnas = 4;

        // Títlo de la Tabla
        let titulo = document.createElement('h1');
        let contenidoTitulo = document.createTextNode('Tabla de Colores Aleatorios');
        titulo.appendChild(contenidoTitulo);
        document.body.appendChild(titulo);


        let tabla = document.createElement("table");
        let tbody = document.createElement("tbody");

        // Crea el encabezado con su contenido
        for (let i = 0; i < 1; i++) {
            let tr = tabla.insertRow();
            for (let j = 0; j < arrayEncabezado.length; j++) {
                let th = tr.insertCell();
                let contenidoCelda = document.createTextNode(arrayEncabezado[j]);
                th.setAttribute('id', 'idEncabezado' + (j + 1))
                th.appendChild(contenidoCelda);
                tr.appendChild(th);
            }
            tabla.appendChild(tr);
        }

        // Crea el cuerpo de la tabla con su contenido
        for (let i = 0; i < filas; i++) {
            let tr = tabla.insertRow();
            tr.dataset.fila = i;
            for (let j = 0; j < columnas; j++) {
                let td = tr.insertCell();
                td.dataset.columna = j;
                let contenidoCelda = document.createTextNode(arrayColores()[j]);
                td.appendChild(contenidoCelda);
                tr.appendChild(td);

                // Condición para cambiar el background de la última celda 
                if (td.dataset.columna == (arrayColores().length - 1)) {
                    td.innerHTML = "";
                    td.style.backgroundColor = arrayColores()[3];
                }
            }
            tabla.appendChild(tr);
        }
        tabla.appendChild(tbody);
        document.body.appendChild(tabla);
    }

});



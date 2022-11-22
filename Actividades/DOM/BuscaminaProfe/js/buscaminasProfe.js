class Tablero {
    constructor(filas, columnas) {
        this.filas = filas;
        this.columnas = columnas;

        this.crearTablero();
    }

    crearTablero() {
        // Crear array bidimensional para guardar las minas
        this.arrayTablero = [];

        for (let fila = 0; fila < this.filas; fila++) {
            this.arrayTablero[fila] = [];

            for (let columna = 0; columna < this.columnas; columna++) {
                this.arrayTablero[fila][columna] = '';
            }
        }
    }

    dibujarTableroHTML() {
        // Creamos el tablero en html
        document.write('<table>');

        for (let i = 0; i < this.filas; i++) {
            document.write('<tr>');

            for (let j = 0; j < this.columnas; j++) {
                document.write(`<td></td>`);
            }

            document.write('</tr>');
        }
        document.write('</table>');
    }

    dibujarTableroDOM() {
        // Creamos el tablero en DOM
        let tabla = document.createElement('table');
        let fila;
        let columna;

        for (let i = 0; i < this.filas; i++) {
            fila = document.createElement('tr');
            tabla.appendChild(fila);
            fila.dataset.fila = i;

            for (let j = 0; j < this.columnas; j++) {
                columna = document.createElement('td');
                fila.appendChild(columna);
                columna.id = 'f' + i + '_c' + j;
                columna.dataset.fila = i;
                columna.dataset.columna = j;

                columna.addEventListener('click', this.despejar);
                columna.addEventListener('contextmenu', this.marcar);
            }
        }
        document.body.appendChild(tabla);
    }

    despejar() {
        let fila = this.dataset.fila;
        let columna = this.dataset.columna;
        let identificador = this.id;

        alert(`Has despejado la celda (${fila}, ${columna})`);
    }

    marcar() {
        //let fila = this.dataset.fila;         // Obtiene el valor de data-fila
        //let columna = this.dataset.columna;   // Obtiene el valor de data-columna
        let identificador = this.id;

        // Obtiene el color del baackground de la celda
        const elemento = document.getElementById(identificador);
        const cssObj = window.getComputedStyle(elemento, null);
        let color = cssObj.getPropertyValue("background-color");
        //console.log(color)

        //Deshabilita el desplegable del botón derecho del ratón en todo el documento.
        document.addEventListener('contextmenu', event => event.preventDefault());

        let urlBandera = 'https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f3f4.png';
        let urlInterrogante = 'https://images.emojiterra.com/mozilla/512px/2753.png';

        let td = document.getElementById(identificador);
        let img = document.createElement('img');

        switch (color) {
            case 'rgb(255, 255, 255)':
                img.setAttribute('src', urlBandera);
                td.innerHTML = "";
                td.appendChild(img);
                document.getElementById(identificador).style.backgroundColor = "rgb(255, 255, 254)";
                break;
            case 'rgb(255, 255, 254)':
                img.setAttribute('src', urlInterrogante);
                td.innerHTML = "";
                td.appendChild(img);
                document.getElementById(identificador).style.backgroundColor = "rgb(255, 255, 253)";
                break;
            case 'rgb(255, 255, 253)':
                td.innerHTML = "";
                document.getElementById(identificador).style.backgroundColor = "rgb(255, 255, 255)";
                break;
        }

    }
/*
    colocarIcono(identificador, url, colorDeFondo) {
        let td = document.getElementById(identificador);
        let img = document.createElement('img');
        img.setAttribute('src', url);
        td.innerHTML = "";
        td.appendChild(img);
        document.getElementById(identificador).style.backgroundColor = colorDeFondo;
    }
*/

    modificarFilas(nuevasFilas) {
        // Modificar el número de filas y volver a crear el tablero con las filas nuevas
        this.filas = nuevasFilas;

        this.crearTablero();
    }

    modificarColumnas(nuevasColumnas) {
        // Modificar el número de columnas y volver a crear el tablero con las columnas nuevas
        this.columnas = nuevasColumnas;

        this.crearTablero();
    }
}

class Buscaminas extends Tablero {
    constructor(filas, columnas, numMinas) {
        super(filas, columnas);
        this.numMinas = numMinas;

        this.colocarMinas();
        this.colocarNumMinas();
    }

    colocarMinas() {
        let contadorMinas = 0;
        let posFila;
        let posColumna;


        while (contadorMinas < this.numMinas) {
            posFila = Math.floor(Math.random() * this.filas);
            posColumna = Math.floor(Math.random() * this.columnas);

            if (this.arrayTablero[posFila][posColumna] != 'MINA') {
                this.arrayTablero[posFila][posColumna] = 'MINA';
                contadorMinas++;
            };
        };
    }

    colocarNumMinas() {
        let numMinasAlrededor;

        for (let fila = 0; fila < this.filas; fila++) {
            for (let columna = 0; columna < this.columnas; columna++) {
                numMinasAlrededor = 0;
                if (this.arrayTablero[fila][columna] != 'MINA') {
                    for (let cFila = fila - 1; cFila <= fila + 1; cFila++) {
                        if (cFila >= 0 && cFila < this.filas) {
                            for (let cColumna = columna - 1; cColumna <= columna + 1; cColumna++) {
                                if (cColumna >= 0 && cColumna < this.columnas &&
                                    this.arrayTablero[cFila][cColumna] == 'MINA') {
                                    numMinasAlrededor++;
                                }
                            }
                        }
                        this.arrayTablero[fila][columna] = numMinasAlrededor;
                    }
                }
            }
        }
    }
}

window.onload = function () {
    let buscaminas1 = new Buscaminas(5, 5, 5);
    buscaminas1.dibujarTableroDOM();
}
//document.addEventListener("DOMContentLoaded", function (event) {
//  window.addEventListener("load", verContenido);

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

    dibujarTablero() {
        // Pinta el tablero en pantalla.

        let titulo = document.createElement('h1');
        let textoTitulo = document.createTextNode('BUSCAMINAS');
        titulo.appendChild(textoTitulo);
        titulo.setAttribute('class', 'font-effect-fire')
        document.body.appendChild(titulo);

        this.crearTabla();
    }


    crearTabla() {
        // Crea una tabla
        let url = 'https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f4a3.png';

        let tabla = document.createElement('table'); // Crea una tabla
        let cuerpoTabla = document.createElement('tbody'); // Crea el tbody

        for (let i = 0; i < this.filas; i++) {

            let tr = document.createElement('tr');   // Crea una fila.                                    

            for (let j = 0; j < this.columnas; j++) {

                let valorCelda = this.arrayTablero[i][j];  // Valor de la celda del tablero. Parámetro para el evento de click.

                let td = document.createElement('td'); // Crea una celda
                let contenidoTd = document.createTextNode(""); // Añade el texto deseado a la celda
                td.appendChild(contenidoTd); // Añade el texto a la celda.

                // Evento de click para mostrar el valor de una celda.
                td.onclick = function () {
                    contenidoTd = document.createTextNode(valorCelda);
                    td.innerHTML = contenidoTd.nodeValue;

                    if (valorCelda == 'X') {
                        let img = document.createElement('img'); // Coloca una imagen sustituyendo 'X'.
                        img.setAttribute('src', url);
                        td.innerHTML = "";
                        td.appendChild(img);
                        //alert('Has murido!!!!');  
                    } else if (valorCelda == '0') {
                        td.style.color = "green";   // Cambiamos el estilo según necesitemos.
                       
                        console.log('i= ' + i + ' : ' + 'j= ' + j)

                    } else {
                        td.style.color = "red";   // Cambiamos el estilo según necesitemos.
                    }
                };

                tr.appendChild(td); // Añade la celda a la fila.
            }

            cuerpoTabla.appendChild(tr); // Añade la fila al tbody.
        }
        tabla.appendChild(cuerpoTabla); // Añade el tbody a la tabla.

        document.body.appendChild(tabla); // Añade la tabla al cuerpo del documento.
    }
    /*
        comprobarCeldasVacias() {
    
            let valorCelda = this.arrayTablero[i][j];  // Valor de la celda del tablero. Parámetro para el evento de click.
    
            for (let i = 0; i < this.filas; i++) {
                for (let j = 0; j < this.columnas; j++) {
                    if (valorCelda == '0') {
                        for (let cFila = i - 1; cFila <= i + 1; cFila++) {
                            if (cFila >= 0 && cFila < this.filas) {
                                for (let cColumna = j - 1; cColumna <= j + 1; cColumna++) {
                                    if (cColumna >= 0 && cColumna < this.columnas &&
                                        valorCelda[cFila][cColumna] == '0') {
                                        document.body.innerHTML += 'hola'
                                    }
                                }
                            }
                            this.arrayTablero[i][j] = numMinasAlrededor;
                        }
                    }
                }
            }
    
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
        let posFila, posColumna;

        while (contadorMinas < this.numMinas) {
            posFila = Math.floor(Math.random() * this.filas);
            posColumna = Math.floor(Math.random() * this.columnas);

            if (this.arrayTablero[posFila][posColumna] != 'X') {
                this.arrayTablero[posFila][posColumna] = 'X';
                contadorMinas++;
            };
        };
    }

    colocarNumMinas() {
        let numMinasAlrededor;

        for (let fila = 0; fila < this.filas; fila++) {
            for (let columna = 0; columna < this.columnas; columna++) {
                numMinasAlrededor = 0;
                if (this.arrayTablero[fila][columna] != 'X') {
                    for (let cFila = fila - 1; cFila <= fila + 1; cFila++) {
                        if (cFila >= 0 && cFila < this.filas) {
                            for (let cColumna = columna - 1; cColumna <= columna + 1; cColumna++) {
                                if (cColumna >= 0 && cColumna < this.columnas &&
                                    this.arrayTablero[cFila][cColumna] == 'X') {
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
    //console.log(buscaminas1.arrayTablero);
    buscaminas1.dibujarTablero();
}
//});

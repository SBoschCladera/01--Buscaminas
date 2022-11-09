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
        let tabla = document.createElement('table'); // Crea una tabla
        let cuerpoTabla = document.createElement('tbody'); // Crea el tbody

        for (let i = 0; i < this.filas; i++) {

            let tr = document.createElement('tr');   // Crea una fila.                                    

            for (let j = 0; j < this.columnas; j++) {

                let td = document.createElement('td'); // Crea una celda
                let contenidoTd = document.createTextNode(""); // Añade el texto deseado a la celda
                td.appendChild(contenidoTd); // Añade el texto a la celda.

                // Evento para mostrar el valor de una celda.
                // "e" es el objeto que representa el evento, y uno de sus atributos es el target, que viene a ser el elemento que recibió el evento.
                td.addEventListener('click', (e) => {
                    e.target.innerHTML = this.arrayTablero[i][j];
                    this.cambioColores(td, i, j);
                    //console.log('i= ' + i + ' : ' + 'j= ' + j)
                    this.comprobarCeldasVacias(td, i, j)
                });
                tr.appendChild(td); // Añade la celda a la fila.
            }
            cuerpoTabla.appendChild(tr); // Añade la fila al tbody.
        }
        tabla.appendChild(cuerpoTabla); // Añade el tbody a la tabla.

        document.body.appendChild(tabla); // Añade la tabla al cuerpo del documento.
    }


    // Cambio en el CSS
    cambioColores(td, fila, columna) {
        let url = 'https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f4a3.png';

        if (this.arrayTablero[fila][columna] == 'X') {
            let img = document.createElement('img'); // Coloca una imagen sustituyendo 'X'.
            img.setAttribute('src', url);
            td.innerHTML = "";
            td.appendChild(img);
            //alert('Has murido!!!!');  
        } else if (this.arrayTablero[fila][columna] == '0') {
            td.style.color = "green";   // Cambiamos el estilo según necesitemos.
        } else {
            td.style.color = "red";   // Cambiamos el estilo según necesitemos.
        }
    }


    comprobarCeldasVacias(td, fila, columna) {

        if (this.arrayTablero[fila][columna] == '0') {
            /*  for (let cFila = fila - 1; cFila <= fila + 1; cFila++) {
                  if (cFila >= 0 && cFila < this.filas) {
  
                     
                      for (let cColumna = columna - 1; cColumna <= columna + 1; cColumna++) {
                          if (cColumna >= 0 && cColumna < this.columnas) {
  
                              td.addEventListener('click', (e) => {
                                  e.target.innerHTML = this.arrayTablero[fila][columna];
                              });
  
                              console.log('i= ' + fila + ' : ' + 'j= ' + columna)
                          }
                      }
                  }
              }
          }*/

            if (this.arrayTablero[fila-1][columna] == '0') {
                td.addEventListener('click', (e) => {
                    e.target.innerHTML = this.arrayTablero[fila-1][columna];
                });
            }

        }
    }


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



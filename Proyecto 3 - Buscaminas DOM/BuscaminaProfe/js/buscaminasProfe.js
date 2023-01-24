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


    dibujarTableroDOM() {
        // Creamos el tablero en DOM
        let tabla = document.createElement('table');
        let fila;
        let columna;

        for (let i = 0; i < this.filas; i++) {
            fila = document.createElement('tr');
            tabla.appendChild(fila);

            for (let j = 0; j < this.columnas; j++) {
                columna = document.createElement('td');
                columna.id = `f${i}_c${j}`;
                columna.dataset.fila = i;
                columna.dataset.columna = j;
                //columna.dataset.contenido = "oculto";
                fila.appendChild(columna);
            }
        }
        document.getElementById('divTablero').appendChild(tabla);
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
    constructor(filas, columnas, numMinas, contadorBanderas) {
        super(filas, columnas);
        this.numMinas = numMinas;
        this.contadorBanderas = contadorBanderas;

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
                    for (let i = fila - 1; i <= fila + 1; i++) {
                        if (i >= 0 && i < this.filas) {
                            for (let j = columna - 1; j <= columna + 1; j++) {
                                if (j >= 0 && j < this.columnas &&
                                    this.arrayTablero[i][j] == 'MINA') {
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

    dibujarTableroDOM() {
        super.dibujarTableroDOM();

        let celda;

        this.despejar = this.despejar.bind(this);
        this.marcar = this.marcar.bind(this);

        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                celda = document.getElementById(`f${i}_c${j}`);

                celda.addEventListener('click', this.despejar);
                celda.addEventListener('', this.marcar);
            }
        } console.log(this.arrayTablero)
    }

    despejar(elEvento) {
        let evento = elEvento || window.event;
        let celda = evento.currentTarget;

        this.comprobarCero(celda);
    }

    comprobarCero(celda) {
        let fila = celda.dataset.fila;
        let columna = celda.dataset.columna;

        let valorCelda = this.arrayTablero[fila][columna];
        let esNumero = (valorCelda != 'MINA' && valorCelda != 0);
        let esBomba = (valorCelda == 'MINA');
        let bombaSeleccionadaMal;
        let esVacio = (valorCelda == 0);

        let rutaBandera = "https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f3f4.png";
        let url = 'https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f4a3.png';
        let img;

        let arrayFilas;
        let arrayColumnas;

        if (esNumero) {

            celda.innerHTML = valorCelda;
            celda.removeEventListener('click', this.despejar);
            celda.removeEventListener('contextmenu', this.marcar);
            celda.style.color = 'red';
            celda.setAttribute('class', 'destapado');
        } else if (esBomba) {

            arrayFilas = celda.parentNode.parentNode.childNodes;
            for (let tr of arrayFilas) {
                arrayColumnas = tr.childNodes;
                for (let td of arrayColumnas) {

                    td.removeEventListener('click', this.despejar);
                    td.removeEventListener('contextmenu', this.marcar);

                    fila = td.dataset.fila;
                    columna = td.dataset.columna;
                    valorCelda = this.arrayTablero[fila][columna]
                    if (td.lastChild != null) {
                        bombaSeleccionadaMal = (td.lastChild.src == rutaBandera && valorCelda != 'MINA');

                        if (bombaSeleccionadaMal) {
                            td.lastChild.src = "";
                            td.style.backgroundColor = 'red';
                            td.innerHTML = valorCelda;
                        } else if (valorCelda == 'MINA') {
                            img = document.createElement('img'); // Coloca una imagen sustituyendo 'MINA'.
                            img.setAttribute('src', url);;
                            td.appendChild(img);
                            //td.innerHTML = valorCelda;
                        }
                    } else if (valorCelda == 'MINA') {
                        img = document.createElement('img'); // Coloca una imagen sustituyendo 'MINA'.
                        img.setAttribute('src', url);
                        td.appendChild(img);
                        td.setAttribute('class', 'destapado');
                    }
                }
            }
            alert(`¡HAS PERDIDO!`);

        } else if (esVacio) {

            //Obtiene el color del background de la celda
            const elemento = document.getElementById(celda.id);
            const cssObj = window.getComputedStyle(elemento, null);
            let color = cssObj.getPropertyValue("background-color");

            let fila = celda.dataset.fila
            let columna = celda.dataset.columna;

            celda.innerHTML = this.arrayTablero[fila][columna];
            celda.style.backgroundColor = 'rgb(187,187,186)';
            celda.setAttribute('class', 'destapado');
            //celda.dataset.contenido = "despejado";

            for (let i = (parseInt(fila) - 1); i <= (parseInt(fila) + 1); i++) {
                if (i >= 0 && i < this.filas) {
                    for (let j = (parseInt(columna) - 1); j <= (parseInt(columna) + 1); j++) {
                        if (j >= 0 && j < this.columnas) {
                            if (this.arrayTablero[i][j] >= 0 && celda.style.backgroundColor != color) {
                                this.comprobarCero(document.getElementById(`f${i}_c${j}`));
                            }
                            //console.log(typeof(i))
                            //console.log(typeof(j))
                        }
                    }
                }
            }
        }
    }


    marcar(elEvento) {
        let evento = elEvento || window.event;
        let celda = evento.currentTarget;

        // Utilizando el elemento img
        let imagen = document.createElement('img');

        let urlBandera = 'https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f3f4.png';
        let urlInterrogante = 'https://images.emojiterra.com/mozilla/512px/2753.png';

        //Deshabilita el desplegable del botón derecho del ratón en todo el documento.
        document.addEventListener('contextmenu', event => event.preventDefault());


        if (celda.lastChild == null) {
            imagen.src = urlBandera;
            celda.appendChild(imagen);
            celda.dataset.marcaBandera = "true";
            this.contadorBanderas = 0;

            for (let i = 0; i < this.filas; i++) {
                for (let j = 0; j < this.columnas; j++) {
                    if (document.getElementById(`f${i}_c${j}`).dataset.marcaBandera == "true") {
                        this.contadorBanderas = this.contadorBanderas + 1;
                    }
                }
            }
            document.getElementById('puntos').innerHTML = this.contadorBanderas;

        } else if (celda.lastChild.src == urlBandera) {

            celda.lastChild.src = urlInterrogante;
            //celda.dataset.marcaBandera = "false";

            for (let i = 0; i < this.filas; i++) {
                for (let j = 0; j < this.columnas; j++) {
                    if (document.getElementById(celda).dataset.marcaBandera != "true" && this.contadorBanderas >0) {
                        this.contadorBanderas = this.contadorBanderas - 1;
                        
                    }else{
                        this.contadorBanderas = 0;
                    }
                }
            }document.getElementById(`f${i}_c${j}`).removeAttribute('data-marca-bandera')
            document.getElementById('puntos').innerHTML = this.contadorBanderas;

        } else if (celda.lastChild.src == urlInterrogante) {
            celda.innerHTML = "";
           
            document.getElementById('puntos').innerHTML = this.contadorBanderas;
        }

       

        // Utilizando los formatos UNICODE de JS
        /*
        if (this.innerHTML == "") {
            this.innerHTML = "\uD83D\uDEA9";
        } else if (this.innerHTML == "\uD83D\uDEA9") {
            this.innerHTML = "\u2754";
        } else if(this.innerHTML == "\u2754") {
            this.innerHTML = "";
        };
        */

        // Utilizando clases en el .css
        /*
         switch (this.className) {
            case "":
                this.className = "bandera";
                break;
            case "bandera":
                this.className = "interrogante";
                break;
            default:
                this.className = "";
                break;
         }
        */
    }
}

window.onload = function () {
    const buscaminas1 = new Buscaminas(5, 5, 5);
    buscaminas1.dibujarTableroDOM();
}
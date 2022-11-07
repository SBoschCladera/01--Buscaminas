// Declaración de variables
var maxFilas, maxColumnas, minas;
let arrayTablero = [];
let contador = 0;

//Solicita al usuario los datos necesarios para crear el tablero con el número de minas.
maxFilas = prompt('Número de filas: ');
while (!Number(maxFilas) || maxFilas < 1) {
    alert("El valor introducido debe ser un número mayor que 0.")
    maxFilas = prompt('Número de filas: ');
}
maxColumnas = prompt('Número de columnas: ');
while (!Number(maxColumnas) || maxColumnas < 1) {
    alert("El valor introducido debe ser un número mayor que 0.")
    maxColumnas = prompt('Número de columnas: ');
}
minas = prompt('Número de minas: ');
while (!Number(minas) || minas < 1 || minas >= (maxFilas * maxColumnas)) {
    alert("El valor introducido debe ser un número mayor que 0 y menor que " + (maxFilas * maxColumnas) + " .")
    minas = prompt('Número de minas: ');
}


// Constructor del objeto
function Tablero(arrayTablero, maxFilas, maxColumnas, minas) {

    this.arrayTablero = arrayTablero;
    this.maxFilas = maxFilas;
    this.maxColumnas = maxColumnas;
    this.minas = minas;

    // Función para crear el tablero, crea un array y lo rellena con espacios en blanco, devuelve el tablero con las
    // casillas seleccionadas por el usuario
    this.crearTablero = function (arrayTablero, maxFilas, maxColumnas) {

        for (let fila = 0; fila < maxFilas; fila++) {
            arrayTablero[fila] = [];
            for (let columna = 0; columna < maxColumnas; columna++) {
                arrayTablero[fila][columna] = "-";
            }
        }
        return arrayTablero;
    }


    // Coloca de forma aleatoria el número de minas seleccionadas por el usuario, devuelve el tablero con las minas
    // en posición
    this.colocarMinas = function (arrayTablero, contador, minas) {
        arrayTablero = this.crearTablero(arrayTablero, maxFilas, maxColumnas);

        while (contador < minas) {
            posFila = parseInt(Math.random() * maxFilas);
            posColumna = parseInt(Math.random() * maxColumnas);

            if (arrayTablero[posFila][posColumna] != "X") {
                arrayTablero[posFila][posColumna] = "X";
                contador++;
            }
        }
        return arrayTablero;
    }


    // Cuenta las minas que hay alrededor de cada casilla
    this.contarMinasAlrededor = function (arrayTablero) {

        let numMinasAlrededor;
        arrayTablero = this.colocarMinas(arrayTablero, contador, minas);

        for (let fila = 0; fila < maxFilas; fila++) {
            for (let columna = 0; columna < maxColumnas; columna++) {
                numMinasAlrededor = 0;
                if (arrayTablero[fila][columna] != 'X') {
                    for (let cFila = fila - 1; cFila <= fila + 1; cFila++) {
                        if (cFila >= 0 && cFila < maxFilas) {
                            for (let cColumna = columna - 1; cColumna <= columna + 1; cColumna++) {
                                if (cColumna >= 0 && cColumna < maxColumnas &&
                                    arrayTablero[cFila][cColumna] == 'X') {
                                    numMinasAlrededor++;
                                }
                            }
                        }
                        arrayTablero[fila][columna] = "" + numMinasAlrededor + "";
                    }
                }
            }
        }
        return arrayTablero;
    }

    // Pinta en pantalla el tablero al completo
    this.pintarTableroEnPantalla = function (arrayTablero) {

        arrayTablero = this.contarMinasAlrededor(arrayTablero);


        let titulo = document.createElement('h1');
        let textoTitulo = document.createTextNode('BUSCAMINAS');
        titulo.appendChild(textoTitulo);
        titulo.setAttribute('class', 'font-effect-fire')
        document.body.appendChild(titulo);

        let tabla = document.createElement('table'); // Crea una tabla
        let cuerpoTabla = document.createElement('tbody'); // Crea el tbody


        for (let i = 0; i < maxFilas; i++) {
            let tr = document.createElement('tr');   // Crea una fila
            for (let j = 0; j < maxColumnas; j++) {
                let td = document.createElement('td'); // Crea una celda
                let contenidoTd = document.createTextNode(arrayTablero[i][j]); // Añade el texto deseado a la celda
                td.appendChild(contenidoTd); // Añade el texto a la celda.
                if (arrayTablero[i][j] == 'X') {
                    td.style.color = "blue"; // Cambiamos el estilo según necesitemos.
                } else if (arrayTablero[i][j] == '0') {
                    td.style.color = "green";  // Cambiamos el estilo según necesitemos.
                } else if (arrayTablero[i][j] == '1') {
                    td.style.color = "orange"; // Cambiamos el estilo según necesitemos.
                } else {
                    td.style.color = "red"; // Cambiamos el estilo según necesitemos.
                }
                tr.appendChild(td); // Añade la celda a la fila.
            }
            cuerpoTabla.appendChild(tr); // Añade la fila al tbody.
        }
        tabla.appendChild(cuerpoTabla); // Añade el tbody a la tabla.
        document.body.appendChild(tabla); // Añade la tabla al cuerpo del documento.
    }
}

var tablero1 = new Tablero(arrayTablero, maxFilas, maxColumnas, minas);

tablero1.pintarTableroEnPantalla(arrayTablero);


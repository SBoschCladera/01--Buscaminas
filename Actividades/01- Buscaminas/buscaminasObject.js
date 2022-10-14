// Declaración de variables
var maxFilas, maxColumnas, minas;
let arrayTablero = [];
let contador = 0;

//Solicita al usuario los datos necesarios para crear el tablero con el número de minas.
/*
maxFilas = prompt('Número de filas: ');
maxColumnas = prompt('Número de columnas: ');
minas = prompt('Número de minas a colocar: ');;



maxFilas = 5;
maxColumnas = 5;
minas = 10;
*/

// Constructor del objeto
function Tablero(arrayTablero, maxFilas, maxColumnas, minas, contador) {

    this.arrayTablero = arrayTablero;
    this.maxFilas = maxFilas;
    this.maxColumnas = maxColumnas;
    this.minas = minas;
    this.contador = contador;


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
        return this.arrayTablero;
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

        document.write('<h1 class="font-effect-fire">BUSCAMINAS</h1>');
        document.write('<table>');

        for (let i = 0; i < maxFilas; i++) {
            document.write('<tr>');
            for (let j = 0; j < maxColumnas; j++) {
                if (arrayTablero[i][j] == 'X') {
                    document.write('<td style="color: blue">' + arrayTablero[i][j] + '</td>');
                } else if (arrayTablero[i][j] == '0') {
                    document.write('<td style="color: green"">' + arrayTablero[i][j] + '</td>');
                } else if (arrayTablero[i][j] == '1') {
                    document.write('<td style="color: orange"">' + arrayTablero[i][j] + '</td>');
                } else {
                    document.write('<td style="color: red"">' + arrayTablero[i][j] + '</td>');
                }
            }
            document.write('</tr>');
        }
        document.write('</table>');
    }
}

var tablero1 = new Tablero(arrayTablero, 5, 5, 10, contador);

//console.log(tablero1.crearTablero(arrayTablero, 5, 5));
//console.log(tablero1.colocarMinas(arrayTablero, contador, 5));
console.log(tablero1.contarMinasAlrededor(arrayTablero));


//pintarTableroEnPantalla(tablero1.contarMinasAlrededor(arrayTablero))
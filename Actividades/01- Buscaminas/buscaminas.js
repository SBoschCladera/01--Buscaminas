// Declaración de variables
var maxFilas, maxColumnas, minas;
let arrayTablero = [];
let contador = 0;


iniciarApp();


// Inicia la aplicación
function iniciarApp() {

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


    crearTablero(arrayTablero, maxFilas, maxColumnas);
    colocarMinas(arrayTablero, contador, minas);
    contarMinasAlrededor(arrayTablero);
    pintarTableroEnPantalla(arrayTablero);
}

// Función para crear el tablero, crea un array y lo rellena con espacios en blanco, devuelve el tablero con las
// casillas seleccionadas por el usuario
function crearTablero(arrayTablero, maxFilas, maxColumnas) {
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
function colocarMinas(arrayTablero, contador, minas) {

    arrayTablero = crearTablero(arrayTablero, maxFilas, maxColumnas);

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
function contarMinasAlrededor(arrayTablero) {

    let numMinasAlrededor;
    arrayTablero = colocarMinas(arrayTablero, contador, minas);

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
                    arrayTablero[fila][columna] = numMinasAlrededor;
                }

            }
        }
    }
    return arrayTablero;
}

// Pinta en pantalla el tablero al completo
function pintarTableroEnPantalla(arrayTablero) {

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

/*********************************************** */




/* *************************************************** */

/* Cuenta cuantas minas hay alrededor de una casilla seleccionada. VERSION EXTENDIDA
filaSeleccionada = filaSeleccionada - 1;
columnaSeleccionada = columnaSeleccionada - 1;
// Condicional para primera fila y columna
if (filaSeleccionada == 0 && columnaSeleccionada == 0) {
    if (arrayTablero[filaSeleccionada][columnaSeleccionada + 1] == 'mina') {
        contadorMinasAlrededor++; // Columna derecha
    }
    if (arrayTablero[filaSeleccionada + 1][columnaSeleccionada] == 'mina') {
        contadorMinasAlrededor++; // Fila inferior
    }
    if (arrayTablero[filaSeleccionada + 1][columnaSeleccionada + 1] == 'mina') {
        contadorMinasAlrededor++; // Fila inferior-derecha
    }
}
// Condicional para primera fila y columna diferente a primera y última de la tabla
if (filaSeleccionada == 0 && columnaSeleccionada != 0 && columnaSeleccionada != maxColumnas - 1) {
    if (arrayTablero[filaSeleccionada][columnaSeleccionada - 1] == 'mina') {
        contadorMinasAlrededor++; // Columna izquierda
    }
    if (arrayTablero[filaSeleccionada][columnaSeleccionada + 1] == 'mina') {
        contadorMinasAlrededor++; // Columna derecha
    }
    if (arrayTablero[filaSeleccionada + 1][columnaSeleccionada] == 'mina') {
        contadorMinasAlrededor++; // Fila inferior
    }
    if (arrayTablero[filaSeleccionada + 1][columnaSeleccionada - 1] == 'mina') {
        contadorMinasAlrededor++; // Fila inferior-izquierda
    }
    if (arrayTablero[filaSeleccionada + 1][columnaSeleccionada + 1] == 'mina') {
        contadorMinasAlrededor++; // Fila inferior-derecha
    }
}
// Condicional para primera fila y última columna
if (filaSeleccionada == 0 && columnaSeleccionada == maxFilas - 1) {
    if (arrayTablero[filaSeleccionada][columnaSeleccionada - 1] == 'mina') {
        contadorMinasAlrededor++; // Columna izquierda
    }
    if (arrayTablero[filaSeleccionada + 1][columnaSeleccionada] == 'mina') {
        contadorMinasAlrededor++; // Fila inferior
    }
    if (arrayTablero[filaSeleccionada + 1][columnaSeleccionada - 1] == 'mina') {
        contadorMinasAlrededor++; // Fila inferior-izquierda
    }
}
// Condicional para primera columna y fila diferente a primera y última de la tabla
if (filaSeleccionada != 0 && filaSeleccionada != maxFilas - 1 && columnaSeleccionada == 0) {
    if (arrayTablero[filaSeleccionada - 1][columnaSeleccionada] == 'mina') {
        contadorMinasAlrededor++; // Fila superior
    }
    if (arrayTablero[filaSeleccionada - 1][columnaSeleccionada + 1] == 'mina') {
        contadorMinasAlrededor++; // Fila superior-derecha
    }
    if (arrayTablero[filaSeleccionada][columnaSeleccionada + 1] == 'mina') {
        contadorMinasAlrededor++; // Columna derecha
    }
    if (arrayTablero[filaSeleccionada + 1][columnaSeleccionada] == 'mina') {
        contadorMinasAlrededor++; // Fila inferior
    }
    if (arrayTablero[filaSeleccionada + 1][columnaSeleccionada + 1] == 'mina') {
        contadorMinasAlrededor++; // Fila inferior-derecha
    }
}
// Condicional para fila y columna diferente a primera y última de la tabla
if (filaSeleccionada != 0 && filaSeleccionada != maxFilas - 1 && columnaSeleccionada != 0 && columnaSeleccionada != maxColumnas - 1) {
    if (arrayTablero[filaSeleccionada - 1][columnaSeleccionada] == 'mina') {
        contadorMinasAlrededor++; // Fila superior
    }
    if (arrayTablero[filaSeleccionada + 1][columnaSeleccionada] == 'mina') {
        contadorMinasAlrededor++; // Fila inferior
    }
    if (arrayTablero[filaSeleccionada][columnaSeleccionada - 1] == 'mina') {
        contadorMinasAlrededor++; // Columna izquierda
    }
    if (arrayTablero[filaSeleccionada][columnaSeleccionada + 1] == 'mina') {
        contadorMinasAlrededor++;  // Columna Derecha
    }
    if (arrayTablero[filaSeleccionada - 1][columnaSeleccionada - 1] == 'mina') {
        contadorMinasAlrededor++; // Fila superior-izquierda
    }
    if (arrayTablero[filaSeleccionada - 1][columnaSeleccionada + 1] == 'mina') {
        contadorMinasAlrededor++; // Fila superior-derecha
    }
    if (arrayTablero[filaSeleccionada + 1][columnaSeleccionada - 1] == 'mina') {
        contadorMinasAlrededor++; // Fila inferior-izquierda
    }
    if (arrayTablero[filaSeleccionada + 1][columnaSeleccionada + 1] == 'mina') {
        contadorMinasAlrededor++; // Fila inferior-derecha
    }
}
// Condicional para última columna y fila diferente a primera y última de la tabla
if (filaSeleccionada != 0 && filaSeleccionada != maxFilas - 1 && columnaSeleccionada == maxColumnas - 1) {
    if (arrayTablero[filaSeleccionada - 1][columnaSeleccionada] == 'mina') {
        contadorMinasAlrededor++; // Fila superior
    }
    if (arrayTablero[filaSeleccionada - 1][columnaSeleccionada - 1] == 'mina') {
        contadorMinasAlrededor++; // Columna superior-izquierda
    }
    if (arrayTablero[filaSeleccionada][columnaSeleccionada - 1] == 'mina') {
        contadorMinasAlrededor++; // Columna izquierda
    }
    if (arrayTablero[filaSeleccionada + 1][columnaSeleccionada] == 'mina') {
        contadorMinasAlrededor++; // Fila inferior
    }
    if (arrayTablero[filaSeleccionada + 1][columnaSeleccionada - 1] == 'mina') {
        contadorMinasAlrededor++; // Fila inferior-izquierda
    }
}
// Condicional para última fila y primera columna
if (filaSeleccionada == maxFilas - 1 && columnaSeleccionada == 0) {
    if (arrayTablero[filaSeleccionada - 1][columnaSeleccionada] == 'mina') {
        contadorMinasAlrededor++; // Fila superior
    }
    if (arrayTablero[filaSeleccionada][columnaSeleccionada + 1] == 'mina') {
        contadorMinasAlrededor++; // Columna derecha
    }
    if (arrayTablero[filaSeleccionada - 1][columnaSeleccionada + 1] == 'mina') {
        contadorMinasAlrededor++; // Fila superior-derecha
    }
}
// Condicional para última fila y columna diferente a primera y última de la tabla
if (filaSeleccionada == maxFilas - 1 && columnaSeleccionada != 0 && columnaSeleccionada != maxColumnas - 1) {
    if (arrayTablero[filaSeleccionada][columnaSeleccionada - 1] == 'mina') {
        contadorMinasAlrededor++; // Columna izquierda
    }
    if (arrayTablero[filaSeleccionada - 1][columnaSeleccionada] == 'mina') {
        contadorMinasAlrededor++; // Fila superior
    }
    if (arrayTablero[filaSeleccionada - 1][columnaSeleccionada - 1] == 'mina') {
        contadorMinasAlrededor++; // Fila superior-izquierda
    }
    if (arrayTablero[filaSeleccionada - 1][columnaSeleccionada + 1] == 'mina') {
        contadorMinasAlrededor++; // Fila superior-derecha
    }
}
// Condicional para última fila y columna
if (filaSeleccionada == maxFilas - 1 && columnaSeleccionada == maxFilas - 1) {
    if (arrayTablero[filaSeleccionada - 1][columnaSeleccionada] == 'mina') {
        contadorMinasAlrededor++; // Fila superior
    }
    if (arrayTablero[filaSeleccionada][columnaSeleccionada - 1] == 'mina') {
        contadorMinasAlrededor++; // Columna derecha
    }
    if (arrayTablero[filaSeleccionada - 1][columnaSeleccionada - 1] == 'mina') {
        contadorMinasAlrededor++; // Fila superior-izquierda
    }
}
*/
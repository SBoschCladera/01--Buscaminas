// Declaración de variables
var maxFilas, maxColumnas, minas;
let arrayTablero = [];
let contador = 0;

//Solicita al usuario los datos necesarios para crear el tablero con el número de minas.

maxFilas = prompt('Número de filas: ');
maxColumnas = prompt('Número de columnas: ');
minas = prompt('Número de minas a colocar: ');;

/*
maxFilas = 5;
maxColumnas = 5;
minas = 10;
*/

// Crea un array y lo rellena con espacios en blanco
for (let fila = 0; fila < maxFilas; fila++) {
    arrayTablero[fila] = [];

    for (let columna = 0; columna < maxColumnas; columna++) {
        arrayTablero[fila][columna] = "-";
    }
}

// Coloca de forma aleatoria el número de minas seleccionado
while (contador < minas) {
    posFila = parseInt(Math.random() * maxFilas);
    posColumna = parseInt(Math.random() * maxColumnas);

    if (arrayTablero[posFila][posColumna] != "X") {
        arrayTablero[posFila][posColumna] = "X";
        contador++;
    }
}

// Cuenta las minas que hay alrededor de cada casilla
let numMinasAlrededor;

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

//console.log(arrayTablero);

/*********************************************** */

document.write('<table>');

for (let i = 0; i < maxFilas; i++) {
    document.write('<tr>');
    for (let j = 0; j < maxColumnas; j++) {
        document.write('<td>');
        document.write(arrayTablero[i][j]);
        document.write('</td>');
    }
    document.write('</tr>');
}
document.write('</table>');


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
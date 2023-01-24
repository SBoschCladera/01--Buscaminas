let filas, columnas, numParejas;
let arrayParejas = new Array();
let tablero = [];
let contador = 0;
/*
function numFilas(numParejas) {
    for (let i = 2; i < numParejas; i++) {
        if (numParejas % i == 0) {
            i == numParejas
        }
    } return numParejas
}

console.log(numFilas(22))
//let numFilas = parseInt(numParejas % i == 0); //5

console.log(numFilas)
*/

pedirDatosUsuario();
numParejas = parseInt((filas * columnas) / 2);
//comprobarNumeroParejas(filas, columnas);
//comprobarMinimoParejas(numParejas);

//function comprobarNumeroParejas(filas, columnas) {
while ((filas * columnas) % 2 != 0) {
    alert('El número de parejas debe ser PAR, introduce los datos de nuevo.')
    pedirDatosUsuario();
    numParejas = parseInt((filas * columnas) / 2);
}

//}
//function comprobarMinimoParejas(numParejas) {
while (numParejas < 2) {
    alert('El número mínimo de parejas debe ser 2.')
    pedirDatosUsuario();

} numParejas = parseInt((filas * columnas) / 2);
//}

function pedirDatosUsuario() {
    let mensajeAlert = 'Debes introducir un valor númerico positivo.'
    let mensajeFila = 'Número de filas: ';
    let mensajeColumna = 'Número de columnas: ';

    filas = prompt(mensajeFila);

    while (!Number(filas) || filas < 1) {
        alert(mensajeAlert);
        filas = prompt(mensajeFila);
    }
    columnas = prompt(mensajeColumna);

    while (!Number(columnas) || columnas < 1) {
        alert(mensajeAlert);
        columnas = prompt(mensajeColumna);
    }
}


function arrayDeParejas() {
    let carpertaAleatoria = parseInt(Math.random() * 2);

    for (let i = 0; i < numParejas; i++) {
        carpeta = "halloween"
        if (carpertaAleatoria == 0) {
            carpeta = "animales";
        } else {
            carpeta = "halloween";
        }

        if (i > 10) {
            let parejaAleatoria = parseInt(Math.random() * 10);
            arrayParejas.push('<img src="imagenes/' + carpeta + '/' + parejaAleatoria + '.png" alt="imagen"></img>');
            arrayParejas.push('<img src="imagenes/' + carpeta + '/' + parejaAleatoria + '.png" alt="imagen"></img>');
        } else {
            arrayParejas.push('<img src="imagenes/' + carpeta + '/' + i + '.png" alt="imagen"></img>');
            arrayParejas.push('<img src="imagenes/' + carpeta + '/' + i + '.png" alt="imagen"></img>');
        }
    }
    return arrayParejas.sort(function () { return 0.5 - Math.random() }); // Devuelve el array desordenado
}


//console.log(arrayDeParejas());
//let parejas = arrayDeParejas().length
//console.log(arrayDeParejas().length)
//console.log(parejas)


function crearTablero(filas, columnas, tablero) {
    for (let i = 0; i < filas; i++) {
        tablero[i] = [];
        for (let j = 0; j < columnas; j++) {
            tablero[i][j] = "o";
        }
    }
    return tablero;
}
//console.log(crearTablero(6, 6, tablero))

function colocarParejas(tablero, contador) {

    tablero = crearTablero(filas, columnas, tablero);
    parejas = arrayDeParejas();

    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            tablero[i][j] = parejas[contador];
            contador++
        }
    }
    return tablero;
}

function pintarTableroEnPantalla(tablero) {

    tablero = colocarParejas(tablero, contador);
    document.write('<h1>MEMORY</h1>');
    document.write('<table>');

    for (let i = 0; i < filas; i++) {
        document.write('<tr>');
        for (let j = 0; j < columnas; j++) {
            document.write('<td>' + tablero[i][j] + '</td>');
        }
        document.write('</tr>');
    }
    document.write('</table>');

}

//console.log(colocarParejas(crearTablero(6, 6, tablero), contador, arrayDeParejas()))
//document.write(colocarParejas(tablero, contador))
pintarTableroEnPantalla(tablero);
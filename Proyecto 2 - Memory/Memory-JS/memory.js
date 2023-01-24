// Declaración de variables
let filas, columnas, numParejas;
let arrayParejas = [];
let tablero = [];
let contador = 0;
let maxfilas = 6;
let maxColumnas = 12;


iniciarApp();

// Inicia la aplicación solicitando el número de filas y columnas al usuario, realiza comprobaciones para saber si el número de casillas del tablero es correcto (debe ser un número par),
// debe contener un mínimo de 2 parejas y finalmente pinta el tablero en pantalla.
function iniciarApp() {
    pedirDatosUsuario();
    numParejas = parseInt((filas * columnas) / 2);

    while ((filas * columnas) % 2 != 0 || numParejas < 2) {

        if ((filas * columnas) % 2 != 0) {
            alert('El número de parejas debe ser PAR, introduce los datos de nuevo.')
        } else if (numParejas < 2) {
            alert('El número mínimo de parejas debe ser 2.')
        }

        pedirDatosUsuario();
        numParejas = parseInt((filas * columnas) / 2);
    }
    pintarTableroEnPantalla(tablero);
}

// Solicita un número de filas y columnas mediante prompt al usuario para crear el tablero. 
function pedirDatosUsuario() {

    // Variables
    let mensajeFila = 'Número de filas: ';
    let mensajeColumna = 'Número de columnas: ';
    let mensajeAlert1 = 'Debes introducir un valor númerico positivo.'
    let mensajeAlert2 = 'El número máximo de filas es ' + maxfilas + '.'
    let mensajeAlert3 = 'El número máximo de columnas es ' + maxColumnas + '.'


    filas = prompt(mensajeFila);

    // Personaliza el mensaje de salida para las filas según el error detectado.
    while (!Number(filas) || filas < 1 || filas > maxfilas) {

        if (filas < 1) {
            alert(mensajeAlert1);
        } else
        if (filas > maxfilas) {
            alert(mensajeAlert2);
        }
        filas = prompt(mensajeFila);
    }

    columnas = prompt(mensajeColumna);

    // ... y para las columnas.
    while (!Number(columnas) || columnas < 1 || columnas > maxColumnas) {

        if (columnas < 1) {
            alert(mensajeAlert1);
        } else
        if (columnas > maxColumnas) {
            alert(mensajeAlert3);
        }
        columnas = prompt(mensajeColumna);
    }
}

// Rellena un array con las imágenes por duplicado (par crear parejas) contenidas en el directorio imagen, éstas pueden provenir de dos directorios diferentes 
// de forma aleatoria para dos temáticas diferentes. Devuelve un array con el número de parejas solicitadas por el usuario colocadas en posiciones aleatorias.
function arrayDeParejas() {
    let carpetaAleatoria = parseInt(Math.random() * 2);

    for (let i = 0; i < numParejas; i++) {
        carpeta = "halloween"
        if (carpetaAleatoria == 0) {
            carpeta = "animales";
        } else {
            carpeta = "halloween";
        }

        // Cuando el número de parejas es mayor de 10, rellena con valores aleatorios hasta llegar al número de parejas necesarias.
        if (i > 10) {
            let parejaAleatoria = parseInt(Math.random() * 10);
            arrayParejas.push('<img src="imagenes/' + carpeta + '/' + parejaAleatoria + '.png" alt="imagen"></img>');
            arrayParejas.push('<img src="imagenes/' + carpeta + '/' + parejaAleatoria + '.png" alt="imagen"></img>');
        } else {
            arrayParejas.push('<img src="imagenes/' + carpeta + '/' + i + '.png" alt="imagen"></img>');
            arrayParejas.push('<img src="imagenes/' + carpeta + '/' + i + '.png" alt="imagen"></img>');
        }
    }
    return desordenarParejas(arrayParejas);
}

// Devuelve un array ("tablero") desordenado aleatoriamente (fuente W3Schools.com).
function desordenarParejas(tablero) {

    return tablero.sort(function () {
        return 0.5 - Math.random()
    });
}

// Crea el tablero con el número de filas y columnas solicitadas por el usuario.
function crearTablero(filas, columnas, tablero) {
    for (let i = 0; i < filas; i++) {
        tablero[i] = [];
        for (let j = 0; j < columnas; j++) {
            tablero[i][j] = "o";
        }
    }
    return tablero;
}

// Introduce el valor de cada posición del array con las url de las imágenes en el tablero.
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

// Pinta el tablero definitivo en pantalla
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
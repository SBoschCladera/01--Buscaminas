/*
1. Sense utilitzar els mètodes i propietats del DOM que hem començat a estudiar, fes una
pàgina que mostri (cada vegada que se carrega) en una taula 20 colors aleatoris. La taula
tindrà 20 files (més la capçalera) i 4 columnes. A les tres primeres columnes veurem els
números decimals corresponents al component vermell, verd i blau del color que
mostrarem a la quarta columna, tal i com pots veure a la figura:
*/

// Declaración de variables.
let arrayTabla = [];
let filas = 20;
let columnas = 4;

iniciarApp()

function iniciarApp() {
    pintarTableroEnPantalla()
}

// Crea una tabla.
function crearTabla(filas, columnas) {
    for (let i = 0; i < filas; i++) {
        arrayTabla[i] = [];
        for (let columnas = 0; j < columnas; j++) {
            arrayTabla[i][j] = "&nsbp";
        }
    }
    return arrayTabla;
}

// Rellena un array con 3 números aleatorios.
function arrayColores() {
    let colores = [];
    for (let i = 0; i < 3; i++) {
        let numAleatorio = parseInt(Math.random() * 255);
        colores.push(numAleatorio)
    }
    return colores;
}

// Pinta una tabla en pantalla con los datos solicitados.
function pintarTableroEnPantalla() {

    let arrayEncabezado = ['ROJO', 'VERDE', 'AZUL', 'COLOR'];

    document.write('<h1>TABLA DE COLORES</h1>')
    document.write('<table>');                     // Crea una tabla.
    document.write('<tbody>');                     // Crea un tbody.

    for (let i = 0; i < 1; i++) {
        document.write('<tr>');                    // Crea un encabezado.
        for (let j = 0; j < arrayEncabezado.length; j++) {
            document.write('<th id="idEncabezado' + (j + 1) + '">' + arrayEncabezado[j] + '</th>');
        }
        document.write('<tr>');
    }

    for (let i = 0; i < filas; i++) {              // Crea las filas.
        let colores = arrayColores();

        document.write('<tr>');
        for (let j = 0; j < columnas - 1; j++) {   // Crea las columnas.
            document.write(`<td>${colores[j]}</td>`);
        }
        document.write(`<td style="background-color: rgb(${colores[0]}, ${colores[1]},${colores[2]})"></td>`);
        document.write('</tr>');
    }
    document.write('</tbody>');
    document.write('</table>');

}



// Declaración de variables
let maxfilas = 6;
let maxColumnas = 12;


// Crea la clase Tablero
class Tablero {
    constructor(filas, columnas) {
        this.filas = filas;
        this.columnas = columnas;

        this.crearTablero();
    }

    // Crea el tablero con el número de filas y columnas solicitadas por el usuario.
    crearTablero() {
        this.tablero = [];

        for (let i = 0; i < this.filas; i++) {
            this.tablero[i] = [];
            for (let j = +0; j < this.columnas; j++) {
                this.tablero[i][j] = "o";
            }
        }
        return this.tablero;
    }
}

// Clase Memory hereda de la clase Tablero
class Memory extends Tablero {
    constructor(filas, columnas, tematicaPareja) {
        super(filas, columnas);
        this.tematicaPareja = tematicaPareja;

        this.pedirDatosUsuario();
        this.pedirTematicaParejas();
        this.arrayDeParejas();
        this.desordenarArray();
        this.colocarParejas();
        this.pintarTableroEnPantalla();
    }

    // Solicita al usuario el número de filas y columnas para el tablero, cumpliendo unas ciertas condiciones
    pedirDatosUsuario() {

        // Variables
        let mensajeFila = 'Número de filas: ';
        let mensajeColumna = 'Número de columnas: ';
        let mensajeAlert1 = 'Debes introducir un valor númerico positivo.'
        let mensajeAlert2 = 'El número máximo de filas es ' + maxfilas + '.'
        let mensajeAlert3 = 'El número máximo de columnas es ' + maxColumnas + '.'

        this.filas = prompt(mensajeFila);

        // Personaliza el mensaje de salida para las filas según el error detectado.
        while (!Number(this.filas) || this.filas < 1 || this.filas > maxfilas) {

            if (this.filas < 1 || !Number(this.filas)) {
                alert(mensajeAlert1);
            } else
            if (this.filas > maxfilas) {
                alert(mensajeAlert2);
            }
            this.filas = prompt(mensajeFila);
        }

        this.columnas = prompt(mensajeColumna);

        // ... y para las columnas.
        while (!Number(this.columnas) || this.columnas < 1 || this.columnas > maxColumnas) {

            if (this.columnas < 1 || !Number(this.columnas)) {
                alert(mensajeAlert1);
            } else
            if (this.columnas > maxColumnas) {
                alert(mensajeAlert3);
            }
            this.columnas = prompt(mensajeColumna);
        }
    }

    // Solicita al usuario la temática que desea entre las dos opciones disponibles
    pedirTematicaParejas() {

        let mensaje = 'Elige una temática para el juego: \n1) Animales \n2) Halloween'
        let mensajeAlert = 'Valor incorrecto, prueba otra vez.'
        let expresionRegular1 = /animales/i;
        let expresionRegular2 = /halloween/i;
        let expresionRegular3 = /[1-2]/;

        this.tematicaPareja = prompt(mensaje);

        while (!(expresionRegular1.test(this.tematicaPareja) || expresionRegular2.test(this.tematicaPareja) || expresionRegular3.test(this.tematicaPareja))) {
            alert(mensajeAlert)
            this.tematicaPareja = prompt(mensaje);
        }
    }

    // Rellena un array con las imágenes por duplicado (par crear parejas) contenidas en el directorio imagen, éstas pueden provenir de 
    // dos directorios diferentes de forma aleatoria para dos temáticas diferentes. Devuelve un array con el número de parejas solicitadas 
    // por el usuario colocadas en posiciones aleatorias.
    arrayDeParejas() {

        let numParejas = (this.filas * this.columnas) / 2;
        this.arrayParejas = [];

        for (let i = 0; i < numParejas; i++) {

            if (this.tematicaPareja == 1) {
                this.tematicaPareja = "animales";
            }
            if (this.tematicaPareja == 2) {
                this.tematicaPareja = "halloween";
            }

            // Cuando el número de parejas es mayor de 10, rellena con valores aleatorios hasta llegar al número de parejas necesarias.
            if (i > 10) {
                let parejaAleatoria = parseInt(Math.random() * 10);
                this.arrayParejas.push('<img src="imagenes/' + this.tematicaPareja + '/' + parejaAleatoria + '.png" alt="imagen' + i + '"></img>');
                this.arrayParejas.push('<img src="imagenes/' + this.tematicaPareja + '/' + parejaAleatoria + '.png" alt="imagen' + i + '"></img>');
            } else {
                this.arrayParejas.push('<img src="imagenes/' + this.tematicaPareja + '/' + i + '.png" alt="imagen' + i + '"></img>');
                this.arrayParejas.push('<img src="imagenes/' + this.tematicaPareja + '/' + i + '.png" alt="imagen' + i + '"></img>');
            }
        }
        return this.arrayParejas;
    }

    // Devuelve un array ("tablero") desordenado aleatoriamente (fuente W3Schools.com).
    desordenarArray() {
        return this.arrayDeParejas().sort(function () {
            return 0.5 - Math.random()
        });
    }

    // Introduce el valor de cada posición del array con las url de las imágenes en el tablero.
    colocarParejas() {
        let contador = 0;

        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.tablero[i][j] = this.arrayParejas[contador];
                contador++
            }
        }
        return this.tablero;
    }

    // Pinta el tablero definitivo en pantalla
    pintarTableroEnPantalla() {

        document.write('<h1>MEMORY</h1>');
        document.write('<table>');

        for (let i = 0; i < this.filas; i++) {
            document.write('<tr>');
            for (let j = 0; j < this.columnas; j++) {
                document.write('<td>' + this.colocarParejas()[i][j] + '</td>');
            }
            document.write('</tr>');
        }
        document.write('</table>');
    }


}

const tablero1 = new Memory(maxfilas, maxColumnas, 1)
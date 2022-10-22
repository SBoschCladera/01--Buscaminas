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

        this.arrayDeParejas();
        this.desordenarParejas();
        this.colocarParejas();
    }

    // Rellena un array con las imágenes por duplicado (par crear parejas) contenidas en el directorio imagen, éstas pueden provenir de 
    // dos directorios diferentes de forma aleatoria para dos temáticas diferentes. Devuelve un array con el número de parejas solicitadas 
    // por el usuario colocadas en posiciones aleatorias.
    arrayDeParejas() {

        let numParejas = (this.filas * this.columnas) / 2;
        this.arrayParejas = [];

        for (let i = 0; i < numParejas; i++) {

            if (this.tematicaPareja == 0) {
                this.tematicaPareja = "animales";
            }
            if (this.tematicaPareja == 1) {
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
    desordenarParejas() {
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

}


const tablero1 = new Memory(6, 6, 0)
console.log(tablero1.colocarParejas());

const tablero2 = new Memory(4, 5, 1)
console.log(tablero2.colocarParejas());
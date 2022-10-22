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

const tablero1 = new Tablero(6, 6)
console.log(tablero1.crearTablero());
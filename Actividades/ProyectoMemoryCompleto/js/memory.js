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
    this.tablero;
  }
}

// Crea la clase Juego
class Juego {
  constructor() {
    this.maxFilas = 6; //document.getElementById('inputFilas').getAttribute('max');
    this.maxColumnas = 12; //document.getElementById('inputColumnas').getAttribute('max');

    this.pedirDatosUsuario();
  }

  // Solicita al usuario el número de filas, columnas y la temática de las parejas para el tablero, cumpliendo unas
  // ciertas condiciones.
  pedirDatosUsuario() {
    // Solicita número de filas y columas mediante prompt.
    this.inputDatoUsuario();

    // Comprueba si el número de casillas del tablero es correcto (debe ser un número par) y debe contener un
    // mínimo de 2 parejas.
    let numParejas = parseInt((this.filas * this.columnas) / 2);

    while ((this.filas * this.columnas) % 2 != 0 || numParejas < 2) {
      if ((this.filas * this.columnas) % 2 != 0) {
        alert(
          "El número de parejas debe ser PAR, introduce los datos de nuevo."
        );
      } else if (numParejas < 2) {
        alert("El número mínimo de parejas debe ser 2.");
      }
      this.inputDatoUsuario();

      numParejas = parseInt((this.filas * this.columnas) / 2);
    }

    // Aquí solicita la temática de las parejas
    this.inputTematicaParejas();

    // Inicia el Memory.
    this.iniciarMemory();
  }

  // Solicita número de filas y columas al usuario, éstas deben cumplir una serie de condiciones.
  inputDatoUsuario() {
    this.filas = prompt("Número de filas del tablero: "); //document.getElementById('inputFilas').value

    // Personaliza el mensaje de salida para las filas según el error detectado.
    while (
      !Number(this.filas) ||
      this.filas < 1 ||
      this.filas > this.maxFilas
    ) {
      this.condicionesDatoInput(this.filas, this.maxFilas, "filas");
      this.filas = prompt("Número de filas del tablero: ");
    }

    this.columnas = prompt("Número de columnas del tablero: "); //document.getElementById('inputColumnas').value
    // ... y para las columnas.
    while (
      !Number(this.columnas) ||
      this.columnas < 1 ||
      this.columnas > this.maxColumnas
    ) {
      this.condicionesDatoInput(this.columnas, this.maxColumnas, "columnas");
      this.columnas = prompt("Número de columnas del tablero: ");
    }
  }

  // Comprueba si se cumplen ciertas condiciones, personalizando el mensaje de salida.
  condicionesDatoInput(filaColumna, maxFilasColumnas, texto) {
    if (filaColumna < 1 || !Number(filaColumna)) {
      alert("Debes introducir un valor númerico positivo.");
    } else if (filaColumna > maxFilasColumnas) {
      alert("El número máximo de " + texto + " es " + maxFilasColumnas + ".");
    }
  }

  // Solicita al usuario la temática que desea entre las dos opciones disponibles.
  inputTematicaParejas() {
    let mensaje =
      "Elige una temática para el juego: \n1) Animales \n2) Halloween \n3) Pokemon";
    let mensajeAlert = "Valor incorrecto, prueba otra vez.";
    let expresionRegular1 = /^animales$/i;
    let expresionRegular2 = /^halloween$/i;
    let expresionRegular3 = /^pokemon$/;
    let expresionRegular4 = /^[1-3]$/;

    this.tematicaPareja = prompt(mensaje);

    // Condiciones para la entrada de datos.
    while (
      !(
        expresionRegular1.test(this.tematicaPareja) ||
        expresionRegular2.test(this.tematicaPareja) ||
        expresionRegular3.test(this.tematicaPareja) ||
        expresionRegular4.test(this.tematicaPareja)
      )
    ) {
      alert(mensajeAlert);
      this.tematicaPareja = prompt(mensaje);
    }
  }

  iniciarMemory() {
    const memory = new Memory(this.filas, this.columnas, this.tematicaPareja);
  }
}

// Clase Memory hereda de la clase Tablero
class Memory extends Tablero {
  constructor(filas, columnas, tematicaPareja) {
    super(filas, columnas);
    this.tematicaPareja = tematicaPareja;
    this.filas = filas;
    this.columnas = columnas;

    this.arrayCeldasDescubiertas = [];
    this.contador = 0;

    this.pintarTableroEnPantalla();
  }

  // Rellena un array con las imágenes por duplicado (par crear parejas) contenidas en el directorio imagen,
  // éstas pueden provenir de  dos directorios diferentes de forma aleatoria para dos temáticas diferentes.
  // Devuelve un array con el número de parejas solicitadas por el usuario colocadas en posiciones aleatorias.
  // Las 10 primeras parejas siempre serán diferentes, comienzan a repetirse a partir de la pareja número 11.
  arrayDeParejas() {
    let numParejas = (this.filas * this.columnas) / 2;
    const arrayParejas = [];

    for (let i = 0; i < numParejas; i++) {
      if (this.tematicaPareja == 1) {
        this.tematicaPareja = "animales";
      }
      if (this.tematicaPareja == 2) {
        this.tematicaPareja = "halloween";
      }
      if (this.tematicaPareja == 3) {
        this.tematicaPareja = "pokemon";
      }

      // Cuando el número de parejas es mayor de 10, rellena con valores aleatorios hasta llegar al número de parejas necesarias.
      if (i > 9) {
        let parejaAleatoria = parseInt(Math.random() * 10);
        arrayParejas.push(
          '<img src="imagenes/' +
            this.tematicaPareja +
            "/" +
            parejaAleatoria +
            '.png" alt="imagen' +
            i +
            '"></img>'
        );
        arrayParejas.push(
          '<img src="imagenes/' +
            this.tematicaPareja +
            "/" +
            parejaAleatoria +
            '.png" alt="imagen' +
            i +
            '"></img>'
        );
      } else {
        arrayParejas.push(
          '<img src="imagenes/' +
            this.tematicaPareja +
            "/" +
            i +
            '.png" alt="imagen' +
            i +
            '"></img>'
        );
        arrayParejas.push(
          '<img src="imagenes/' +
            this.tematicaPareja +
            "/" +
            i +
            '.png" alt="imagen' +
            i +
            '"></img>'
        );
      }
    }
    this.desordenarArray(arrayParejas);
    return arrayParejas;
  }

  // Devuelve un array ("tablero") desordenado aleatoriamente (fuente W3Schools.com).
  // Esta función devuelve un número aleatorio entre 0 (incluido) y 1 (excluido), por lo que al restarle 0.5 se
  // generan número positivos y negativos de forma aleatoria (entre -0.5 y 0.49999). De esta manera la función
  // reordena el array colocando un elemento delante o detrás de otro de forma aleatoria.
  desordenarArray(array) {
    return array.sort(function () {
      return 0.5 - Math.random();
    });
  }

  // Introduce el valor de cada posición del array con las url de las imágenes en el tablero.
  colocarParejas() {
    let arrayConParejas = this.arrayDeParejas();
    let contador = 0;

    for (let i = 0; i < this.filas; i++) {
      for (let j = 0; j < this.columnas; j++) {
        this.tablero[i][j] = arrayConParejas[contador];
        contador++;
      }
    }
    return this.tablero;
  }

  // Pinta el tablero definitivo en pantalla.
  pintarTableroEnPantalla() {
    let tableroConParejas = this.colocarParejas();

    let tabla = document.createElement("table");
    let fila;
    let columna;

    this.despejar = this.despejar.bind(this);

    for (let i = 0; i < this.filas; i++) {
      fila = document.createElement("tr");
      tabla.appendChild(fila);

      for (let j = 0; j < this.columnas; j++) {
        columna = document.createElement("td");
        columna.id = `f${i}_c${j}`;
        columna.dataset.fila = i;
        columna.dataset.columna = j;
        columna.className = "fichas";

        let contenidoCelda = "";
        columna.innerHTML = contenidoCelda;

        columna.addEventListener("click", this.despejar);

        fila.appendChild(columna);
      }
    }
    document.getElementById("divTablero").appendChild(tabla);
  }

  despejar(elEvento) {
    let evento = elEvento || window.event;
    let celda = evento.currentTarget;

    this.verContenido(celda);
  }

  verContenido(celda) {
    let fila = parseInt(celda.dataset.fila);
    let columna = parseInt(celda.dataset.columna);
    let valorCelda = this.tablero[fila][columna];

    celda.innerHTML = valorCelda;
    this.arrayCeldasDescubiertas.push(celda);

    celda.removeEventListener("click", this.despejar);
    console.log(celda.id);
    this.contador++;

    if (this.contador == 2) {

      let celdaVisible1 = this.arrayCeldasDescubiertas[0];
      let celdaVisible2 = this.arrayCeldasDescubiertas[1];
      if (celdaVisible1.firstChild.src === celdaVisible2.firstChild.src) {
        celdaVisible1.removeEventListener("click", this.despejar);
        celdaVisible2.removeEventListener("click", this.despejar);
        this.arrayCeldasDescubiertas = [];
      } else {
      
        let timeOut = setTimeout(() => {
            document.getElementById(celdaVisible1.id).addEventListener('click', this.despejar);
            document.getElementById(celdaVisible2.id).addEventListener('click', this.despejar);
            document.getElementById(celdaVisible1.id).innerHTML = "";
          document.getElementById(celdaVisible2.id).innerHTML = "";
        }, 2000);
        
        this.arrayCeldasDescubiertas = [];
      }
      this.contador = 0;
    }
  }
}

window.onload = function () {
  const juego = new Juego();
};

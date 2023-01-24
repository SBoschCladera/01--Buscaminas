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
    this.maxFilas = 4;
    this.maxColumnas = 10;

    this.comprobarNumeroParejas();
  }

  /* Solicita al usuario el número de filas, columnas y la temática de las parejas para el tablero, cumpliendo unas
   ciertas condiciones.*/
   
  comprobarNumeroParejas() {
    // Solicita número de filas y columas mediante prompt.
    this.filasColumnasTablero();

    /* Comprueba si el número de casillas del tablero es correcto (debe ser un número par) y debe contener un
     mínimo de 2 parejas.*/
    let numParejas = parseInt((this.filas * this.columnas) / 2);

    while ((this.filas * this.columnas) % 2 != 0 || numParejas < 2) {
      if ((this.filas * this.columnas) % 2 != 0) {
        alert("El número de parejas debe ser PAR, introduce los datos de nuevo.");
      } else if (numParejas < 2) {
        alert("El número mínimo de parejas debe ser 2.");
      }
      this.filasColumnasTablero();

      numParejas = parseInt((this.filas * this.columnas) / 2);
    }

    // Aquí solicita la temática de las parejas
    this.inputTematicaParejas();

    // Inicia el Memory.
    this.iniciarMemory();
  }

  // Solicita número de filas y columnas al usuario, éstas deben cumplir una serie de condiciones.
  filasColumnasTablero() {
    this.filas = prompt("Número de filas del tablero: ");

    // Personaliza el mensaje de salida para las filas según el error detectado.
    while (!Number(this.filas) || this.filas < 1 || this.filas > this.maxFilas) {
      this.condicionesFilasColumnas(this.filas, this.maxFilas, "filas");
      this.filas = prompt("Número de filas del tablero: ");
    }

    this.columnas = prompt("Número de columnas del tablero: ");
    // ... y para las columnas.
    while (!Number(this.columnas) || this.columnas < 1 || this.columnas > this.maxColumnas) {
      this.condicionesFilasColumnas(this.columnas, this.maxColumnas, "columnas");
      this.columnas = prompt("Número de columnas del tablero: ");
    }
  }

  // Comprueba si se cumplen ciertas condiciones, personalizando el mensaje de salida.
  condicionesFilasColumnas(filaColumna, maxFilasColumnas, texto) {
    if (filaColumna < 1 || !Number(filaColumna)) {
      alert("Debes introducir un valor númerico positivo.");
    } else if (filaColumna > maxFilasColumnas) {
      alert("El número máximo de " + texto + " es " + maxFilasColumnas + ".");
    }
  }

  // Solicita al usuario la temática que desea entre las dos opciones disponibles.
  inputTematicaParejas() {
    let mensaje = "Elige una temática para el juego: \n1) Animales \n2) Halloween \n3) Pokemon";
    let mensajeAlert = "Valor incorrecto, prueba otra vez.";
    let expresionRegular1 = /^animales$/i;
    let expresionRegular2 = /^halloween$/i;
    let expresionRegular3 = /^pokemon$/;
    let expresionRegular4 = /^[1-3]$/;

    this.tematicaPareja = prompt(mensaje);

    // Condiciones para la entrada de datos.
    while (!(expresionRegular1.test(this.tematicaPareja) || expresionRegular2.test(this.tematicaPareja) ||
      expresionRegular3.test(this.tematicaPareja) || expresionRegular4.test(this.tematicaPareja))) {
      alert(mensajeAlert);
      this.tematicaPareja = prompt(mensaje);
    }
  }

  // Crea un objeto Memory.
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

    // Variables globales para el acceso desde los distintos métodos.
    this.numParejas = (this.filas * this.columnas) / 2;
    this.parejasDescubiertas = [];
    this.contador = 0;
    this.contadorParejas = 0;
    this.tiempo;
    this.maximaPuntuacion = this.numParejas * 10;
    this.puntuacion = 0;
    this.celdasDescubiertas = [];
    this.contandorIntentos = 0;

    this.dibujarTableroDOM();
  }

  /*Rellena un array con las imágenes por duplicado (par crear parejas) contenidas en el directorio imagen,
  éstas pueden provenir de  dos directorios diferentes de forma aleatoria para dos temáticas diferentes.
  Devuelve un array con el número de parejas solicitadas por el usuario colocadas en posiciones aleatorias.
  Las 10 primeras parejas siempre serán diferentes, comienzan a repetirse a partir de la pareja número 11.*/
  arrayDeParejas() {
    const arrayParejas = [];

    switch (parseInt(this.tematicaPareja)) {
      case 1:
        this.tematicaPareja = 'animales';
        break;
      case 2:
        this.tematicaPareja = 'halloween';
        break;
      case 3:
        this.tematicaPareja = 'pokemon';
        break;
    }

    // Cuando el número de parejas es mayor de 10, rellena con valores aleatorios hasta llegar al número de parejas necesarias.
    if (this.numParejas > 9) {
      for (let i = 0; i < this.numParejas; i++) {
        let parejaAleatoria = parseInt(Math.random() * 10);

        for (let j = 0; j < 2; j++) {
          // Crear un objeto Imagen tantas veces como el número de parejas necesarias (mayor de 10 unidades) y lo añade por duplicado en el array "arrayParejas".
          let imagen = document.createElement("img");
          imagen.src = `imagenes/${this.tematicaPareja}/${parejaAleatoria}.png`;
          imagen.alt = `${this.tematicaPareja}j`;
          arrayParejas.push(imagen);
        }
      }
    } else {
      // Crear un objeto Imagen tantas veces como el número de parejas necesarias (menor o igual a 10 unidades) y lo añade por duplicado en el array "arrayParejas".
      for (let i = 0; i < this.numParejas; i++) {
        for (let j = 0; j < 2; j++) {
          let imagen = document.createElement("img");
          imagen.src = `imagenes/${this.tematicaPareja}/${i}.png`;
          imagen.alt = `${this.tematicaPareja}j`;
          arrayParejas.push(imagen);
        }
      }
    }
    this.desordenarArray(arrayParejas);

    return arrayParejas;
  }

  /* Devuelve un array ("tablero") desordenado aleatoriamente (fuente W3Schools.com).
   Esta función devuelve un número aleatorio entre 0 (incluido) y 1 (excluido), por lo que al restarle 0.5 se
   generan número positivos y negativos de forma aleatoria (entre -0.5 y 0.49999). De esta manera la función
  reordena el array colocando un elemento delante o detrás de otro de forma aleatoria.
  */
  desordenarArray(array) {
    return array.sort(function () {
      return 0.5 - Math.random();
    });
  }

  // Introduce el valor de cada posición del array con los objetos Imagen en el tablero.
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

  // Pinta el tablero vacío en pantalla y añade un evento a cada celda.
  dibujarTableroDOM() {
    this.colocarParejas();

    let tabla = document.createElement("table");
    let fila, columna;

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

        columna.innerHTML = "";
        columna.addEventListener("contextmenu", this.despejar);

        //Deshabilita el desplegable del botón derecho del ratón en todo el documento.
        columna.addEventListener("contextmenu", (event) => event.preventDefault());

        fila.appendChild(columna);
      }
    }
    document.getElementById("divTablero").appendChild(tabla);

    // Añade un evento de click al botón de reinicio.
    let boton = document.getElementById("botonReinicio");
    boton.addEventListener("click", this.reiniciar);

    // Arranca el contador de tiempo.
    this.contadorSegundos(0, 0);

    // Marcador de puntuación.
    document.getElementById("puntos").innerHTML = ` 0 / ${this.maximaPuntuacion}`;
  }

  // Aplica el evento añadido en el ámbito de la celda.
  despejar(elEvento) {
    let evento = elEvento || window.event;
    let celda = evento.currentTarget;

    this.mostrarContenido(celda);
  }

  /*Muestra el contenido de las parejas de casillas descubiertas. Puntúa los aciertos del cliente en el juego, dependiendo de los intentos 
  que se hayan realizado.*/
  mostrarContenido(celda) {
    let fila = parseInt(celda.dataset.fila);
    let columna = parseInt(celda.dataset.columna);
    let valorCelda = this.tablero[fila][columna];

    celda.appendChild(valorCelda);
    celda.removeEventListener("contextmenu", this.despejar);

    this.parejasDescubiertas.push(celda);
    this.celdasDescubiertas.push(celda);
    this.contador++;

    if (this.contador == 2) {
      let celdaDescubierta1 = this.parejasDescubiertas[0];
      let celdaDescubierta2 = this.parejasDescubiertas[1];

      // Comprueba la primera pareja de la partida.
      if (this.celdasDescubiertas.length == 2) {
        this.contandorIntentos++;
        if (celdaDescubierta1.firstChild.src === celdaDescubierta2.firstChild.src) {
          this.sonIguales(celdaDescubierta1, celdaDescubierta2);
          this.contandorIntentos = 0;
        } else {
          this.ocultarCeldas(celdaDescubierta1, celdaDescubierta2);
        }
      }

      if (this.celdasDescubiertas.length == 4) {

        // Primer caso: que las cuatro posiciones del array sean distintas entre sí.
        if (this.celdasDescubiertas[0] != this.celdasDescubiertas[2] && this.celdasDescubiertas[0] != this.celdasDescubiertas[3] &&
          this.celdasDescubiertas[1] != this.celdasDescubiertas[2] && this.celdasDescubiertas[1] != this.celdasDescubiertas[3]) {
          this.contandorIntentos = 1;

          // Si la imagen con contiene la primera casilla descubierta es igual a la de la segunda...(reiniciamos el array y el contador de intentos)...
          if (this.sonIguales(this.celdasDescubiertas[2], this.celdasDescubiertas[3])) {
            this.celdasDescubiertas = [];
            this.contandorIntentos = 0;
          } else {
            //...y si no es igual, ponemos en la primera y la segunda posiciones del array las casillas descubiertas.
            this.ocultarCeldas(this.celdasDescubiertas[2], this.celdasDescubiertas[3])
            this.celdasDescubiertas = [this.celdasDescubiertas[2], this.celdasDescubiertas[3]];
          }


          // Segundo caso: que la posición 0 ó 1  del array sean igual a la posición 2 ó 3.
        } else if ((this.celdasDescubiertas[0] == this.celdasDescubiertas[2] || this.celdasDescubiertas[0] == this.celdasDescubiertas[3]) ||
          (this.celdasDescubiertas[1] == this.celdasDescubiertas[2] || this.celdasDescubiertas[1] == this.celdasDescubiertas[3])) {

          this.contandorIntentos++;
          // Si la imagen con contiene la primera casilla descubierta es igual a la de la segunda...(reiniciamos el array y se mantiene el valor del contador de intentos)...
          if (this.sonIguales(this.celdasDescubiertas[2], this.celdasDescubiertas[3])) {
            this.celdasDescubiertas = [];
          } else {
            //...y si no es igual, ponemos en la primera y la segunda posiciones del array las casillas descubiertas.
            this.ocultarCeldas(this.celdasDescubiertas[2], this.celdasDescubiertas[3])
            this.celdasDescubiertas = [this.celdasDescubiertas[2], this.celdasDescubiertas[3]];
          }
        }
      }
      this.parejasDescubiertas = [];
      this.contador = 0;
    }
  }


  sonIguales(celda1, celda2) {
    if (celda1.firstChild.src === celda2.firstChild.src) {
      celda1.removeEventListener("contextmenu", this.despejar);
      celda2.removeEventListener("contextmenu", this.despejar);
      this.parejasDescubiertas = [];
      this.contadorParejas++;

      // Marcador de puntuación.
      this.puntuacionParejas();
      document.getElementById("puntos").innerHTML = `${this.puntuacion} / ${this.maximaPuntuacion}`;

      this.contandorIntentos = 0;
      this.celdasDescubiertas = [];

      if (this.contadorParejas == this.numParejas) {
        this.partidaGanada();
      }
    }
  }

  // Cambia el valor de la celda descubierta transcurrido un segundo para que no contenga ninguna imagen.
  ocultarCeldas(celda1, celda2) {
    setTimeout(() => {
      document.getElementById(celda1.id).addEventListener("contextmenu", this.despejar);
      document.getElementById(celda2.id).addEventListener("contextmenu", this.despejar);
      document.getElementById(celda1.id).innerHTML = "";
      document.getElementById(celda2.id).innerHTML = "";
    }, 1000);
  }

  // Muestra un cuadro de diálogo con la puntuación y el tiempo transcurrido.
  partidaGanada() {
    setTimeout(() => {
      let tiempoTranscurrido = document.getElementById("reloj").textContent;
      alert("YOU WIN!!!!!\n" + "Has parado el crono en " + tiempoTranscurrido + "\n y has conseguido " + this.puntuacion +
        " puntos de un máxuimo de " + this.maximaPuntuacion + '.');
      this.pararContadorSegundos();
      if (confirm("¿Quieres volver a jugar?")) {
        document.location = `index.html`;
      } else {
        alert("¡Hasta la próxima!");
        this.pararContadorSegundos();
      }
    }, 500);
  }

  // Puntúa el acierto en la pareja según el número de intentos efectuados.
  puntuacionParejas() {
    if (this.contandorIntentos == 1) {
      this.puntuacion = this.puntuacion + 10;
    }
    if (this.contandorIntentos == 2) {
      this.puntuacion = this.puntuacion + 5;
    }
    if (this.contandorIntentos == 3) {
      this.puntuacion = this.puntuacion + 2.5;
    }
  }

  // Muestra un cuadro de diálogo en el que el usuario puedo reiniciar la partida.
  reiniciar() {
    if (confirm("¿Desea reiniciar la partida?")) {
      document.location = `index.html`;
    }
  }

  // Contador de tiempo.
  contadorSegundos(contSegundos, contMinutos) {
    this.tiempo = window.setInterval(function () {
      if (contSegundos >= 0 && contSegundos < 10) {
        contSegundos = `0${contSegundos}`;
      }
      if (contSegundos > 59) {
        contSegundos = `0${0}`;
        contMinutos++;
      }
      document.getElementById(
        "reloj"
      ).innerHTML = `${contMinutos}:${contSegundos}`;
      contSegundos++;
    }, 1000);
  }

  // Cancela el contador de tiempo.
  pararContadorSegundos() {
    clearInterval(this.tiempo);
  }
}

window.onload = function () {
  const juego = new Juego();
};

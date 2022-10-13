//window.addEventListener('load', function () {

// DECLARACIÓN DE VARIABLES
var numBotones = 10;
var valor = parseInt(valorDelBoton('boton' + numTabla))


/** INICIA LA APLICACIÓN ***************************************/

function iniciarApp() {

    crearBotonesTablas();
    document.getElementById('botonParaInicio').style.height = "50px";
}

// CREA LOS BOTONES DE LAS TABLAS DE MULTIPLICAR
function crearBotonesTablas() {

    let totalNumBotones = numBotones + (12 - numBotones);

    for (x = 0; x < totalNumBotones; x++) {
        crearDiv('divTabla' + x, 'eleccionTabla')
        crearBoton("boton" + x, x, 'iniciarTabla', x, 'divTabla' + x);
        document.getElementById('boton' + x).setAttribute('class', 'botonesTablas');
        document.getElementById('divTabla' + x).setAttribute('class', 'col-sm-1');
    }

    ocultarBoton('boton0');
    ocultarBoton('boton11');
    ocultarBoton('botonInicio');

    document.getElementById('botonCambiarDeTabla').setAttribute('value', 'Cambiar\nde Tabla');
    document.getElementById('botonParaInicio').style.fontSize = "5px";
    document.getElementById('botonParaInicio').style.padding = "0px";
    document.getElementById('botonParaInicio').style.margin = "0px;"
}


// INDICES Y RESULTADOS CORRECTOS DE LAS MULTILPLICACIONES

function rellenarArray(valor) {
    let arrayRellenado = new Array(2)
    arrayRellenado[0] = new Array();
    arrayRellenado[1] = new Array();

    for (let i = 0; i < 10; i++) {
        let resultado = valor * (i + 1)
        let indice = (i + 1);
        arrayRellenado[0][i] = indice;
        arrayRellenado[1][i] = resultado;
    }
    return arrayRellenado;
}

// INICIA LA TABLA SELECCIONADA

function iniciarTabla(numTabla) {

    let contador = 0;

    document.getElementById('mostrarPregunta').innerHTML = "";
    let valor = parseInt(valorDelBoton('boton' + numTabla));

    // alert('Vamos a empezar');

    if (valor == 1) {
        crearDiv('imagenSalida', 'mostrarPregunta');
        document.getElementById('imagenSalida').setAttribute('class', 'col-sm-8');
        insertarImagen('imgTabla1', 'gifs/naruto13.gif', 'imagenSalida');
        crearDiv('bocadillo-redondo', 'mostrarPregunta');
        document.getElementById('bocadillo-redondo').setAttribute('class', 'col-sm-4');
        crearDiv('bocadillo-redondo2', 'mostrarPregunta');
        document.getElementById('bocadillo-redondo2').setAttribute('class', 'col-sm-4');

        crearParrafo('bocadillo-redondo', 'Como te atreveees!!!');
        crearParrafo('bocadillo-redondo2', 'Esa es muy faaaaacil!!!');

        // DESHABILITA TODOS LOS BOTONES CON LAS UNIDADES DE LAS TABLAS DE MULTIPLICAR
        for (x = 0; x < numBotones; x++) {
            ocultarBoton('boton' + (x + 1));
        }
        mostrarBoton('botonCambiarDeTabla');

        cambiosTablaDelUno();

    } else {

        /********* CREAMOS LOS DIV NECESARIOS PARA BOOTSTRAP ****************/
        divYClasesParaBootstrap();
        /********************************************************************/

        document.getElementById('botonParaInicio').style.height = "50px";

        crearLabel('idLabel', valor + ' x ' + rellenarArray(valor)[0][0] + ' = ', 'idRow1');
        crearInputText('idInput', 'idRow2');
        crearBoton("botonComprobacion", 'Comprobar', 'comprobarRespuesta', valor, 'idRow3');

        darFocusInputText();

        document.getElementById('botonCambiarDeTabla').style.visibility = "visible"
        crearBoton("botonSiguientePregunta", 'Siguiente \nMision', 'siguienteMultiplicacion', valor, 'siguiente');
        ocultarBoton('botonSiguientePregunta');

        document.getElementById('idInput').setAttribute('maxlength', 3);

        // DESHABILITA TODOS LOS BOTONES CON LAS UNIDADES DE LAS TABLAS DE MULTIPLICAR
        for (x = 0; x < numBotones; x++) {
            deshabilitarBoton('boton' + (x + 1));
        }
        contadorClicks(contador);
    }
}

// COMPRUEBA SI LA RESPUESTA DADA POR EL USUARIO ES CORRECTA Y PINTA UN MENSAJE DE SALIDA 

function comprobarRespuesta(valor) {
    let contador = parseInt(document.getElementById('click').textContent);
    let respuesta = document.getElementById('idInput').value;

    document.getElementById('resultadoComprobacion').innerHTML = "";
    ocultarBoton('boton11');

    // JSON CON NOMBRES PARA URL's Y MENSAJES PARA SALIDA DE DATOS
    let nombresOk = '{"personajes":[' +
        '{"nombre":"gaara01","mensaje":"es  emocionante..." },' +
        '{"nombre":"hinata01","mensaje":"ayyyyy" },' +
        '{"nombre":"jiraiya02","mensaje":"que  bien!!!" },' +
        '{"nombre":"jiraiya04","mensaje":"interesante..." },' +
        '{"nombre":"kakashi01","mensaje":"buen trabajo..." },' +
        '{"nombre":"kakashi02","mensaje":"sigue  asi!!!" },' +
        '{"nombre":"kakashi03","mensaje":"......." },' +
        '{"nombre":"kakashi05","mensaje":"estupendo!" },' +
        '{"nombre":"kakashi08","mensaje":"a  tope!!!" },' +
        '{"nombre":"kakashi09","mensaje":"muy  bien!!!" },' +
        '{"nombre":"kyubi01","mensaje":"grrrrr" },' +
        '{"nombre":"naruto01","mensaje":"alucinante!" },' +
        '{"nombre":"naruto02","mensaje":"si!  sigue  asi!" },' +
        '{"nombre":"naruto03","mensaje":"genial!" },' +
        '{"nombre":"naruto04","mensaje":"Dattebayo!!!" },' +
        '{"nombre":"naruto05","mensaje":"......." },' +
        '{"nombre":"naruto07","mensaje":"......." },' +
        '{"nombre":"naruto08","mensaje":"Dattebayo!!!" },' +
        '{"nombre":"naruto09","mensaje":"a  celebrarlo!" },' +
        '{"nombre":"naruto10","mensaje":"oooohhhhh!!!" },' +
        '{"nombre":"naruto12","mensaje":"God  job!!" },' +
        '{"nombre":"naruto14","mensaje":"....." },' +
        '{"nombre":"naruto15","mensaje":"sigue  asi!!" },' +
        '{"nombre":"naruto19","mensaje":"a  celebrarlo!!!" },' +
        '{"nombre":"naruto20","mensaje":"ji  ji  ji!!!" },' +
        '{"nombre":"rocklee02","mensaje":"vamos!!!" },' +
        '{"nombre":"rocklee03","mensaje":"fantastico!!!" },' +
        '{"nombre":"rocklee04","mensaje":"muak!!!" },' +
        '{"nombre":"rocklee06","mensaje":"impresionaaaante!!!" },' +
        '{"nombre":"rocklee07","mensaje":"genial!!!" },' +
        '{"nombre":"sakura01","mensaje":"vamos!!!" },' +
        '{"nombre":"sakura04","mensaje":"que bien!!!" },' +
        '{"nombre":"sakura05","mensaje":"esa es mi chica!!!" },' +
        '{"nombre":"sakura09","mensaje":"a tope!!!" }]}';


    let nombresKO = '{"personajes":[' +
        '{"nombre":"jiraiya01","mensaje":"no me lo puedo creer..." },' +
        '{"nombre":"jiraiya03","mensaje":"tengo que salir!!!" },' +
        '{"nombre":"jiraiya05","mensaje":"sin palabras..." },' +
        '{"nombre":"kakashi04","mensaje":"como?" },' +
        '{"nombre":"kakashi06","mensaje":"no puedo creerlo..." },' +
        '{"nombre":"kakashi07","mensaje":"eso duele" },' +
        '{"nombre":"naruto06","mensaje":"im-im-imposible" },' +
        '{"nombre":"naruto11","mensaje":"no puede ser!!!" },' +
        '{"nombre":"naruto16","mensaje":"como puedes decir eso!!!!" },' +
        '{"nombre":"naruto17","mensaje":"snif snif" },' +
        '{"nombre":"naruto18","mensaje":"como ha sido posible??" },' +
        '{"nombre":"naruto21","mensaje":"no puede ser!!!!" },' +
        '{"nombre":"orochimaru01","mensaje":"no puedo mirar" },' +
        '{"nombre":"rocklee01","mensaje":"......" },' +
        '{"nombre":"rocklee05","mensaje":"seguire entrenando..." },' +
        '{"nombre":"rocklee08","mensaje":"queeee??????" },' +
        '{"nombre":"sakura02","mensaje":"pero que diceeees!!!!" },' +
        '{"nombre":"sakura03","mensaje":"no, no puede ser..." },' +
        '{"nombre":"sakura06","mensaje":"te observo" },' +
        '{"nombre":"sakura07","mensaje":"ein??" },' +
        '{"nombre":"sakura08","mensaje":"...." },' +
        '{"nombre":"sakura10","mensaje":"no no no no no!!!" },' +
        '{"nombre":"sakura11","mensaje":"esa no es la respuesta!!" },' +
        '{"nombre":"sakura12","mensaje":"te parto la cabeza!!!!" },' +
        '{"nombre":"sakura13","mensaje":"pero que dices!!!" },' +
        '{"nombre":"sasuke01","mensaje":"eso no es asi" },' +
        '{"nombre":"shikamaru01","mensaje":"vaya rollo...." },' +
        '{"nombre":"tsunade01","mensaje":"noooooooooo!!!" },' +
        '{"nombre":"tsunade02","mensaje":"kkkkkkkkkk" }]}';


    const objNombresOk = JSON.parse(nombresOk);
    const objNombresKO = JSON.parse(nombresKO);

    let numRandom1 = parseInt(Math.random() * objNombresOk.personajes.length); // Imagen random extraida del array 'resultadoOk';
    let numRandom2 = parseInt(Math.random() * objNombresKO.personajes.length); // Imagen random extraida del array 'resultadoKO';

    // Comrprueba la respuesta dad por el usuario
    if (respuesta == rellenarArray(valor)[1][contador]) {

        crearDiv('idDivImagen', 'resultadoComprobacion');
        insertarImagen('idImagenComprobacion', 'gifs/resultadoOk/' + objNombresOk.personajes[numRandom1]['nombre'] + '.gif', 'idDivImagen');

        crearDiv('bocadillo-redondo3', 'idDivImagen');
        crearParrafo('bocadillo-redondo3', objNombresOk.personajes[numRandom1]['mensaje']);

        mostrarBoton('botonSiguientePregunta');
        ocultarBoton('botonComprobacion');

        document.getElementById('idInput').style.color = "green";
        document.getElementById('idInput').style.border = "transparent";
        if (contador == 9) {
            document.getElementById('botonSiguientePregunta').setAttribute('value', 'Finalizar');
        }

    } else {
        crearDiv('idDivImagen', 'resultadoComprobacion');
        insertarImagen('idImagenComprobacion', 'gifs/resultadoKO/' + objNombresKO.personajes[numRandom2]['nombre'] + '.gif', 'idDivImagen');

        crearDiv('bocadillo-redondo3', 'idDivImagen');
        crearParrafo('bocadillo-redondo3', objNombresKO.personajes[numRandom2]['mensaje']);

        document.getElementById('idInput').style.color = "red";
        darFocusInputText();

        mostrarBoton('boton11');
        document.getElementById('boton11').setAttribute('value', 'Help Me!');
        document.getElementById('boton11').setAttribute('onclick', 'ayudaTabla(' + valor + ')');
        document.getElementById('boton11').style.fontSize = "18px"


    }

}

// PINTA EN PANTALLA LA SIGUIENTE MULTIPLICACIÓN

function siguienteMultiplicacion(valor) {
    let contador = parseInt(document.getElementById('click').textContent) + 1;
    //let respuesta = document.getElementById('idInput').value;

    document.getElementById('idInput').style.color = "black";

    document.getElementById('mostrarPregunta').innerHTML = ""

    divYClasesParaBootstrap();
    if (contador < 10) {
        crearLabel('idLabel', valor + ' x ' + rellenarArray(valor)[0][contador] + ' = ', 'idRow1');
        crearInputText('idInput', 'idRow2');
        crearBoton("botonComprobacion", 'Comprobar', 'comprobarRespuesta', valor, 'idRow3');
    } else {
        crearDiv('imagenSalida', 'mostrarPregunta');
        document.getElementById('idRow1').style.height = "5px";
        document.getElementById('idRow2').style.height = "5px";
        document.getElementById('idRow3').style.height = "5px";
        document.getElementById('imagenSalida').setAttribute('class', 'col-sm-8');
        insertarImagen('imgFinal', 'gifs/Llucia.jpg', 'imagenSalida');
        crearDiv('bocadillo-redondo', 'mostrarPregunta');
        document.getElementById('bocadillo-redondo').setAttribute('class', 'col-sm-4');

        crearParrafo('bocadillo-redondo', 'Como te has quedado');
        document.getElementById('botonCambiarDeTabla').setAttribute('onclick', "document.location=`index.html`");

        // DESHABILITA TODOS LOS BOTONES CON LAS UNIDADES DE LAS TABLAS DE MULTIPLICAR
        for (x = 0; x < numBotones; x++) {
            ocultarBoton('boton' + (x + 1));
        }
        mostrarBoton('botonCambiarDeTabla');

        cambiosTablaDelUno();
        caidaConfetti(8000, 120);
    }
    contadorClicks(contador);

    ocultarBoton('botonSiguientePregunta')

    document.getElementById('resultadoComprobacion').innerHTML = ""
    darFocusInputText();
}

// DIV's Y CLASES NECESARIAS PARA BOOTSTRAP

function divYClasesParaBootstrap() {
    for (let i = 0; i < 3; i++) {
        crearDiv('idRow' + (i + 1), 'mostrarPregunta');
    }
    document.getElementById('idRow1').setAttribute('class', 'col-sm-6');
    document.getElementById('idRow2').setAttribute('class', 'col-sm-3');
    document.getElementById('idRow3').setAttribute('class', 'col-sm-3');

    document.getElementById('idDivBotonCambioTabla').setAttribute('class', 'col-sm-6'); // CLASE NECESARIA PARA BOOTSTRAP
    document.getElementById('cambioTabla').setAttribute('class', 'col-sm-4'); // CLASE NECESARIA PARA BOOTSTRAP
    document.getElementById('siguiente').setAttribute('class', 'col-sm-6'); // CLASE NECESARIA PARA BOOTSTRAP
    document.getElementById('resultadoComprobacion').setAttribute('class', 'col-sm-8'); // CLASE NECESARIA PARA BOOTSTRAP
}

// POR SI EL USUARIO QUIERE CAMBIAR DE TABLA EN CUALQUIER MOMENTO, SE REINICIA TODO EL PROCESO

function cambiarDeTabla() {

    revertirCambiosTablaDelUno();

    document.getElementById('eleccionTabla').innerHTML = " ";
    document.getElementById('mostrarPregunta').innerHTML = " ";
    document.getElementById('resultadoComprobacion').innerHTML = " "
    document.getElementById('siguiente').innerHTML = " "
    ocultarBoton('botonCambiarDeTabla');
    document.getElementById('click').innerHTML = "0";
    crearBotonesTablas();

    document.getElementById('botonParaInicio').style.height = "50px";
}

// AJUSTA LA MAQUETACIÖN PARA LA TABLA DEL 1
function cambiosTablaDelUno() {
    document.getElementById('botonParaInicio').style.height = "0px";
    document.getElementById('mostrarPregunta').style.marginTop = "0px";
    document.getElementById('mostrarResultado').style.height = "125px";

    for (let i = 0; i < 12; i++) {
        document.getElementById('divTabla' + i).style.height = "5px";
    }
}

// REVIERTE LOS CAMBIOS APLICADOS POR LA SELECCiÖN CON ANTERIORIDAD DE LA TABLA DEL 1
function revertirCambiosTablaDelUno() {
    document.getElementById('botonParaInicio').style.height = "80px";
    document.getElementById('mostrarPregunta').style.marginTop = "3%";
    document.getElementById('mostrarResultado').style.height = "400px";

    for (let i = 0; i < 12; i++) {
        document.getElementById('divTabla' + i).style.height = "100px";
    }
}

// DA EL FOCO AL INPUT-TEXT
function darFocusInputText() {
    document.getElementById("idInput").focus();
}

// PROPORCIONA AYUDA AL USUARIO

function ayudaTabla(valor) {

    let posTablaMultiplicar = parseInt(document.getElementById('click').textContent) + 1;
    let resultado = valor * posTablaMultiplicar;
    document.getElementById('boton11').setAttribute('value', resultado);
    document.getElementById('boton11').style.fontSize = "50px"
}


// FUNCION PARA LA CAÍDA DE CONFETTI (efecto en pantalla)
function caidaConfetti(DURATION, LENGTH) {

    new Confetti({
        width: window.innerWidth,
        height: window.innerHeight,
        length: LENGTH,
        duration: DURATION
    });

    setTimeout(function () {
        new Confetti({
            width: window.innerWidth,
            height: window.innerHeight,
            length: LENGTH,
            duration: DURATION
        });
    }, DURATION / 2);
};

/******************************************* CREACiÓN DE TAGS (botones, inputs...) ********************************/
// Crea un botón con sus parámetros.
function crearBoton(idBoton, texto, nombreFuncion, numTabla, idDiv) {

    var boton = document.createElement('input');
    boton.setAttribute('type', 'button');
    boton.setAttribute('id', idBoton);
    //boton.setAttribute('class', nombreClase)
    boton.setAttribute('value', texto);
    boton.setAttribute('onClick', nombreFuncion + '(' + numTabla + ')')
    document.getElementById(idDiv).appendChild(boton);
}

// Crea el LABEL de una pregunta (el enunciado de la misma) según los parámetros introducidos
function crearLabel(idLabel, preguntaLabel, idDiv) {
    let label = document.createElement('label');
    label.setAttribute('id', idLabel)
    let textoLabel = document.createTextNode(preguntaLabel)
    label.appendChild(textoLabel)
    document.getElementById(idDiv).appendChild(label)
}

// Crea un INPUT-TEXT según parámetros
function crearInputText(id, idDiv) {
    var campoTexto = document.createElement('input')
    campoTexto.setAttribute('type', 'text')
    campoTexto.setAttribute('id', id)
    // campoTexto.setAttribute('name', nombre)
    // campoTexto.setAttribute('placeholder', respuesta)
    document.getElementById(idDiv).appendChild(campoTexto)
}

// CREA UN DIV PARA SALIDA DE DATOS
function crearDiv(id, idDiv) {
    var div = document.createElement('div')
    div.setAttribute('id', id)
    document.getElementById(idDiv).appendChild(div)
}

// CREA UN PÁRRAFO
function crearParrafo(idParrafo, mensaje) {

    let parrafo = document.createElement('p');
    let contenidoParrafo = document.createTextNode(mensaje);
    parrafo.appendChild(contenidoParrafo);
    document.getElementById(idParrafo).appendChild(parrafo);
}

// INSERTAR IMAGEN
function insertarImagen(id, url, idDiv) {

    let imagen = document.createElement('img');
    imagen.src = url;
    imagen.setAttribute('id', id);
    document.getElementById(idDiv).appendChild(imagen);
    imagen.style.marginTop = "5px";
    imagen.style.marginLeft = "25%";
};



/******************************************************************************************************************/



/*****************************  PROPIEDADES DE LOS BOTONES ********************************************************/
// Oculta un botón
function ocultarBoton(idBoton) {

    document.getElementById(idBoton).style.visibility = 'hidden';

}
// Mostrar un botón
function mostrarBoton(idBoton) {

    document.getElementById(idBoton).style.visibility = 'visible';

}

// Deshabilita un botón
function deshabilitarBoton(idBoton) {

    document.getElementById(idBoton).disabled = 'true';

}
// Habilita un botón
function habilitarBoton(idBoton) {

    document.getElementById(idBoton).disabled = 'false';

}

// Coge el valor de un botón seleccionado
function valorDelBoton(botonId) {
    var valorBoton = document.getElementById(botonId).value;

    return valorBoton;
}

/******************************************************************************************************************/

// Contador de clicks
function contadorClicks(contador) {
    document.getElementById('click').innerHTML = contador
    return contador;
}

//});
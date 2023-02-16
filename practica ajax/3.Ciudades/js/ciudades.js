// Declaración de variables
let arrayPaises = [];
let arrayCiudades = [];

// Carga el valor de los option del select para elegir un país.
function primerSelect() {

    // Crear un objeto XMLHttpRequest()
    var xmlhttp = new XMLHttpRequest();

    // Abrir una conexión al archivo PHP que contiene la consulta a la base de datos
    xmlhttp.open('GET', './php/paises.php', true);

    // Especificar el tipo de datos que se espera recibir
    xmlhttp.setRequestHeader('Content-Type', 'application/json');

    // Enviar la solicitud
    xmlhttp.send();

    // Escuchar el evento readystatechange para detectar cuándo se ha recibido la respuesta
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Comprobar que la respuesta contenga datos
            if (this.responseText) {
                // Convertir la respuesta en un objeto JavaScript
                arrayPaises = JSON.parse(this.responseText);
                // Creamos un select con los países del mundo.
                crearSelect('mySelectPaises', 'mostrarResultadoCiudades(this.value)', 'divSelectPaises', 'Elige un país:', 'un país', arrayPaises);
            }
        }
    };
    return arrayPaises;
}


// function segundoSelect() {

//     // Crear un objeto XMLHttpRequest()
//     var xmlhttp = new XMLHttpRequest();

//     // Abrir una conexión al archivo PHP que contiene la consulta a la base de datos
//     xmlhttp.open('GET', './php/ciudades.php', true);

//     // Especificar el tipo de datos que se espera recibir
//     xmlhttp.setRequestHeader('Content-Type', 'application/json');

//     // Enviar la solicitud
//     xmlhttp.send();

//     // Escuchar el evento readystatechange para detectar cuándo se ha recibido la respuesta
//     xmlhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             // Comprobar que la respuesta contenga datos
//             if (this.responseText) {

//                 // Convertir la respuesta en un objeto JavaScript
//                 arrayCiudades = JSON.parse(this.responseText);

//             }
//         }
//     };
//     return arrayCiudades;
// }

// function mostrarResultadoPaises(str) {
//     if (str == "") {
//         document.getElementById("salida").innerHTML = "";
//         return;
//     }
//     const xhttp = new XMLHttpRequest();
//     xhttp.onload = function () {
//         document.getElementById("salida").innerHTML = this.responseText;

//     }
//     xhttp.open("GET", "php/paises.php?q=" + str);
//     xhttp.send();
// }


// Crea y carga los valores de las ciudades del segundo select 
function mostrarResultadoCiudades(str) {
    if (str == "") {
        document.getElementById("salida").innerHTML = "";
        return;
    }
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {

        //document.getElementById("salida").innerHTML = this.responseText;
        arrayCiudades = JSON.parse(this.responseText);
        document.getElementById('divSelectCiudades').innerHTML = "";

        crearSelect('mySelectCiudades', 'mostrarDatosCiudad(this.value)', 'divSelectCiudades', 'Elige una ciudad:', 'una ciudad', arrayCiudades);
    }
    xhttp.open("GET", "php/ciudades.php?q=" + str);
    xhttp.send();
}

// Muestra los datos de salida de la ciudad seleccionada
function mostrarDatosCiudad(str) {

    document.getElementById('salida').innerHTML = "";

    if (str == "") {
        document.getElementById("salida").innerHTML = "";
        return;
    }
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {

        let x = document.getElementById("mySelectCiudades");
        let indice = x.selectedIndex;
        document.getElementById('salida').innerHTML += '<h2>' + arrayCiudades[indice - 1].name + '</h2>';
        document.getElementById('salida').innerHTML += '<p>Distrito: <b>' + arrayCiudades[indice - 1].district + '<b><p>';
        document.getElementById('salida').innerHTML += '<p>Población: <b>' + arrayCiudades[indice - 1].population + '<b><p>';

        document.getElementById('salida').style.border = "2px solid black";

    }
    xhttp.open("GET", "php/ciudades.php?q=" + str);
    xhttp.send();
}


// Crea un select según parámetros
function crearSelect(id, evento, salida, textoLabel, valorPrimeraOpcion, arrayDatos) {
    let total = arrayPaises.length;

    let label = document.createElement('label');
    let contenidoLabel = document.createTextNode(textoLabel);
    label.appendChild(contenidoLabel);
    document.getElementById(salida).appendChild(label);

    let x = document.createElement("SELECT");
    x.setAttribute("id", id);
    x.setAttribute('onchange', evento)
    document.getElementById(salida).appendChild(x);

    let opcion = document.createElement("option");
    opcion.setAttribute("value", 'pais');
    let valor = document.createTextNode('Elige ' + valorPrimeraOpcion);
    opcion.appendChild(valor);
    document.getElementById(id).appendChild(opcion);

    for (let i = 0; i < total; i++) {
        let opcion = document.createElement("option");
        opcion.setAttribute("value", arrayDatos[i].id);
        let valor = document.createTextNode(arrayDatos[i].name);
        opcion.appendChild(valor);
        document.getElementById(id).appendChild(opcion);
    }
}

window.onload = function () {
    primerSelect();
}

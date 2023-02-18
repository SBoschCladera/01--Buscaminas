// Array con las letras del Abecedario
let letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Muestra los datos recogidos en la consulta a base de datos
function mostrarResultado(str) {
    document.getElementById('salida').innerHTML = "";
    if (str == "") {
        document.getElementById("salida").innerHTML = "";
        return;
    }
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {

        let paises = JSON.parse(this.responseText);

        let tabla = document.createElement('table');
        tabla.id = "idTabla";

        let tr = document.createElement('tr');
        let td = document.createElement('td');
        let contenido = document.createTextNode('PAISES');
        td.appendChild(contenido);
        tr.appendChild(td);
        tabla.appendChild(tr);

        for (let i = 0; i < paises.length; i++) {
            let tr = document.createElement('tr');
            let td = document.createElement('td');
            let contenido = document.createTextNode(paises[i].nombre);
            td.appendChild(contenido);
            tr.appendChild(td);
            tabla.appendChild(tr);
        }
        document.getElementById('salida').appendChild(tabla);
    }
    xhttp.open("GET", "php/paises.php?q=" + str);
    xhttp.send();
}

//Crea un select con sus opciones
function crearSelect(id, salida) {

    let x = document.createElement("SELECT");
    x.setAttribute("id", id);
    x.setAttribute('onchange', 'mostrarResultado(this.value)')
    document.getElementById(salida).appendChild(x);

    let opcion = document.createElement("option");
    opcion.setAttribute("value", '');
    let valor = document.createTextNode('Elige una letra');
    opcion.appendChild(valor);
    document.getElementById(id).appendChild(opcion);


    for (let i = 0; i < letras.length; i++) {
        let opcion = document.createElement("option");
        opcion.setAttribute("value", letras[i]);
        let valor = document.createTextNode(letras[i]);
        opcion.appendChild(valor);
        document.getElementById(id).appendChild(opcion);
    }
}

window.onload = function () {
    crearSelect('mySelect', 'divSelect');
}

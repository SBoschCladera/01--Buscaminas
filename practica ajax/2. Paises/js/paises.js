let letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function mostrarResultado(str) {
    if (str == "") {
        document.getElementById("salida").innerHTML = "";
        return;
    }
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.getElementById("salida").innerHTML = this.responseText;
    }
    xhttp.open("GET", "php/paises.php?q=" + str);
    xhttp.send();
}

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

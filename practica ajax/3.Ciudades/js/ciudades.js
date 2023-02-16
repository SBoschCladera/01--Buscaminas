// Carga el valor de los option del select para elegir un país.
function primerSelect() {

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // El XML se ha cargado correctamente
            const xmlDoc = this.responseXML;

            // Crea el elemento select y sus opciones
            let select = document.createElement("select");
            select.setAttribute('onchange', 'mostrarResultadoCiudades(this.value)');
            let options = xmlDoc.getElementsByTagName("pais");

            let option = document.createElement("option");
            option.value = 'pais';
            option.text = 'Elige un país';
            select.appendChild(option);

            let label = document.createElement('label');
            let contenidoLabel = document.createTextNode('Elige un país: ');
            label.appendChild(contenidoLabel);
            document.getElementById('divSelectPaises').appendChild(label);

            for (let i = 0; i < options.length; i++) {

                let nombre = options[i].lastChild.textContent;
                let id = options[i].firstChild.textContent;

                let option = document.createElement("option");
                option.value = id;
                option.text = nombre;
                select.appendChild(option);
            }
            document.getElementById('divSelectPaises').appendChild(select);
        }
    };
    xhttp.open("GET", "./php/paises.php", true);
    xhttp.send();
}

// Crea y carga los valores de las ciudades del segundo select
function mostrarResultadoCiudades(str) {
    document.getElementById('divSelectCiudades').innerHTML = "";

    if (str == "") {
        document.getElementById("salida").innerHTML = "";
        return;
    }
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // El XML se ha cargado correctamente
            const xmlDoc = this.responseXML;

            // Crea el elemento select y sus opciones
            let select = document.createElement("select");
            select.id = "mySelectCiudades";
            select.setAttribute('onchange', 'mostrarDatosCiudad(this.value)')
            let options = xmlDoc.getElementsByTagName("ciudad");

            let option = document.createElement("option");
            option.value = 'ciudad';
            option.text = 'Elige una ciudad';
            select.appendChild(option);

            let label = document.createElement('label');
            let contenidoLabel = document.createTextNode('Elige una ciudad: ');
            label.appendChild(contenidoLabel);
            document.getElementById('divSelectCiudades').appendChild(label);

            for (let i = 0; i < options.length; i++) {

                let id = options[i].childNodes[0].textContent;
                let nombre = options[i].childNodes[1].textContent;

                let option = document.createElement("option");
                option.value = id;
                option.text = nombre;
                select.appendChild(option);
            }
            document.getElementById('divSelectCiudades').appendChild(select);
        }
    };
    xhttp.open("GET", "php/ciudades.php?q=" + str);
    xhttp.send();

}

// Muestra los datos de salida de la ciudad seleccionada
function mostrarDatosCiudad(str) {

    document.getElementById("salida").innerHTML = "";

    let x = document.getElementById("mySelectCiudades");
    let indice = x.selectedIndex;

    if (str == "") {
        document.getElementById("salida").innerHTML = "";
        return;
    }
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // El XML se ha cargado correctamente
            const xmlDoc = this.responseXML;

            // Recupera  todos los tags CIUDAD del xml
            let options = xmlDoc.getElementsByTagName("ciudad");

            let id = options[indice - 1].childNodes[0].textContent;
            let nombre = options[indice - 1].childNodes[1].textContent;
            let distrito = options[indice - 1].childNodes[2].textContent;
            let poblacion = options[indice - 1].childNodes[3].textContent;

            if (indice > 0) {
                document.getElementById('salida').innerHTML += '<h2>' + nombre + '</h2>';
                document.getElementById('salida').innerHTML += '<p>Distrito: <span>' + distrito + '</span><p>';
                document.getElementById('salida').innerHTML += '<p>Población: <span>' + poblacion + '</span><p>';

                document.getElementById('salida').style.border = "2px solid black";
            } else {
                document.getElementById('salida').innerHTML = '';
                document.getElementById('salida').style.border = "none";
            }
        }


    };
    xhttp.open("GET", "php/ciudades.php?q=" + str);
    xhttp.send();
}

window.onload = function () {
    primerSelect();
}

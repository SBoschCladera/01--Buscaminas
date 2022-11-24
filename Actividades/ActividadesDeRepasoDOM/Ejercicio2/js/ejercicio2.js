/*
2. A partir de la pàgina web adjuntada i utilitzant les funcions DOM, mostrar per pantalla les
següent informacions (dins el <div id=“info“> que hi ha al començament del body) : •
Nombre d'enllaços de la pàgina.
• Nombre de paràgrafs de la pàgina.
• Adreça a la qual enllaça el penúltim enllaç.
• Adreça a la qual enllaça el darrer enllaç.
• Número d'enllaços que enllacen a http://pr ueb a
• Nombre d'enllaços de tots els paràgrafs
Explica, amb comentaris dins el codi, les funcions amb les que manipules el DOM en
aquest exercici.
*/
document.addEventListener("DOMContentLoaded", function (event) {

    let numParrafos = document.body.getElementsByTagName('p').length;             // Cuenta el número de etiquetas <p>
    let totalEnlaces = document.body.getElementsByTagName('a').length;            // Cuenta el número de etiquetas <a>
    let direccionPenultimoEnlace = document.getElementsByTagName('a')[totalEnlaces - 2].href;    // Coge el valor de la penúltima posición del arra de las etiquetas <a>


    // Función que devuelve el número de enlaces que apuntan a "http://prueba/"
    function enlacesQueApuntanPrueba() {
        let contador = 0;
        let enlaces = document.querySelectorAll('a');  //Número totales de etiquetas <a>.

        for (let i in enlaces) {
            if (enlaces[i].href == "http://prueba/") {
                contador++;
            }
        }
        return contador;
    }

    // Cuenta el número de enlaces que hay en cada párrafo y devuelve un array con esta información.
    function numEnlacesParrafo() {
        let arrayNumEnlaces = [];

        for (let i = 0; i < numParrafos; i++) {
            let numEnlaces = document.body.getElementsByTagName('p')[i].querySelectorAll('a').length   // Número de énlaces por párrafo
            arrayNumEnlaces.push(numEnlaces);
        }
        return arrayNumEnlaces;
    }

    // Muestra los datos en el html
    function pintarDatos(numParrafos) {

        document.getElementById('info').innerHTML = 'Número de enlaces de la página: <b>' + totalEnlaces + '</b><br>'
            + 'Número de párrafos: <b>' + numParrafos + '</b><br>'
            + 'El penúltimo enlace apunta a: <b>' + direccionPenultimoEnlace + '</b><br>'
            + 'El último enlace apunta a: <b>' + direccionPenultimoEnlace + '</b><br>'
            + '<b>' + enlacesQueApuntanPrueba() + '</b> enlaces apuntan a http://prueba/.' + '<br>';

        for (let i = 0; i < numEnlacesParrafo().length; i++) {
            document.getElementById('info').innerHTML += `Número de enlaces del párrafo ${(i + 1)}: <b>` + numEnlacesParrafo()[i]; + '</b>';
            document.getElementById('info').innerHTML += '<br>'
        }
    }
    pintarDatos(numParrafos);
});

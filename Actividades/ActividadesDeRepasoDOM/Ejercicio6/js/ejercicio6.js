/*
• Demanar a l’usuari el text del nou paràgraf i un número (del 1 al 10) per a la posició
d’aquest text. Ho demanaren amb dos prompts.
• Se mostrarà el nou paràgraf en negreta (sense eliminar cap dels anteriors) a la posició
indicada. Si s’indica 3, se deixarà sense canviar el primer i el segon paràgrafs inicials,
el nou se col·locarà com a tercer i el que abans era el tercer, ara serà el quart i així
successivament.
• Si el número no està dins el rang (o no és un número), s’avisa de l’error i se torna a
demanar.
• Si l’usuari cancel·la, l’aplicació no fa res.
*/
document.addEventListener("DOMContentLoaded", function (event) {

    let nuevoParrafo = prompt('Escribe un nuevo párrafo: ');
    let posicionParrafo = prompt('Posición del nuevo párrafo: ');

    while (posicionParrafo < 0 || posicionParrafo > 10 || !Number(posicionParrafo)) {
        posicionParrafo = prompt('Esa posición no es váida, vuelve a intertarlo: ');
    }

    let lista = document.getElementsByTagName('ol');
    let listaParrafos = document.getElementsByTagName('li');
    let nuevoLi = document.createElement('li');
    nuevoLi.textContent = nuevoParrafo;

    lista[0].insertBefore(nuevoLi, listaParrafos[posicionParrafo - 1]);

});





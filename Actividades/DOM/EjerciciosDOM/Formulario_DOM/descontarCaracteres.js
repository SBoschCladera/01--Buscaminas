function insertarNumeroCaracteres(parrafoCaracteres, id) {

    let areaTexto = document.getElementById(id);
    parrafoCaracteres = areaTexto.value;
    let totalCaracteres = parrafoCaracteres.length;

    crearParrafo('salida', 'areaFormulario');

    document.getElementById("salida").innerHTML = "Puedes escribir " + (areaTexto.maxLength - totalCaracteres) + ' carácteres.';
}


// Crea un párrafo con atributo id
function crearParrafo(idNuevoParrafo, id) {
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.setAttribute('id', idNuevoParrafo)
    document.getElementById(id).appendChild(nuevoParrafo);
}

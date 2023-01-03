// Habilita o deshabilita un select según cliclemos
function habilitarSelect(id) {

    let seleccion = document.getElementById(id);

    if (seleccion.disabled) {
        seleccion.disabled = false;
    } else {
        seleccion.disabled = true;
    }
}

// Devuelve el nodo seleccionado.
function retornaValor(id) {

    let valor = document.getElementById(id);

    return valor;
}

// Valida el foemulario y pinta el pantalla los datos recogidos.
function validarFormulario(id) {

    let valorInput = retornaValor('nombre').value;
    let valorTextArea = document.getElementsByTagName('textarea')[0].value;
    let opcionSeleccionadaBici = valorSelect('marcaBici', 'bicicleta');
    let opcionSeleccionadaCoche = valorSelect('marcaCoche', 'coche');

    document.body.innerHTML += '<br></br>Resultado de la validación: ' + valorInput + " " + valorTextArea + " " + radioSeleccionado('hombre') + " " + radioSeleccionado('mujer') +
        " " + opcionSeleccionadaBici + " " + opcionSeleccionadaCoche + '.';
}

// Devuelve el valor de un radio que ha sido seleccionado.
function radioSeleccionado(id) {
    let valor = ""
    if (retornaValor(id).checked == true) {
        valor = retornaValor(id).value;
    }
    return valor;
}

//Recoge los valores seleccionados de un select (múltiple o simple).
function valorSelect(id, tipoTransporte) {

    let arrayOpcionesSeleccionadas = [];
    let select = document.querySelector('#' + id);
    let opcionesDelSelect = Array.from(select.options);

    if (!select.disabled) {
        arrayOpcionesSeleccionadas.push(tipoTransporte)
        for (let i = 0; i < opcionesDelSelect.length; i++) {
            if (opcionesDelSelect[i].selected) {
                arrayOpcionesSeleccionadas.push(opcionesDelSelect[i].text + ',');
            }
        }
        let palabra = arrayOpcionesSeleccionadas[arrayOpcionesSeleccionadas.length - 1];                         // Seleccionamos la última posición del Array
        arrayOpcionesSeleccionadas[arrayOpcionesSeleccionadas.length - 1] = palabra.slice(0, -1);                // y quitamos el último carácter (',')
    }
    return arrayOpcionesSeleccionadas.join(' ');
}

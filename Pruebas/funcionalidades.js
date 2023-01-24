// EJEMPLO DE RELLENO DE UN ARRAY BIDIMENSIONAL
var valor = 6;
var array1 = new Array(2)
array1[0] = new Array();
array1[1] = new Array();

for (let i = 0; i < 10; i++) {
    let resultado = valor * (i + 1)
    let cuestion = valor + ' X ' + (i + 1) + ' = ';
    array1[0][i] = cuestion;
    array1[1][i] = resultado;

}

for (let i of [array1[0], array1[1]]) {
    console.log(i);
}



// EJEMPLO DE RELLENO DE UN ARRAY BIDIMENSIONAL CON UNA FUNCIÓN


function rellenarArray(valor2) {
    let arrayRellenado = new Array(2)
    arrayRellenado[0] = new Array();
    arrayRellenado[1] = new Array();

    for (let i = 0; i < 10; i++) {
        let resultado = valor2 * (i + 1)
        let cuestion = valor2 + ' X ' + (i + 1) + ' = ';
        arrayRellenado[0][i] = cuestion;
        arrayRellenado[1][i] = resultado;
    }
    return arrayRellenado;
}

for (let i of rellenarArray(5)) {
    console.log(i);
}
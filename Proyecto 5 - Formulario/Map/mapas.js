const registroPacientes = new Map([
    [`AAA024`, `Fernández M. (321790059) -> C/Recoletos, 50`],
    [`BCD827`, `Ruíz P. (100973253) -> C/Esquerdo izquierdo, 103`],
    [`YUN835`, `Benítez E. (154811767) -> Av.Argentina, 5`]
]);


let cont = 1;

// Muestra los datos en con un MAP().
const pacientes = new Map();
for (let [clave, valor] of registroPacientes) {
    numeroRegistro = clave;
    nombreCompleto = valor.split('(')[0];
    numeroSS = valor.split('(')[1].substring(0, 9);
    direccion = valor.split('>')[1].substring(1);

    const datosPersonales = new Map();
    datosPersonales.set('numeroRegistro: ', numeroRegistro).set('nombreCompleto: ', nombreCompleto);
    datosPersonales.set('numeroSS: ', numeroSS).set('direccion: ', direccion);

    pacientes.set(`Paciente ${cont}`, datosPersonales);
    cont++;
}

console.log(pacientes)



// VERSIÓN DISTINTA, PARECIDO RESULTADO.
// const pacientes = new Map();
// registroPacientes.forEach(function (value, key) {
//     numeroRegistro = `${key}`;
//     nombreCompleto = `${value.split('(')[0]}`;
//     numeroSS = `${value.split('(')[1].substring(0, 9)}`;
//     direccion = `${value.split('>')[1].substring(1)}`;

//     pacientes.set(`Paciente ${cont}`, `\nnumeroRegistro: ${numeroRegistro}\nnombreCompleto: ${nombreCompleto}\nnumeroSS: ${numeroSS}\ndireccion: ${direccion}`)
//     cont++
// });

// console.log(pacientes)


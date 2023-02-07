const registroPacientes = new Map([
    [`AAA024`, `Fernández M. (321790059) -> C/Recoletos, 50`],
    [`BCD827`, `Ruíz P. (100973253) -> C/Esquerdo izquierdo, 103`],
    [`YUN835`, `Benítez E. (154811767) -> Av.Argentina, 5`]
]);

// console.log(registroPacientes)




let cont = 1;

const pacientes = new Map();
registroPacientes.forEach(function (value, key) {
    numeroRegistro = `${key}`;
    nombreCompleto = `${value.split('(')[0]}`;
    numeroSS = `${value.split('(')[1].substring(0, 9)}`;
    direccion = `${value.split('>')[1].substring(1)}`;

    pacientes.set(`Paciente ${cont}`, `\nnumeroRegistro: ${numeroRegistro}\nnombreCompleto: ${nombreCompleto}\nnumeroSS: ${numeroSS}\ndireccion: ${direccion}`)
    cont++
});

console.log(pacientes)







// let text = "";
// registroPacientes.forEach(function (value, key) {
//     text += key + "\n"
// })

// console.log(text)



// let pacientes = "";
// registroPacientes.forEach(function (value, key) {
//     pacientes += 'numeroRegistro: ' + key +
//         '\nnombreCompleto: ' + value.split('(')[0] +
//         '\nnumeroSS: ' + value.split('(')[1].substring(0, 9) +
//         '\ndireccion: ' + value.split('>')[1].substring(1) + "\n\n";
// })

// console.log(pacientes)


// registroPacientes.forEach((value, key, map) => {

//     console.log(`Paciente ${cont}`)
//     console.log(`${key}: ${value}`); // cucumber: 500 etc
//     cont++
// });


// for (let clave of registroPacientes.keys) {
//     console.log('numeroRegistro: ' + clave + '\nnombreCompleto: ')
// }

// for (let valor of registroPacientes.values()) {
//     console.log(valor)
// }








// const paciente1 = new Map({ ['numeroRegistro:', ''], })






// class Paciente {
//     constructor(numeroRegistro, nombreCompleto, numeroSS, direccion) {
//         this.numeroRegistro = numeroRegistro;
//         this.nombreCompleto = nombreCompleto;
//         this.numeroSS = numeroSS;
//         this.direccion = direccion;
//     }
// }


// const paciente1 = new Paciente();


// console.log(paciente1)
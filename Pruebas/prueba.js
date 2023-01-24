window.addEventListener('load', function () {
    var a, b;

    /* add two numbers */

    function addTwoNumbers(a, b) {
        return a + b;

    }
    //console.log(addTwoNumbers(2,127))
    //document.write(addTwoNumbers(2, 127))

    // Create a p element:
    const parrafo = document.createElement("p");

    // Create a text node:
    const textoParrafo = document.createTextNode(addTwoNumbers(2, 50));

    // Append text node to the p element:
    parrafo.appendChild(textoParrafo);

    // Append the p element to the body:
    document.body.appendChild(parrafo);



});


function expresion(palabra) {
    var expresionRegular1 = /animales/i;
    var expresionRegular2 = /halloween/i;
    var expresionRegular3 = /[1-2]/;

    //palabra = palabra.toUpperCase();

    if (expresionRegular1.test(palabra) || expresionRegular2.test(palabra) || expresionRegular3.test(palabra)) {
        return palabra + " = " + 'Siiiiiiiiiiiiiii';

    } else {
        return palabra + " = " + 'Nooooooooo';
    }
}



console.log(expresion(0))
console.log(expresion(1))
console.log(expresion(1))
console.log(expresion(3))
console.log(expresion('halloween'))
console.log(expresion('HALLOWEEN'))
console.log(expresion('ANIMALES'))
console.log(expresion('animales'))
console.log(expresion('Animales'))
console.log(expresion('Animal'))
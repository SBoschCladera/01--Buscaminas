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
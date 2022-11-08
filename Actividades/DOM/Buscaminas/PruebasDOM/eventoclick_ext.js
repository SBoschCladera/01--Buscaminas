/* Al cargar la página se gatilla el listener */
window.addEventListener("load", main);

function main() {
    /* Elemento DIV que cambia su texto*/
    var a = document.getElementById("a");

    /* Se agrega el evento */
    a.addEventListener("click", changeText);

    /* Función que se gatilla al hacer click en el elemento DIV */
    function changeText() {
        if (a.innerHTML == "Hola") {
            a.innerHTML = "Mundo";
        } else if (a.innerHTML == "Mundo") {
            a.innerHTML = "Hola"; 
        }
    }
}


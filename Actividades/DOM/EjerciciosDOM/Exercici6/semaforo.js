// Cambia el color del semáforo
function cambiarColor() {

    let rojo = document.getElementById('vermell');
    let ambar = document.getElementById('ambre');
    let verde = document.getElementById('verd');

    if (verde.className == "ences") {
        rojo.className = "ences";
        verde.className = "apagat";
    } else if (rojo.className == "ences") {
        ambar.className = "ences";
        rojo.className = "apagat";
    }
    else if (ambar.className == "ences") {
        verde.className = "ences";
        ambar.className = "apagat";
    }
}

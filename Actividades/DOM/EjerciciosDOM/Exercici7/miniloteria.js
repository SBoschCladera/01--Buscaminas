let maxNumAleatorio = 9;

function crearParrafo(numAleatorio, idDiv) {

    let div = document.getElementById(idDiv);
    let p = document.createElement('p');
    let textoP = document.createTextNode(numAleatorio);

    p.appendChild(textoP);
    div.appendChild(p);
}

function generarDecimo(id) {
    
    let totalDecimos = document.getElementById(id).querySelectorAll('.grid-item').length;

    for (let i = 0; i < totalDecimos; i++) {
        document.getElementById('numero' + (i + 1)).innerHTML = "";
        let numAleatorio = parseInt(Math.random() * maxNumAleatorio + 1);

        crearParrafo(numAleatorio, 'numero' + (i + 1));

        document.getElementById('realizarSorteo').disabled = false;
    }
}

function realizarSorteo() {

    document.getElementById('numeroSorteo').innerHTML = "";
    let numAleatorio = parseInt(Math.random() * maxNumAleatorio + 1);

    crearParrafo(numAleatorio, 'numeroSorteo');

    let totalDecimos = document.querySelectorAll('.grid-item').length;

    for (let i = 1; i <= totalDecimos; i++) {
        let decimo = document.getElementById('numero' + i);

        if (decimo.textContent == numAleatorio) {
            decimo.style.color = "green";
        } else {
            decimo.style.color = "red";
        }
    }

    document.getElementById('realizarSorteo').disabled = true;
}


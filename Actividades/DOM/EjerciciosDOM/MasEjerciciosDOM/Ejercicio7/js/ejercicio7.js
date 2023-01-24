/*• 
Genera 20 paràgrafs tipus p. Utilitza alguna utilitat de l’editor per a fer-ho
automàticament.   (p*20>lorem20)
• Aconsegueix amb JS que els paràgrafs apareguin a la pàgina en ordre invers al que
apareixen normalment.
*/

function cambioOrdenParrafos() {
    let arrayParrafos = document.querySelectorAll('p');

    document.body.innerHTML = "";

    for (let i = arrayParrafos.length - 1; i >= 0; i--) {
        document.body.innerHTML += '<p>' + arrayParrafos[i].textContent + '</p>';
    }
}



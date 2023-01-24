
class Amo {
    constructor(nombre) {
        this.nombre = nombre;
        this.animal = new Animal('Lucas', 'caballo');
        this.patas = new PatasAnimal('4', 'largas');
        this.datosPedidos = new Datos("", "")



    }
    


    animalAmo() {

        return this.nombre + ' tiene un ' + this.datosPedidos.especie + ' que se llama ' + this.datosPedidos + ' y tiene ' + this.patas.numPatas + ' patas bastante ' + this.patas.tamanyoPatas;
    }
}

class Datos {
    constructor(nombre, especie) {
        this.nombre = prompt('pedir nombrecillo: ');
        this.especie = prompt('pedir especie: ');


    }


}

class Animal {
    constructor(nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;


    }



    canta() {
        return `${this.nombre} puede cantar`;
    }

    baila() {
        return `${this.nombre} puede bailar`; F
    }
}




class PatasAnimal {
    constructor(numPatas, tamanyoPatas) {
        this.numPatas = numPatas;
        this.tamanyoPatas = tamanyoPatas
    }
}
/*

let bongo = new Animal("Bongo", "Peludo");
document.write(bongo.canta());
*/
let amo1 = new Amo('Paco')

document.write('<br>' + amo1.animalAmo());
document.write('<br>' + amo1.patas.numPatas);

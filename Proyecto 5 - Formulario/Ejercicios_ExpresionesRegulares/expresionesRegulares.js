/*1. Expressió regular per comprovar número de telèfon nacional (sense el prefix del país, 
    exemple: 971123456).*/

let patron1 = /^[0-9]{9}$/;

let prueba1Patron1 = 'a';
let prueba2Patron1 = '971604212';
let prueba3Patron1 = '97a04212';

console.log('Expressió regular per comprovar número de telèfon nacional (sense el prefix del país, exemple: 971123456).');
console.log(prueba1Patron1 + ' --> ' + patron1.test(prueba1Patron1));
console.log(prueba2Patron1 + ' --> ' + patron1.test(prueba2Patron1));
console.log(prueba3Patron1 + ' --> ' + patron1.test(prueba3Patron1));
console.log('------------------------------------------------------------');

/*2. Expressió regular per comprovar número de telèfon de nou xifres amb el prefix del país
    de tres xifres. Exemples: (+34)971123456 o (+407)475123456*/

let patron2 = /^\(\+[0-9]{2,3}\)[0-9]{9}$/;

let prueba1Patron2 = 'afgf';
let prueba2Patron2 = '(+34)9713456';
let prueba3Patron2 = '(+34)971123456';
let prueba4Patron2 = '(+407)475123456';


console.log('Expressió regular per comprovar número de telèfon de nou xifres amb el prefix del país');
console.log('de tres xifres. Exemples: (+34)971123456 o (+407)475123456');
console.log(prueba1Patron2 + ' --> ' + patron2.test(prueba1Patron2));
console.log(prueba2Patron2 + ' --> ' + patron2.test(prueba2Patron2));
console.log(prueba3Patron2 + ' --> ' + patron2.test(prueba3Patron2));
console.log(prueba4Patron2 + ' --> ' + patron2.test(prueba4Patron2));
console.log('------------------------------------------------------------');

/*3. Expressió regular per comprovar una data amb el format DD/MM/AAAA (exemple:
    09/01/2006). Cal validar:
    • els dies només agafen valors de 01 a 31
    • el mesos només agafen valors de 01 a 12
    • l’any serà de 4 dígits*/

let dia = /^([0][1-9]|[1,2][0-9]|[3][0-2])$/;
let mes = /^([0][1-9]|[1][0-2])$/;
let anyo = /^[0-9]{4}$/;

// console.log(dia.test('01'));
// console.log(mes.test('01'));
// console.log(anyo.test('0001'));

let patron3 = /^([0][1-9]|[1,2][0-9]|[3][0-2])\/([0][1-9]|[1][0-2])\/[0-9]{4}$/;

let prueba1Patron3 = '09/01/2005';
let prueba2Patron3 = '9/01/2006';
let prueba3Patron3 = '30/09/2014';

console.log('Expressió regular per comprovar una data amb el format DD/MM/AAAA (exemple: 09/01/2006)');
console.log(prueba1Patron3 + ' --> ' + patron3.test(prueba1Patron3));
console.log(prueba2Patron3 + ' --> ' + patron3.test(prueba2Patron3));
console.log(prueba3Patron3 + ' --> ' + patron3.test(prueba3Patron3));
console.log('------------------------------------------------------------');



/*4. Expressió regular per comprovar un codi postal (exemple: 07001).*/

let patron4 = /^[0-9]{5}$/;

let prueba1Patron4 = '7005';
let prueba2Patron4 = '07005';
let prueba3Patron4 = '98501';

console.log('Expressió regular per comprovar un codi postal (exemple: 07001).');
console.log(prueba1Patron4 + ' --> ' + patron4.test(prueba1Patron4));
console.log(prueba2Patron4 + ' --> ' + patron4.test(prueba2Patron4));
console.log(prueba3Patron4 + ' --> ' + patron4.test(prueba3Patron4));
console.log('------------------------------------------------------------');


// 5. Expressió regular per comprovar correu-e (exemple: arossello @iessonferrer.net).

let patron5 = /^[a-zA-Z0-9]{1,50}@[a-z]{1,30}\.(net|com|es)$/;

let prueba1Patron5 = 'asdf2@';
let prueba2Patron5 = 'aaaaa@locodelapradera1.es';
let prueba3Patron5 = 'arossello@iessonferrer.net';
let prueba4Patron5 = 'arossello@iessonferrer.es';

console.log('Expressió regular per comprovar correu-e (exemple: arossello @iessonferrer.net).');
console.log(prueba1Patron5 + ' --> ' + patron5.test(prueba1Patron5));
console.log(prueba2Patron5 + ' --> ' + patron5.test(prueba2Patron5));
console.log(prueba3Patron5 + ' --> ' + patron5.test(prueba3Patron5));
console.log(prueba4Patron5 + ' --> ' + patron5.test(prueba4Patron5));
console.log('------------------------------------------------------------');


// 6. Expressió regular per comprovar un nombre enter (exemples: 123, +123 o -123).

let patron6 = /^[\+\-]?[0-9]+$/;

let prueba1Patron6 = '123';
let prueba2Patron6 = '-123';
let prueba3Patron6 = '123,4';
let prueba4Patron6 = '+123';

console.log('Expressió regular per comprovar un nombre enter (exemples: 123, +123 o -123).');
console.log(prueba1Patron6 + ' --> ' + patron6.test(prueba1Patron6));
console.log(prueba2Patron6 + ' --> ' + patron6.test(prueba2Patron6));
console.log(prueba3Patron6 + ' --> ' + patron6.test(prueba3Patron6));
console.log(prueba4Patron6 + ' --> ' + patron6.test(prueba4Patron6));
console.log('------------------------------------------------------------');



// 7. Expressió regular per comprovar un nombre real (exemples: -123.35, 7,4 o 8).

let patron7 = /^[\-]?[0-9]+([\.\,][0-9]+)?$/;

let prueba1Patron7 = '-123.35';
let prueba2Patron7 = '-7,4';
let prueba3Patron7 = '8';
let prueba4Patron7 = '+123';
let prueba5Patron7 = '0';

console.log('Expressió regular per comprovar un nombre real (exemples: -123.35, 7,4 o 8).');
console.log(prueba1Patron7 + ' --> ' + patron7.test(prueba1Patron7));
console.log(prueba2Patron7 + ' --> ' + patron7.test(prueba2Patron7));
console.log(prueba3Patron7 + ' --> ' + patron7.test(prueba3Patron7));
console.log(prueba4Patron7 + ' --> ' + patron7.test(prueba4Patron7));
console.log(prueba5Patron7 + ' --> ' + patron7.test(prueba5Patron7));
console.log('------------------------------------------------------------');


// 9. Expressió regular per comprovar si un string té lletres minúscules.

let patron9 = /[a-záéíóúàèìòùç]+/;

let prueba1Patron9 = 'pacO';
let prueba2Patron9 = '12345';
let prueba3Patron9 = 'paco';
let prueba4Patron9 = 'PACO';
let prueba5Patron9 = 'Pa78CO';

console.log('Expressió regular per comprovar si un string té lletres minúscules.');
console.log(prueba1Patron9 + ' --> ' + patron9.test(prueba1Patron9));
console.log(prueba2Patron9 + ' --> ' + patron9.test(prueba2Patron9));
console.log(prueba3Patron9 + ' --> ' + patron9.test(prueba3Patron9));
console.log(prueba4Patron9 + ' --> ' + patron9.test(prueba4Patron9));
console.log(prueba5Patron9 + ' --> ' + patron9.test(prueba5Patron9));
console.log('------------------------------------------------------------');


// 10. Expressió regular per comprovar si un string té lletres majúscules.

let patron10 = /[A-ZÁÉÍÓÚÀÈÌÒÙÇ]+/;

let prueba1Patron10 = 'pacÁ';
let prueba2Patron10 = '12345';
let prueba3Patron10 = 'paco';
let prueba4Patron10 = 'PACO';
let prueba5Patron10 = 'Pa78CO';

console.log('Expressió regular per comprovar si un string té lletres majúscules.');
console.log(prueba1Patron10 + ' --> ' + patron10.test(prueba1Patron10));
console.log(prueba2Patron10 + ' --> ' + patron10.test(prueba2Patron10));
console.log(prueba3Patron10 + ' --> ' + patron10.test(prueba3Patron10));
console.log(prueba4Patron10 + ' --> ' + patron10.test(prueba4Patron10));
console.log(prueba5Patron10 + ' --> ' + patron10.test(prueba5Patron10));
console.log('------------------------------------------------------------');




// 11. Expressió regular per validar una hora. Cal validar:
// • hores de 00 a 23
// • minuts i segons de 00 a 59

let patron11 = /^([0,1][0-9]|2[0-3])\:[0-5][0-9]\:[0-5][0-9]$/;

let prueba1Patron11 = '24:01:00';
let prueba2Patron11 = '22:01:61';
let prueba3Patron11 = '00:61:15';
let prueba4Patron11 = '00:15:1';
let prueba5Patron11 = '15:15:15';

console.log('Expressió regular per validar una hora. Cal validar:');
console.log('• hores de 00 a 23');
console.log('• minuts i segons de 00 a 59');
console.log(prueba1Patron11 + ' --> ' + patron11.test(prueba1Patron11));
console.log(prueba2Patron11 + ' --> ' + patron11.test(prueba2Patron11));
console.log(prueba3Patron11 + ' --> ' + patron11.test(prueba3Patron11));
console.log(prueba4Patron11 + ' --> ' + patron11.test(prueba4Patron11));
console.log(prueba5Patron11 + ' --> ' + patron11.test(prueba5Patron11));
console.log('------------------------------------------------------------');


// 12. Expressió regular per validar un número de targeta de crèdit. Suposant que al número
// introduït se li ha eliminat qualsevol caràcter (espais en blanc, guions, ...) que no sia un dígit
// construir una expressió regular que validi els següents tipus:
// • Visa: 13 o 16 dígits, començant amb 4.
// • MasterCard: 16 dígits, començant amb els números de 51 a 55.
// • Discover: 16 dígits, començant amb 6011 o 15 dígits començant amb 5.
// • American Express: 15 dígits, començant amb 34 o 37.
// • Diners Club: 14 dígits, començant amb els números de 300 a 305, 36 o 38.
// • JCB: 15 dígits, començant amb 2131 o 1800, o 16 dígits començant amb 35

let patronVisa = /^([4][0-9]{12}|[4][0-9]{15})$/;
let patronMastercard = /^(51|55)[0-9]{14}$/;
let patronDiscover = /^(6011[0-9]{12}|5[0-9]{14})$/;
let patronAmericanExpress = /^(34|37)[0-9]{13}$/;
let patronDinersClub = /^((300|305)[0-9]{11}|(36|38)[0-9]{12})$/;
let patronJCB = /^((2131|1800)[0-9]{11}|35[0-9]{14})$/;


let visa1 = '4123589745123';    // true
let visa2 = '41258468';         //false
let visa3 = '4123458795412589';  // true
let visa4 = '5123698741254';    // false

console.log('Visa: ' + visa1 + ' --> ' + patronVisa.test(visa1));
console.log('Visa: ' + visa2 + ' --> ' + patronVisa.test(visa2));
console.log('Visa: ' + visa3 + ' --> ' + patronVisa.test(visa3));
console.log('Visa: ' + visa4 + ' --> ' + patronVisa.test(visa4));
console.log('**********************');

let masterCard1 = '5125789456125874';     // true
let masterCard2 = '5523698745841256';     // true
let masterCard3 = '552155445';            // false
let masterCard4 = '6123578952365415';     // false

console.log('Mastercard: ' + masterCard1 + ' --> ' + patronMastercard.test(masterCard1));
console.log('Mastercard: ' + masterCard2 + ' --> ' + patronMastercard.test(masterCard2));
console.log('Mastercard: ' + masterCard3 + ' --> ' + patronMastercard.test(masterCard3));
console.log('Mastercard: ' + masterCard4 + ' --> ' + patronMastercard.test(masterCard4));
console.log('**********************');

let discover1 = '6011598741569841';  // true
let discover2 = '60112568945';       // false
let discover3 = '553687891456748';  // true
let discover4 = '5523564789452145';  // false

console.log('Discover: ' + discover1 + ' --> ' + patronDiscover.test(discover1));
console.log('Discover: ' + discover2 + ' --> ' + patronDiscover.test(discover2));
console.log('Discover: ' + discover3 + ' --> ' + patronDiscover.test(discover3));
console.log('Discover: ' + discover4 + ' --> ' + patronDiscover.test(discover4));
console.log('**********************');

let americanExpress1 = '345698456123458';         // true
let americanExpress2 = '375845963514784';         // true
let americanExpress3 = '313145897894561';         // false
let americanExpress4 = '3456987459';              // false

console.log('American Express: ' + americanExpress1 + ' --> ' + patronAmericanExpress.test(americanExpress1));
console.log('American Express: ' + americanExpress2 + ' --> ' + patronAmericanExpress.test(americanExpress2));
console.log('American Express: ' + americanExpress3 + ' --> ' + patronAmericanExpress.test(americanExpress3));
console.log('American Express: ' + americanExpress4 + ' --> ' + patronAmericanExpress.test(americanExpress4));
console.log('**********************');

let DinersClub1 = '30085478963254';         // true
let DinersClub2 = '30512457895412';         // true
let DinersClub3 = '36852359845612';         // true
let DinersClub4 = '38956324874561';         // true
let DinersClub5 = '28956324874561';         // false
let DinersClub6 = '3054561';                // false

console.log('Diners Club: ' + DinersClub1 + ' --> ' + patronDinersClub.test(DinersClub1));
console.log('Diners Club: ' + DinersClub2 + ' --> ' + patronDinersClub.test(DinersClub2));
console.log('Diners Club: ' + DinersClub3 + ' --> ' + patronDinersClub.test(DinersClub3));
console.log('Diners Club: ' + DinersClub4 + ' --> ' + patronDinersClub.test(DinersClub4));
console.log('Diners Club: ' + DinersClub5 + ' --> ' + patronDinersClub.test(DinersClub5));
console.log('Diners Club: ' + DinersClub6 + ' --> ' + patronDinersClub.test(DinersClub6));
console.log('**********************');

let jcb1 = '213123589456841';         // true
let jcb2 = '180058914567891';         // true
let jcb3 = '3558941589149124';        // true
let jcb4 = '21315666666';             // false
let jcb5 = '180112457894156';         // false
let jcb6 = '35128491564';             // false

console.log('JCB: ' + jcb1 + ' --> ' + patronJCB.test(jcb1));
console.log('JCB: ' + jcb2 + ' --> ' + patronJCB.test(jcb2));
console.log('JCB: ' + jcb3 + ' --> ' + patronJCB.test(jcb3));
console.log('JCB: ' + jcb4 + ' --> ' + patronJCB.test(jcb4));
console.log('JCB: ' + jcb5 + ' --> ' + patronJCB.test(jcb5));
console.log('JCB: ' + jcb6 + ' --> ' + patronJCB.test(jcb6));

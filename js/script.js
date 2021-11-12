/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole 
percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due 
decimali, per indicare centesimi sul prezzo). */

/* Informazioni user */

//Chilometri da percorrere
const userKilometres = prompt('Quanti chilometri vuole percorrere?');
console.log(userKilometres);

//Età passeggero
const userAge = prompt('Quanti anni ha?');
console.log(userAge);

/* Calcolo biglietto */

//Costo per chilometro
const costKilometres = userKilometres * 0.21
console.log(costKilometres);

//Sconto per età
let costTicket;

if ( userAge < 18 ) {
    costTicket = costKilometres * 20 / 100 + '\u20AC'
} else if ( userAge > 65 ) {
    costTicket = costKilometres * 40 / 100 + '\u20AC'
} else {
    costTicket = costKilometres + '\u20AC'
}

/* Stampa prezzo */
console.log(costTicket);
document.getElementById('user-ticket').innerHTML = 'Il tuo biglietto viene: ' + costTicket
/* 
DESCRIZIONE:
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
-il prezzo del biglietto è definito in base ai km (0.21 € al km)
-va applicato uno sconto del 20% per i minorenni
-va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va scritto in forma umana (con massimo due decimali, 
per indicare centesimi sul prezzo).
*/

// chiedere all'utente numero km che vuole percorrere
const km_da_percorrere =  Number(prompt("Quanti km devi percorrere?"))
// chiedere all'utente l'età del passeggero
const eta_passeggero =  Number(prompt("Quanti anni hai?"))

//calcolare prezzo totale del viaggio 0.21€ al km
let price_ticket = (km_da_percorrere * 0.21);

//sconto 20% se passeggero < 18 anni
const under_18_discount = (price_ticket / 100 * 20)

// prezzo scontato under 18
let price_under_18_ticket = price_ticket - under_18_discount;

//sconto 40% se passeggero > 65
const over_65_discount = (price_ticket / 100 * 40)

// prezzo scontato over 65
let price_over_65_ticket = price_ticket - over_65_discount;

//prezzo biglietto passeggero

if (eta_passeggero < 18) {
    price_under_18_ticket = price_ticket - under_18_discount;
  
} else if (eta_passeggero > 65) {
    price_over_65_ticket = price_ticket - over_65_discount;
    
} else {
    price_ticket = (km_da_percorrere * 0.21);
    
}

//comunichiamo prezzo biglietto passeggero

if (eta_passeggero < 18) {
    console.log("Il tuo biglietto con sconto under 18 costa € " + price_under_18_ticket.toFixed(2));
  
} else if (eta_passeggero > 65) {
    console.log("Il tuo biglietto con sconto over 65 costa € " + price_over_65_ticket.toFixed(2))
    
} else {
    console.log("il tuo biglietto costa € " + price_ticket.toFixed(2))  
} 

//stampa a schermo

document.getElementById("price-ticket").innerHTML = price_under_18_ticket;
document.getElementById("price-ticket").innerHTML = price_over_65_ticket;
document.getElementById("price-ticket").innerHTML = price_ticket;



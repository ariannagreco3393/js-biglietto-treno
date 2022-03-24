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
const età_passeggero =  Number(prompt("Quanti anni hai?"))

//calcolare prezzo totale del viaggio 0.21€ al km
const price_ticket = (km_da_percorrere * 0.21);

//sconto 20% se passeggero < 18 anni
const under_18_discount = (price_ticket / 100 * 20)

// prezzo scontato under 18
const price_under_18_ticket = price_ticket - under_18_discount;

//sconto 40% se passeggero > 65
const over_65_discount = (price_ticket / 100 * 40)

// prezzo scontato over 65
const price_over_65_ticket = price_ticket - over_65_discount;

//prezzo biglietto passeggero

if (età_passeggero < 18) {
    const price_under_18_ticket = price_ticket - under_18_discount;
  
} else if (età_passeggero > 65) {
    const price_over_65_ticket = price_ticket - over_65_discount;
    
} else {
    const price_ticket = (km_da_percorrere * 0.21);
    
} 

if (età_passeggero < 18) {
    console.log("Il tuo biglietto con sconto under 18 costa € " + price_under_18_ticket);
  
} else if (età_passeggero > 65) {
    console.log("Il tuo biglietto con sconto over 65 costa € " + price_over_65_ticket)
    
} else {
    console.log("il tuo biglietto costa € " + price_ticket)  
} 








/* 
- evento nel caso venga cliccato bottone geerazione biglietto
- salvo testo input nome cognome
- salvo valore input km da percorrere
- salvo valore input eta 
- calcolo prezzo biglietto pieno seza sconti
? SE l èeta dell utente è < 18 anni 
   - applica sconto 20%
  ALTRIMENTI SE hai un eta maggiore di 65 
  - applica sconto 40% 
  ALTRIMENTI
  - paga a prezzo pieno
*/
const priceForKm = 0.21;

let userNameEl = document.getElementById("userName");

let userSurnameEl = document.getElementById("userSurname");

let userKmToDoEl = document.getElementById("userKmToDo");

let userAgeEl = document.getElementById("userAge");

let btnEl = document.getElementById("btn");

let ticketPrice = userKmToDoEl * priceForKm;

let ticketPriceU18 = ticketPrice - ticketPrice / 100 * 20;

let ticktPriceO65 = ticketPrice - ticketPrice / 100 * 40;



btn.addEventListener("click", function() {

    if(userAgeEl < 18) {
       
        console.log(ticketPriceU18);
       
    } else if(userAgeEl >= 65) {
        console.log(ticktPriceO65)
    }


})



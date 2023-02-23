

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


btnEl.addEventListener("click", function() {

    let ticketPrice = userKmToDoEl.value * priceForKm;

    let ticketPriceU18 = ticketPrice - ticketPrice / 100 * 20;

    let ticktPriceO65 = ticketPrice - ticketPrice / 100 * 40;


    if(userAgeEl.value < 18) {
       
        document.writeln(ticketPriceU18.toFixed(2)+ "€");
       
    } else if(userAgeEl.value >= 65) {

        document.writeln(ticketPriceO65.toFixed(2)+ "€");

    } else{

        document.writeln(ticketPrice.toFixed(2)+ "€");
    }


});



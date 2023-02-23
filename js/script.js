

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

    let ticketPriceO65 = ticketPrice - ticketPrice / 100 * 40;

    let openMytiicketEl = document.querySelector(".myticket")

    openMytiicketEl.style.display = "block";


    if(userAgeEl.value < 18) {
       
        document.getElementById("namesurname").innerHTML = userNameEl.value + (" ") + userSurnameEl.value
        document.getElementById("tariffa").innerHTML = ("Sconto giovani")
        document.getElementById("scontoprevisto").innerHTML = ("20%")
        document.getElementById("costototale").innerHTML = ticketPriceU18.toFixed(2) + ("€")
       
    } else if(userAgeEl.value >= 65) {

        document.getElementById("namesurname").innerHTML = userNameEl.value + (" ") + userSurnameEl.value
        document.getElementById("tariffa").innerHTML = ("Sconto anziani")
        document.getElementById("scontoprevisto").innerHTML = ("40%")
        document.getElementById("costototale").innerHTML = ticketPriceO65.toFixed(2) + ("€")
       

    } else{

        document.getElementById("namesurname").innerHTML = userNameEl.value + (" ") + userSurnameEl.value
        document.getElementById("tariffa").innerHTML = ("Tariffa Standard")
        document.getElementById("scontoprevisto").innerHTML = ("Nessuno sconto previsto")
        document.getElementById("costototale").innerHTML = ticketPrice.toFixed(2) + ("€")

    }

});



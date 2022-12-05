console.log('JS OK');

//Calcolare prezzo del biglietto del treno in base a percorrenza e età del passeggero
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65


/* 1. Chiedere all'utente quanti km vuole percorrere
2. Chiedere all'utente quanti anni ha
3. Calcolare prezzo totale del viaggio (prezzo finale per utenti 19-64 anni)
4. Applicare sconti al totale del viaggio: 20% <18 anni, 40% >65 anni (con if/else)
5. Stampare in pagina */


// Chiedere all'utente quanti km vuole percorrere

const kmTrip = prompt('Quanti chilometri devi percorrere?');


// Chiedere all'utente quanti anni ha

const userAge = prompt('Quanti anni hai?');

console.log (kmTrip, userAge);


// Validazione dati inseriti

if (isNaN (kmTrip || userAge)) {
    isValid = false;
    alert("Inserisci un valore numerico");
}


// Calcolare prezzo totale del viaggio (prezzo finale per utenti 19-64 anni)


const priceTrip = (kmTrip * 0.21);


// Sconti applicati 

let discount;

if (userAge < 18) {
   discount = priceTrip - (priceTrip * 0.2);
  } else if (userAge >= 65) {
    discount = priceTrip - (priceTrip * 0.4);
  } else {
    discount = priceTrip;
  }


  document.getElementById('ticket').innerText = 'Il prezzo del tuo biglietto è: ' + discount + '€';


  






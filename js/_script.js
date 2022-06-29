/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// CHiedo all'utente di scegliere tra pari/dispari e un numero

const userChoice = prompt('pari o dispari?').trim();
const userNumber = parseInt(prompt('Inserisci un numero da 1 a 100'));
console.log(userNumber)

// Genera un numero casuale
 
function getRandomNumber (min = 1, max = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const pcuNumber = getRandomNumber();
console.log(pcuNumber);

// Stabilisco se la somma di due numeri generici da risultato pari o dispari
let isEven = false;
function isOdd(num1, num2) {
    
    if((num1 + num2) % 2 === 0) {
        isEven = true;
        alert('La somma è pari')
    } else {
        alert('La somma è dispari')
    }
}

const result = isOdd(userNumber, pcuNumber);
console.log(isEven)

if(userChoice == 'pari' && isEven == true || userChoice == 'dispari' && isEven == false)  {
    alert('hai vinto!')
} else {
    alert('hai perso')
}


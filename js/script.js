/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// Chiedo una parola all'utente
let wordGivenByUser = prompt('Inserisci una parola per verificare se è palindroma.') 


function isPalindrome(wordGivenByUser) {
    let reversedWord = '';

    // Scrivo la parola ricevuta al contrario
    for(let i = wordGivenByUser.length - 1; i >= 0; i--) {
        reversedWord += wordGivenByUser[i];
    }

    // Controllo se la parola ricevuta e la sua versione capovolta sono uguali
    if(reversedWord == wordGivenByUser) {
        alert('è palindroma');
    } else {
        alert('non è palindroma')
    }

    return
}

wordGivenByUser = isPalindrome(wordGivenByUser);

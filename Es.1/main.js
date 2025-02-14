/*
Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
*/

function parolaPalindroma(parola) {

    let parolaPulita = parola.toLowerCase();

    let parolaInvertita = parolaPulita.split("").reverse().join("");

    return parolaPulita === parolaInvertita;
}

let parolaUtente = prompt("Inserisci una parola");

if (parolaUtente) {

    if (parolaPalindroma(parolaUtente)) {
        alert("La parola " + parolaUtente + " è palindroma");

    } else {
        alert("La parola " + parolaUtente + " non è palindroma");
    }
}
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// Creare la variabile somma di tutti i numeri inseriti dall'utente
let numberSum = 0;

// Creare un ciclo for
for (let i=0; i<5; i++) {

    // Chiedere all'utente 5 numeri
    const userNumber= parseInt(prompt('Dammi un numero'));
    console.log(userNumber);

    // Sommare tutti i numeri inseriti dall'utente
    numberSum += userNumber;
    
}

// Stampare la somma totale dei numeri
alert(numberSum);
console.log(numberSum);
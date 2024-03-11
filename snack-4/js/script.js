// Calcola la somma e la media dei primi 10 numeri.

// Crea un array di 12 numeri
const numberList = [1,3,6,4,12,21,17,13,20,10,7,5];
console.log(numberList);

// Crea due variabili: somma e media
let sum = 0;
let average;

// Apri il ciclo
for (let i=0; i < 10; i++) {

    sum += numberList[i];

    average = sum/10; 
}
console.log(sum);
alert('La somma è di' + ' ' + sum);
console.log(average);
alert('La media è di' + ' ' + average);





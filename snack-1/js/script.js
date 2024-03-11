// Chiedere all'utente 5 numeri. 
// Inserire i numeri nell'array ma senza creare duplicati 
// (inserire il numero nell'array solo se non è già presente).

const numberList = [];

for (let i=0; i<5; i++) {

    // Chiedere all'utente 5 Numeri
    const userNumber = prompt('Dammi un numero');
    console.log(userNumber)

    // Inserire i 5 numeri nell'array se non sono presenti
    if (!numberList.includes(userNumber)) {
        numberList.push(userNumber);
    }
        
    // Stampare la lista di nome
    alert(numberList);
    console.log(numberList);

}

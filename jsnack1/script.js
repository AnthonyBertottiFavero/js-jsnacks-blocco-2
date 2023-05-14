/*
    creare un array vuoto
    usare un ciclo for per chiedere 6 numeri in 6 prompt 
    SE numero dispari 
        inserisci nell'array
    FINE SE
*/

const randomNumbers = [];

for (let i = 0; i < 6 ; i++ ) {
    const number = parseInt(prompt('Dammi un numero:'));
    

    if (number % 2 == 0) {
        console.log(number);
    } else {
        randomNumbers.push(number);
    }

    document.querySelector('.numeri').innerHTML = `I numeri dispari scelti sono: ${randomNumbers}`;
}
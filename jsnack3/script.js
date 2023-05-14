/*
    Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
*/

/*
    creare un array di numeri
    sommare solo quelli in posizione dispari
    stampare i numeri dispari
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
 
let sum = 0;

for (let i = 1; i < numbers.length; i = i + 2) {
    
    sum+= numbers[i];
}

document.querySelector('.somma').innerHTML = `La somma dei numeri inseriti è: ${sum}`
console.log(sum);
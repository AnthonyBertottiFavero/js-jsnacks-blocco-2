/*
    creare un array con nomi inventati
    creare un array con cognomi inventati
    creare un array vuoto
    creare un generatore random di numeri per i nomi
    creare un generatore random di numeri per i cognomi
*/

const randomNames = ['Luca', 'Marco', 'Luigi', 'Mario', 'Ernesto'];

const randomSurnames = ['Bertotti', 'Rossi', 'Deluca', 'Pallino', 'Vite'];

const randomInvented = [];

for (let i = 0; i < randomNames.length; i++) {
    const randomNumberNames = Math.floor(Math.random() * 5);
    
    const randomNumberSurnames = Math.floor(Math.random() * 5);

    randomInvented.push(randomNames[randomNumberNames] + ' ' + randomSurnames[randomNumberSurnames]);
   
    document.querySelector('.list').innerHTML = `La lista degli invitati è: ${randomInvented}`;

    console.log(randomNames[randomNumberNames] + ' ' + randomSurnames[randomNumberSurnames]); 
}
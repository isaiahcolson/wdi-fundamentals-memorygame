const cards = ['queen', 'queen', 'king', 'king'];
const cardsInPlay = [];

let cardOne = cards[0];
cardsInPlay.push(cardOne);

let cardTwo = cards[2];
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

if(cardsInPlay.length === 2) {
    if(cardOne === cardTwo) {
        alert('You found a match!');
    }
    else {
        alert('Sorry, try again.');
    }
} 
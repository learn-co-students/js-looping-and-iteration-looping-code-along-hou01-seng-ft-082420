// Code your solutions in this file
// const cards = ['Ada', "Brendan", "Ali"]

function writeCards(cards,day) {
    let card = [];
    for (let i = 0; i < cards.length; i++) {
    card.push(`Thank you, ${cards[i]}, for the wonderful ${day} gift!`);
    }

    return card;
}

writeCards(cards,day);

function countDown(number) {
let count = number;
while(count >= 0) {
    console.log(count--);
}

}
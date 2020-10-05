// Code your solutions in this file
const cards= ["Ada", "Brendan", "Ali"];

function writeCards(cards,event){
  let tyCards = []
for(let i=0;i<cards.length;i++){
tyCards.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`)
}
return tyCards;
}
writeCards(cards);


function countDown(num){
  let i = num;
while (i >= 0) {
  console.log(i--);
}
 
return num;
}


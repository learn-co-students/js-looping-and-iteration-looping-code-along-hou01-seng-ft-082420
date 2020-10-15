// Code your solutions in this file

function writeCards(array, name) {
    let cards = []
    for (let i = 0; i < array.length; i++) {
        cards.push(`Thank you, ${array[i]}, for the wonderful ${name} gift!`)
    }
    return cards
}

function countDown(number) {
while (number > 0) {
    console.log(number); //all the numbers except 0
    number -= 1; //decrements
  }
  console.log( number ); //includes the 0
}

countDown(3)
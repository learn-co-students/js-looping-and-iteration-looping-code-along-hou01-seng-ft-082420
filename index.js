function writeCards(array, message){
    let cards = []
    for (let i = 0; i < array.length; i++) {
        cards.push(`Thank you, ${array[i]}, for the wonderful ${message} gift!`)
    }
    return cards
}

function countDown(num){
    while(num > 0){
        console.log(num)
        num -= 1
    }
    console.log(num)
}
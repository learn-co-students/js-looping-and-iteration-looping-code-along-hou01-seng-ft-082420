function writeCards(names, event) {
    let cards = []
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return cards
}

function countDown(number) {
    let countdown = number
    while (countdown > -1) {
        console.log(countdown--);
    }
}
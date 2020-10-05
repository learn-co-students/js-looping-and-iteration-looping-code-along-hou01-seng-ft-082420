// Code your solutions in this file
function writeCards(names, event_name) {
    var cards = []
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event_name} gift!`)
    }
    return cards
}

function countDown(start) {
    while (start >= 0) {
        console.log(start)
        start--
    }
}
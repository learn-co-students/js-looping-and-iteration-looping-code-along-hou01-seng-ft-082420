// Code your solutions in this file
function writeCards(strings, event) {
    let result = [];
    for(let i = 0; i < strings.length; i++) {
        let happyMessage = `Thank you, ${strings[i]}, for the wonderful ${event} gift!`;
        result.push(happyMessage)
    }
    return result;
}

function countDown(number) {
    let i = number;

    while(i >= 0) {
        console.log(i--);
    }
}
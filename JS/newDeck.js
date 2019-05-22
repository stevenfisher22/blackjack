// CREATE CARD DECK //
var deck = []
var suit = ['H', 'C', 'S', 'D']
var values = [
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K'
]
var points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]

function createDeck(){
    $('#btn-playAgain').hide();
    for (var i = 0; i < suit.length; i++){
        for (var j = 0; j < values.length; j++){
            var cardImg = 'images/' + values[j] + suit[i] + '.jpg'
            var card = {
                suit: suit[i],
                values: values[j],
                points: points [j],
                cardImg: cardImg
            } 
            deck.push(card);
        } 
    }
    return deck
}

createDeck()
shuffleCards(deck)


// SHUFFLE //
function shuffleCards(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
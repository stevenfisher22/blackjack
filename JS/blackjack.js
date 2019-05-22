// This code "listens" for the user to click the button, 
// then executes the code inside the code block.  
// Note that the listener takes as arguments the event and anonymous function  


///////////////////////////// 
// DEAL, HIT, STAY CLICK FUNCTIONS
/////////////////////////////

// Deal Function
document.getElementById("btn-deal").addEventListener("click", deal)

// Hit Function
document.getElementById("btn-hit").addEventListener("click", hit)

// Stay Function
document.getElementById("btn-stay").addEventListener("click", stay)



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
shuffleArray(deck)


// Shuffle //
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

var dealerCards = []
var playerCards = []

var dealerHand = document.getElementById('dealer-hand')
var playerHand = document.getElementById('player-hand')

var dealerScore = document.getElementById('dealer-points')
var playerScore = document.getElementById('player-points')


// Keep track of points
var playerPoints = 0
var dealerPoints = 0

// DEAL //
// When 'Deal' button is clicked, deal 2 cards each to: 
// id="dealer-hand" and id="player-hand"
// To-Do:
// 1. Take away a card from the deck array
// 2. Save the dealt card in two arrays: dealerCards and playerCards
// 3. The dealerCards and playerCards arrays will be used later to calculate total points for the hand
// 4. Display the img of the card on the page

function deal(){
    var card1 = deck.pop();
    var card2 = deck.pop();
    var card3 = deck.pop();
    var card4 = deck.pop();
    
    var createImg1 = document.createElement('img')
    var createImg2 = document.createElement('img')
    var createImg3 = document.createElement('img')
    var createImg4 = document.createElement('img')

    createImg1.setAttribute('src', card1.cardImg)
    createImg2.setAttribute('src', card2.cardImg)
    createImg3.setAttribute('src', card3.cardImg)
    createImg4.setAttribute('src', card4.cardImg)

    playerHand.append(createImg1);
    dealerHand.append(createImg2);
    playerHand.append(createImg3);
    dealerHand.append(createImg4);

    playerPoints += card1.points;
    dealerPoints += card2.points;
    playerPoints += card3.points;
    dealerPoints += card4.points;

    playerScore.textContent = playerPoints;
    dealerScore.textContent = dealerPoints;

    $('#btn-deal').hide();
}


// HIT //
// When 'Hit' button is clicked, deal one card to:
// id="player-hand"

function hit(){
    var cardHit = deck.pop();
    var createImgHit = document.createElement('img');
    createImgHit.setAttribute('src', cardHit.cardImg);
    playerHand.append(createImgHit);
    playerPoints += cardHit.points;

    // dealACard();
    // if (playerPoints > 21) {
    //     $('#messages').text('Sorry, you busted!');
    //     gameOver();
    // }
}

// function dealACard() {
//     var cardHit = deck.pop();
//     var createImgHit = document.createElement('img');
//     createImgHit.setAttribute('src', cardHit.cardImg);
//     playerHand.append(createImgHit);
//     playerPoints += cardHit.points;
// }


// STAY //
// Player doesn't want any more cards
// Deal cards to dealer until he reaches 17 points or more

function stay(){
    var cardStay = deck.pop();
    var createImgStay = document.createElement('img')
    createImgStay.setAttribute('src', cardStay.cardImg)
    dealerHand.append(createImgStay)
    dealerPoints += cardStay.points;
}


// PLAY AGAIN //
$('#btn-playAgain').click(function() {
    $('#btn-deal').show();
    $('#btn-hit').show();
    $('#btn-stay').show();
    $('#btn-dealAgain').hide();
    $('#player-hand').html('');
    $('#dealer-hand').html('');
    $('#messages').text('');
    $('#player-points').text('');
    $('#dealer-points').text('');
    createDeck();
});


// GAME OVER //
function gameOver() {
    $('#btn-hit').hide();
    $('#btn-stay').hide();
    $('#btn-playAgain').show();
}
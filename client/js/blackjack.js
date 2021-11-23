var dealerHand = $(".dealerHand");
var dealerHandCards = [];
var playerHand = $(".playerHand");
var playerHandCards = [];

var playerCount = 0;

const BLACKJACK_VALUE = 21;

const cardsValues = {
    "AS" : 11, "2S": 2, "3S": 3, "4S": 4, "5S": 5, "6S": 6, "7S": 7, "8S": 8, "9S": 9, "10S": 10, "JS": 10, "QS": 10, "KS": 10,
    "AH" : 11, "2H": 2, "3H": 3, "4H": 4, "5H": 5, "6H": 6, "7H": 7, "8H": 8, "9H": 9, "10H": 10, "JH": 10, "QH": 10, "KH": 10,
    "AD" : 11, "2D": 2, "3D": 3, "4D": 4, "5D": 5, "6D": 6, "7D": 7, "8D": 8, "9D": 9, "10D": 10, "JD": 10, "QD": 10, "KD": 10,
    "AC" : 11, "2C": 2, "3C": 3, "4C": 4, "5C": 5, "6C": 6, "7C": 7, "8C": 8, "9C": 9, "10C": 10, "JC": 10, "QC": 10, "KC": 10
};

bjDealCard(dealerHand, dealerHandCards, count=1, isFaceDown=false)
// bjDealCard(dealerHand, dealerHandCards, count=1, isFaceDown=true)
bjCheckPlayerScore(dealerHand, dealerHandCards)

bjDealCard(playerHand, playerHandCards, count=2, isFaceDown=false)
bjCheckPlayerScore(playerHand, playerHandCards)

function bjDealCard(hand, handCardsArray, count=1, isFaceDown=false)
{
    for (let i=0; i < count; i++)
    {
        let nextCard = getNextCard();
        let cardContainer = $(cardTemplate).clone();
        let card = cardContainer.find(".card")[0];
        setCardTexture(card, nextCard, isFaceDown);
        hand.append(cardContainer);
        handCardsArray.push(nextCard);
    }
    
}

function bjGetHandScore(cardsArray)
{
    let sum = 0;
    cardsArray.forEach(function(elem){
        sum += cardsValues[elem];
    });
    return sum;
}

function bjCheckPlayerScore(hand, handCardsArray)
{
    let other = handCardsArray.filter(card => !card.includes("A"));
    let score = bjGetHandScore(other);

    let prefix = "";
 
    let aces = handCardsArray.filter(card => card.includes("A"));
    if (aces.length > 0)
    {
        let acesValues = Array(aces.length).fill(11);
        let acesSum = acesValues.reduce((a,b) => a+b);

        for (let i=0; i<acesValues.length; i++)
        {
            if (score + acesSum <= BLACKJACK_VALUE)
            {
                break;
            }
            acesValues[i] = 1;
            acesSum -= 10;
        }
        score += acesSum;

        if (acesValues.includes(11))
        {
            prefix = "S";
        }
    }
    
    hand.find(".score").text(prefix + score)
}

function bjHit()
{
    bjDealCard(playerHand, playerHandCards);
    bjCheckPlayerScore(playerHand, playerHandCards);
}

function bjStand()
{
    bjDealCard(dealerHand, dealerHandCards);
}
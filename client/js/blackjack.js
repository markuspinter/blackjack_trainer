var dealerHand = $(".dealerHand");
var dealerHandCards = [];
var playerHand = $(".playerHand");
var playerHandCards = [];

var playerCount = 0;

const BLACKJACK_VALUE = 21;
const HIT_ON_SOFT_17 = true;

const cardsValues = {
    "AS" : 11, "2S": 2, "3S": 3, "4S": 4, "5S": 5, "6S": 6, "7S": 7, "8S": 8, "9S": 9, "10S": 10, "JS": 10, "QS": 10, "KS": 10,
    "AH" : 11, "2H": 2, "3H": 3, "4H": 4, "5H": 5, "6H": 6, "7H": 7, "8H": 8, "9H": 9, "10H": 10, "JH": 10, "QH": 10, "KH": 10,
    "AD" : 11, "2D": 2, "3D": 3, "4D": 4, "5D": 5, "6D": 6, "7D": 7, "8D": 8, "9D": 9, "10D": 10, "JD": 10, "QD": 10, "KD": 10,
    "AC" : 11, "2C": 2, "3C": 3, "4C": 4, "5C": 5, "6C": 6, "7C": 7, "8C": 8, "9C": 9, "10C": 10, "JC": 10, "QC": 10, "KC": 10
};

generateDecks();
bjNewRound();

function bjNewRound()
{
    try
    {
        dealerHand.find(".cardContainer").remove();
        dealerHandCards = [];
        playerHand.find(".cardContainer").remove();
        playerHandCards = [];

        bjDealCard(dealerHand, dealerHandCards, count=1, isFaceDown=false);
        bjDealCard(dealerHand, dealerHandCards, count=1, isFaceDown=true);
        let score = bjCheckDealerScore(dealerHand, dealerHandCards);

        bjDealCard(playerHand, playerHandCards, count=2, isFaceDown=false);
        let [playerScore, playerIsSoftScore] = bjCheckPlayerScore(playerHand, playerHandCards);

        $("#newRound").attr("disabled", true);
        $(".gameAction").removeAttr("disabled");

        console.log(playerHandCards);
        console.log(playerHandCards.every(val => cardsValues[val] === cardsValues[playerHandCards[0]]));
        if (!playerHandCards.every(val => cardsValues[val] === cardsValues[playerHandCards[0]]))
        {
            $("#split").attr("disabled", true);
        }

        if (score == BLACKJACK_VALUE || playerScore == BLACKJACK_VALUE)
        {
            bjStand();
        }
    }
    catch (e) 
    {
        console.error(e);
        alertAndDispose("Shoe is empty, starting new round...");
        generateDecks();
        bjRoundFinished();
        
    }
}

function bjRoundFinished()
{
    $("#newRound").removeAttr("disabled");
    $(".gameAction").attr("disabled", true);
}

function bjDealCard(hand, handCardsArray, count=1, isFaceDown=false)
{
    for (let i=0; i < count; i++)
    {
        let nextCard = getNextCard();
        if (nextCard === null)
        {
            throw "Shoe is empty!";
        }
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

function bjCheckDealerScore(hand, handCardsArray)
{
    let score = bjGetHandScore(handCardsArray);

    hand.find(".score").text(cardsValues[handCardsArray[0]]);


    return score;
}

function bjCheckPlayerScore(hand, handCardsArray)
{
    let other = handCardsArray.filter(card => !card.includes("A"));
    let score = bjGetHandScore(other);

    let prefix = "";
    let isSoftScore = false;
 
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
            isSoftScore = true;
        }
    }
    
    if (score == 21 && handCardsArray.length == 2)
    {
        //blackjack
        hand.find(".score").text("J")
    }
    else
    {
        hand.find(".score").text(prefix + score)
    }

    return [score, isSoftScore];
}

function bjHit()
{
    try {
        bjDealCard(playerHand, playerHandCards);
        let [playerScore, playerIsSoftScore] = bjCheckPlayerScore(playerHand, playerHandCards);

        if (playerScore >= BLACKJACK_VALUE)
        {
            bjStand();
        }
    }
    catch (e) {
        console.error(e);
        alertAndDispose("Shoe is empty, starting new round...");
        generateDecks();
        bjRoundFinished();
        
    }
}

function bjStand()
{
    try {
        let facedDownCards = dealerHand.find("[faceddown='true']");
        setCardTexture(facedDownCards, facedDownCards.attr("type")); //only works for one card
        let [score, isSoftScore] = bjCheckPlayerScore(dealerHand, dealerHandCards);

        if (HIT_ON_SOFT_17)
        {
            while (score <= 17)
            {
                bjDealCard(dealerHand, dealerHandCards);
                [score, isSoftScore] = bjCheckPlayerScore(dealerHand, dealerHandCards);
            }
        }
        else
        {
            //stand on soft 17
            while (score <= 17)
            {
                if (score == 17 && isSoftScore)
                {
                    console.info("S17, standing...");
                    break;
                }
                bjDealCard(dealerHand, dealerHandCards);
                [score, isSoftScore] = bjCheckPlayerScore(dealerHand, dealerHandCards);
            }
        }

        let [playerScore, playerIsSoftScore] = bjCheckPlayerScore(playerHand, playerHandCards);
        if (score > BLACKJACK_VALUE && playerScore <= BLACKJACK_VALUE)
        {
            addChatMessage(playerHand.find(".score").text() + " against " + dealerHand.find(".score").text() + ": Dealer busts! Player wins!");
        }
        else if (playerScore > BLACKJACK_VALUE)
        {
            addChatMessage(playerHand.find(".score").text() + " against " + dealerHand.find(".score").text() + ": Player loses!");
        }
        else if (score > playerScore)
        {
            addChatMessage(playerHand.find(".score").text() + " against " + dealerHand.find(".score").text() + ": Player loses!");
        }
        else if (score == playerScore)
        {
            addChatMessage(playerHand.find(".score").text() + " against " + dealerHand.find(".score").text() + ": Push!");
        }
        else if (score < playerScore)
        {
            addChatMessage(playerHand.find(".score").text() + " against " + dealerHand.find(".score").text() + ": Player wins!");
        }
        
        bjRoundFinished();
    }
    catch (e) {
        console.error(e);
        alertAndDispose("Shoe is empty, starting new round...");
        generateDecks();
        bjRoundFinished();
        
    }
}

function bjDouble()
{
    alertAndDispose("test...");
}
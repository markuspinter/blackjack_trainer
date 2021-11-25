var dealerHand = $(".dealerHand");
var dealerHandCards = [];
var playerHand = null;
var playerHandCards = [];
var playerHandsCards = [playerHandCards];
var surrenderedPlayers = [];

const playerHandTemplate = '<div class="playerHand hand col" playerID="0"><span class="score" hidden>--</span></div>'

var playerCount = 0;
var currPlayerID = 0;

const BLACKJACK_VALUE = 21;

var HIT_ON_SOFT_17 = true;
var DOUBLE_AFTER_SPLIT = true;

const cardsValues = {
    "AS" : 11, "2S": 2, "3S": 3, "4S": 4, "5S": 5, "6S": 6, "7S": 7, "8S": 8, "9S": 9, "TS": 10, "JS": 10, "QS": 10, "KS": 10,
    "AH" : 11, "2H": 2, "3H": 3, "4H": 4, "5H": 5, "6H": 6, "7H": 7, "8H": 8, "9H": 9, "TH": 10, "JH": 10, "QH": 10, "KH": 10,
    "AD" : 11, "2D": 2, "3D": 3, "4D": 4, "5D": 5, "6D": 6, "7D": 7, "8D": 8, "9D": 9, "TD": 10, "JD": 10, "QD": 10, "KD": 10,
    "AC" : 11, "2C": 2, "3C": 3, "4C": 4, "5C": 5, "6C": 6, "7C": 7, "8C": 8, "9C": 9, "TC": 10, "JC": 10, "QC": 10, "KC": 10
};

generateDecks();
bjNewRound();

function bjIsPair(handCards)
{
    return handCards.every(card => card.charAt(0) === handCards[0].charAt(0))
}

function bjDisableSurrender()
{
    $("#surrender").attr("disabled", true);
}

function bjCreatePlayer(surrenderAllowed=true)
{
    playerCount++;
    let newPlayer = $(playerHandTemplate).clone()
    
    newPlayer.attr("playerID", playerCount-1);
    newPlayer.attr("surrenderAllowed", surrenderAllowed);
    if ($("#showHandTotalCbox")[0].checked)
    {
        newPlayer.find(".score").removeAttr("hidden");
    }
    if (playerCount > 1)
    {
        playerHand.css("border-style", "solid");
    }

    playerHandsCards.push([]);
    $("#playerHands").prepend(newPlayer);

    if (playerCount > 2)
    {
        $("#playerHands .playerHand").css("max-width", "30%");
    }
    else if (playerCount > 1)
    {
        $("#playerHands .playerHand").css("max-width", "50%");
    }
    else
    {
        $("#playerHands .playerHand").css("max-width", "70%");
    }

    return [newPlayer, playerCount-1];
}

function bjSwitchPlayer(playerID)
{
    currPlayerID = playerID;
    if (playerHand != null)
    {
        playerHand.css("border-style", "none");
    }
    
    playerHand = $("[playerID="+currPlayerID+"]"); 
    if (playerCount > 1)
    {
        playerHand.css("border-style", "solid");
    }
    
    playerHandCards = playerHandsCards[currPlayerID];
    
    
    let score = bjCheckDealerScore(dealerHand, dealerHandCards);
    let [playerScore, playerIsSoftScore] = bjCheckPlayerScore(playerHand, playerHandCards);

    $("#newRound").attr("disabled", true);
    $(".gameAction").removeAttr("disabled");

    if (playerHand.attr("surrenderAllowed") == "false")
    {
        $("#surrender").attr("disabled", true);
    }

    //check if split is allowed
    if (!bjIsPair(playerHandCards))
    {
        $("#split").attr("disabled", true);
    }

    if (score == BLACKJACK_VALUE || playerScore == BLACKJACK_VALUE)
    {
        bjPlayerFinished();
    }
}

function bjNewRound()
{
    try
    {
        playerCount = 0;
        playerHandsCards = [[]];
        playerHandCards = playerHandsCards[currPlayerID];
        $("#playerHands").empty();
        [playerHand, currPlayerID] = bjCreatePlayer();

        dealerHand.find(".cardContainer").remove();
        dealerHandCards = [];

        bjSwitchPlayer(0);

        bjDealCard(dealerHand, dealerHandCards, count=1, isFaceDown=false);
        
        bjDealCard(playerHand, playerHandCards, count=2, isFaceDown=false);

        bjDealCard(dealerHand, dealerHandCards, count=1, isFaceDown=true);

        bjSwitchPlayer(0);

    }
    catch (e) 
    {
        console.error(e);
        alertAndDispose(e);
        generateDecks();
        bjRoundFinished();
        bjNewRound();
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
    hand.find(".score").attr("score", cardsValues[handCardsArray[0]])
    hand.find(".score").attr("isSoftHand", false);


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
    hand.find(".score").attr("score", score);
    hand.find(".score").attr("isSoftHand", isSoftScore);

    return [score, isSoftScore];
}

function bjHit()
{
    try {
        checkStrategy(ACTION.HIT, dealerHand, playerHand, playerHandCards);
        bjDisableSurrender();
        //split and double down not allowed anymore
        $("#split").attr("disabled", true);
        $("#double").attr("disabled", true);

        bjDealCard(playerHand, playerHandCards);
        let [playerScore, playerIsSoftScore] = bjCheckPlayerScore(playerHand, playerHandCards);

        if (playerScore >= BLACKJACK_VALUE)
        {
            bjPlayerFinished()
        }
    }
    catch (e) {
        console.error(e);
        alertAndDispose(e);
        generateDecks();
        bjRoundFinished();
        bjNewRound();
    }
}

function bjPlayDealerAndEvaluate()
{
    let facedDownCards = dealerHand.find("[faceddown='true']");
    setCardTexture(facedDownCards, facedDownCards.attr("type")); //only works for one card

    let [score, isSoftScore] = bjCheckPlayerScore(dealerHand, dealerHandCards);

    while (score <= 17)
    {
        if (score == 17) 
        {
            if (isSoftScore)
            {
                if(HIT_ON_SOFT_17)
                {
                    console.info("S17, hit...");
                }
                else
                {
                    console.info("S17, standing...");
                    break;
                }
            }
            else
            {
                break;
            }
        }
        bjDealCard(dealerHand, dealerHandCards);
        [score, isSoftScore] = bjCheckPlayerScore(dealerHand, dealerHandCards);
    }

    for (let id=0; id < playerCount; id++)
    {

        let currPlayerHand = $("[playerID="+id+"]");         
        let currPlayerHandCards = playerHandsCards[id];

        let [playerScore, playerIsSoftScore] = bjCheckPlayerScore(currPlayerHand, currPlayerHandCards);

        let result = RESULT.WON;
        if (surrenderedPlayers.includes(id))
        {
            addChatMessage(currPlayerHand.find(".score").text() + " against " + dealerHand.find(".score").text() + ": Player "+(id+1)+" surrendered!");
            result = RESULT.LOST;
            statsAddResult(result);
            continue;
        }

        if (score > BLACKJACK_VALUE && playerScore <= BLACKJACK_VALUE)
        {
            addChatMessage(currPlayerHand.find(".score").text() + " against " + dealerHand.find(".score").text() + ": Dealer busts! Player "+(id+1)+" wins!");
        }
        else if (playerScore > BLACKJACK_VALUE)
        {
            addChatMessage(currPlayerHand.find(".score").text() + " against " + dealerHand.find(".score").text() + ": Player "+(id+1)+" busts!");
            result = RESULT.LOST;
        }
        else if (score > playerScore)
        {
            addChatMessage(currPlayerHand.find(".score").text() + " against " + dealerHand.find(".score").text() + ": Player "+(id+1)+" loses!");
            result = RESULT.LOST;
        }
        else if (score == playerScore)
        {
            addChatMessage(currPlayerHand.find(".score").text() + " against " + dealerHand.find(".score").text() + ": Player "+(id+1)+" Push!");
            result = RESULT.PUSH;
        }
        else if (score < playerScore)
        {
            addChatMessage(currPlayerHand.find(".score").text() + " against " + dealerHand.find(".score").text() + ": Player "+(id+1)+" wins!");
        }
        statsAddResult(result);
    }
}

function bjPlayerFinished()
{
    if (currPlayerID >= playerCount-1)
    {
        bjPlayDealerAndEvaluate();
        //round finished
        bjRoundFinished();
    }
    else
    {
        //next player
        currPlayerID += 1;
        bjSwitchPlayer(currPlayerID);
        //deal card after split
        if (playerHandCards.length < 2)
        {
            bjDealCard(playerHand, playerHandCards);
            bjCheckPlayerScore(playerHand, playerHandCards);
        }
        //check if split is allowed
        if (!bjIsPair(playerHandCards))
        {
            $("#split").attr("disabled", true);
        }
    }
}

function bjStand()
{
    try {
        checkStrategy(ACTION.STAND, dealerHand, playerHand, playerHandCards);
        bjDisableSurrender();
        bjPlayerFinished();
    }
    catch (e) {
        console.error(e);
        alertAndDispose(e);
        generateDecks();
        bjRoundFinished();
        bjNewRound();
    }
}

function bjDouble()
{
    checkStrategy(ACTION.DOUBLE, dealerHand, playerHand, playerHandCards);
    bjDisableSurrender();
    bjDealCard(playerHand, playerHandCards);
    bjPlayerFinished();
}

function bjSplit()
{
    checkStrategy(ACTION.SPLIT, dealerHand, playerHand, playerHandCards);
    bjDisableSurrender();
    if (DOUBLE_AFTER_SPLIT)
    {
        //double after split allowed
        $("#double").removeAttr("disabled");
    }
    else
    {
        //double down after split not allowed
        $("#double").attr("disabled", true);
    }

    let [newPlayer, newPlayerID] = bjCreatePlayer(false);
    let lastCard = playerHandCards.pop();
    let lastCardDOM = playerHand.children().last().detach();
    newPlayer.append(lastCardDOM);
    playerHandsCards[newPlayerID].push(lastCard);

    bjDealCard(playerHand, playerHandCards);
    bjCheckPlayerScore(playerHand, playerHandCards);
    bjCheckPlayerScore(newPlayer, playerHandsCards[newPlayerID]);

    //check if split is allowed
    if (!bjIsPair(playerHandCards))
    {
        $("#split").attr("disabled", true);
    }
}

function bjSurrender()
{
    checkStrategy(ACTION.SURRENDER, dealerHand, playerHand, playerHandCards);
    surrenderedPlayers.push(currPlayerID);
    bjPlayerFinished();
}
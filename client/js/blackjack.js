var dealerHand = $(".dealerHand");
var dealerHandCards = [];
var playerHand = null;
var playerHandCards = [];
var playerHandsCards = [playerHandCards];
var surrenderedPlayers = [];

var bjTimer = new Stopwatch($("#timer")[0], {
    delay: 10
});

const playerHandTemplate = '<div class="playerHand hand col" playerID="0"><span class="score" hidden>--</span></div>'

var playerCount = 0;
var currPlayerID = 0;

const BLACKJACK_VALUE = 21;

var HIT_ON_SOFT_17 = true;
var DOUBLE_AFTER_SPLIT = true;

const BJ_DECK_MODE = {
    NORMAL: 0,
    PAIRS: 1,
    SOFTHANDS: 2
};

var DECK_PRACTICE_MODE = BJ_DECK_MODE.NORMAL;


const cardsValues = {
    "AS" : 11, "2S": 2, "3S": 3, "4S": 4, "5S": 5, "6S": 6, "7S": 7, "8S": 8, "9S": 9, "TS": 10, "JS": 10, "QS": 10, "KS": 10,
    "AH" : 11, "2H": 2, "3H": 3, "4H": 4, "5H": 5, "6H": 6, "7H": 7, "8H": 8, "9H": 9, "TH": 10, "JH": 10, "QH": 10, "KH": 10,
    "AD" : 11, "2D": 2, "3D": 3, "4D": 4, "5D": 5, "6D": 6, "7D": 7, "8D": 8, "9D": 9, "TD": 10, "JD": 10, "QD": 10, "KD": 10,
    "AC" : 11, "2C": 2, "3C": 3, "4C": 4, "5C": 5, "6C": 6, "7C": 7, "8C": 8, "9C": 9, "TC": 10, "JC": 10, "QC": 10, "KC": 10
};

function bjIsPair(handCards)
{
    return handCards.every(card => card.charAt(0) === handCards[0].charAt(0)) && handCards.length == 2;
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
        console.log("hello")
        playerHand.css("border-style", "solid");
    }

    playerHandsCards.push([]);
    $("#playerHands").prepend(newPlayer);
    if (playerHand !== null)
    {
        $(".boardContent")[0].scrollTo(0, (playerHand[0].offsetTop + playerHand[0].offsetHeight) - $(".boardContent")[0].clientHeight);
    }
    

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
    
    $(".boardContent")[0].scrollTo(0, (playerHand[0].offsetTop + playerHand[0].offsetHeight) - $(".boardContent")[0].clientHeight);
    
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
        surrenderedPlayers = [];
        playerHandCards = playerHandsCards[currPlayerID];
        $("#playerHands").empty();
        [playerHand, currPlayerID] = bjCreatePlayer();

        dealerHand.find(".cardContainer").remove();
        dealerHandCards = [];

        $(".resultLabel").text("");
        $(".decisionLabel").text("");

        if (!$("#showHandTotalCbox")[0].checked)
        {
            $(".score").attr("hidden", true);
        }

        bjSwitchPlayer(0);

        bjDealCard(dealerHand, dealerHandCards, count=1, isFaceDown=false);
        
        //this is actually not correct dealing, since one card is dealt each player, then one to the dealer and so on, but it makes no statistical difference
        bjDealCard(playerHand, playerHandCards, count=2, isFaceDown=false);

        bjDealCard(dealerHand, dealerHandCards, count=1, isFaceDown=true);

        bjTimer.reset();
        bjTimer.start();

        bjSwitchPlayer(0);

    }
    catch (e) 
    {
        console.error(e);
        alertAndDispose(e);
        generateDecks();
        bjRoundFinished();
        // bjNewRound();
    }
}

function bjRoundFinished()
{
    $("#newRound").removeAttr("disabled");
    $(".gameAction").attr("disabled", true);
    $(".score").removeAttr("hidden");
    bjTimer.stop();
    bjTimer.reset();
}

function bjDealCard(hand, handCardsArray, count=1, isFaceDown=false)
{
    if (count == 2 && DECK_PRACTICE_MODE !== BJ_DECK_MODE.NORMAL)
    {
        if (DECK_PRACTICE_MODE === BJ_DECK_MODE.PAIRS)
        {
            
            let nextCardValue = getRandomIntInclusive(2,11);
            
            if (nextCardValue == 10) nextCardValue = "T";
            if (nextCardValue == 11) nextCardValue = "A";

            for (let i=0; i < count; i++)
            {
                let nextCardSuit = ["S", "H", "D", "C"][getRandomIntInclusive(0,3)];

                let nextCard = nextCardValue + nextCardSuit;

                let cardContainer = $(cardTemplate).clone();
                let card = cardContainer.find(".card")[0];
                setCardTexture(card, nextCard, isFaceDown);
                hand.append(cardContainer);
                handCardsArray.push(nextCard);
            }
            
        }
        else if (DECK_PRACTICE_MODE === BJ_DECK_MODE.SOFTHANDS)
        {
            let nextCardValue = getRandomIntInclusive(2,10);
            
            if (nextCardValue == 10) nextCardValue = "T";
            if (nextCardValue == 11) nextCardValue = "A";

            let nextCardSuit = ["S", "H", "D", "C"][getRandomIntInclusive(0,3)];

            let nextCard = "A" + nextCardSuit;

            let cardContainer = $(cardTemplate).clone();
            let card = cardContainer.find(".card")[0];
            setCardTexture(card, nextCard, isFaceDown);
            hand.append(cardContainer);
            handCardsArray.push(nextCard);

            nextCardSuit = ["S", "H", "D", "C"][getRandomIntInclusive(0,3)];

            nextCard = nextCardValue + nextCardSuit;

            cardContainer = $(cardTemplate).clone();
            card = cardContainer.find(".card")[0];
            setCardTexture(card, nextCard, isFaceDown);
            //get some randomness on softhand order
            if (getRandomIntInclusive(0,1) === 0)
            {
                hand.children().first().after(cardContainer);
            }
            else
            {
                hand.append(cardContainer);
            }
            handCardsArray.push(nextCard);
        }
        else
        {
            console.error("deck mode not found!");
        }
    }
    else
    {
        for (let i=0; i < count; i++)
        {
            let nextCard;
            if (DECK_PRACTICE_MODE !== BJ_DECK_MODE.NORMAL)
            {
                nextCard = Object.keys(cards)[getRandomIntInclusive(0,51)];
            }
            else
            {
                nextCard = getNextCard();
            }
            
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
    
    if (score == 21 && handCardsArray.length == 2 && currPlayerID == 0) //@TODO: currPlayerID only for one player correct
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
            $(".resultLabel").text("You surrender!");
            result = RESULT.LOST;
            statsAddResult(result);
            continue;
        }

        if (score > BLACKJACK_VALUE && playerScore <= BLACKJACK_VALUE)
        {
            addChatMessage(currPlayerHand.find(".score").text() + " against " + dealerHand.find(".score").text() + ": Dealer busts! Player "+(id+1)+" wins!");
            $(".resultLabel").text("You win!");
        }
        else if (playerScore > BLACKJACK_VALUE)
        {
            addChatMessage(currPlayerHand.find(".score").text() + " against " + dealerHand.find(".score").text() + ": Player "+(id+1)+" busts!");
            $(".resultLabel").text("You loose!");
            result = RESULT.LOST;
        }
        else if (score > playerScore)
        {
            addChatMessage(currPlayerHand.find(".score").text() + " against " + dealerHand.find(".score").text() + ": Player "+(id+1)+" loses!");
            $(".resultLabel").text("You loose!");
            result = RESULT.LOST;
        }
        else if (score == playerScore)
        {
            if (currPlayerHandCards.length == 2 && dealerHandCards.length > 2)
            {
                addChatMessage(currPlayerHand.find(".score").text() + " against " + dealerHand.find(".score").text() + ": Player "+(id+1)+" wins!");
                $(".resultLabel").text("You win!");
            }
            else
            {
                addChatMessage(currPlayerHand.find(".score").text() + " against " + dealerHand.find(".score").text() + ": Player "+(id+1)+" Push!");
                $(".resultLabel").text("Push!");
                result = RESULT.PUSH;
            }
            
        }
        else if (score < playerScore)
        {
            addChatMessage(currPlayerHand.find(".score").text() + " against " + dealerHand.find(".score").text() + ": Player "+(id+1)+" wins!");
            $(".resultLabel").text("You win!");
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
            let [playerScore, playerIsSoftScore] = bjCheckPlayerScore(playerHand, playerHandCards);

            if (playerScore >= BLACKJACK_VALUE)
            {
                bjPlayerFinished();
            }
        }
        //check if split is allowed
        if (!bjIsPair(playerHandCards))
        {
            $("#split").attr("disabled", true);
        }
        else
        {
            $("#split").removeAttr("disabled");
        }
        bjTimer.reset();
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
var playerHand = null;
var playerHandCards = [];

var cdTimer = new Stopwatch($("#timer")[0], {
    delay: 10
});

const playerHandTemplate = '<div class="playerHand hand col" playerID="0" style="margin:auto;"></div>'

const hiLowValues = {
    "A" : -1, "2": 1, "3": 1, "4": 1, "5": 1, "6": 1, "7": 0, "8": 0, "9": 0, "T": -1, "J": -1, "Q": -1, "K": -1,
}

var CD_RUNNING_COUNT = 0;
var CD_CARDS_DEALT = 0;
var CD_TRUE_COUNT = 0;
var CD_CHECK_COUNT = 0;
var CD_ROUNDS_IN = 0;
var SHOW_COUNT = false;
var CD_NEXT_CARD_TIME = 0;
var CD_NEXT_CARD_TIME_CHANGED = true;

const CD_MODE =
{
    NONE: 0,
    ONE: 1,
    TWO: 2
}

var CD_CARD_MODE = CD_MODE.NONE;

var cdCardTimer = new CountdownTimer($("#countdownTimer")[0], CD_NEXT_CARD_TIME, cdTimerExpired, {
    delay: 10,
    precision: 1
});

function cdStopTimer()
{
    cdCardTimer.stop();
}

function cdTimerExpired()
{
    console.log("expired");
    cdNextCard();
}

function cdUpdateTimer()
{
    cdCardTimer.setStartTime(CD_NEXT_CARD_TIME*1000);
    cdStopTimer();
    console.log("updateTimer")
}

function bjResetCount(card)
{
    CD_RUNNING_COUNT = 0;
    CD_CARDS_DEALT = 0;
    CD_TRUE_COUNT = 0;
}

function cdUpdateCount(card)
{
    CD_RUNNING_COUNT += hiLowValues[card.charAt(0)];
    CD_CARDS_DEALT += 1;

    let decksLeft = ((DECK_SIZE * 52) - CD_CARDS_DEALT) / 52;

    CD_TRUE_COUNT = CD_RUNNING_COUNT / decksLeft;
    $(".decksLeft .statValue").text(decksLeft.toFixed(1));
    $(".trueCount .statValue").text(CD_TRUE_COUNT.toFixed(2));
    

    $(".runningCount .statValue").text(CD_RUNNING_COUNT);
}

function cdCreatePlayer()
{
    playerCount++;
    let newPlayer = $(playerHandTemplate).clone()
    
    newPlayer.attr("playerID", playerCount-1);

    $("#playerHands").prepend(newPlayer);

    $("#playerHands .playerHand").css("max-width", "70%");

    return [newPlayer, playerCount-1];
}

function cdNewDeck(newRound=true)
{
    CD_ROUNDS_IN = 0;

    if (CD_NEXT_CARD_TIME > 0)
    {
        cdCardTimer.stop();
    }
    else
    {
        cdTimer.stop();
        statsAddTime(cdTimer.reset());
    }
    
    generateDecks();

    $("#newRound").removeAttr("disabled");
    $(".gameAction").attr("disabled", true);

    if (newRound)
    {
        cdNewRound();
    }
}

function cdNewRound()
{
    try
    {
        playerCount = 0;
        playerHandCards = [];
        $("#playerHands").empty();
        [playerHand, currPlayerID] = cdCreatePlayer();

        cdCardTimer.stop();
        cdTimer.reset();

        $("#newRound").attr("disabled", true);
        $(".gameAction").removeAttr("disabled");

    }
    catch (e) 
    {
        console.error(e);
        alertAndDispose(e);
        cdNewDeck(false);
    }
}

function cdRoundFinished()
{
    CD_ROUNDS_IN++;
    if (CD_ROUNDS_IN % CD_CHECK_COUNT == 0)
    {
        cdCardTimer.stop();
        askForCount();
    }
    cdTimer.reset();
}

function cdDealCard(hand, handCardsArray, count=1, isFaceDown=false)
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
        if (!isFaceDown)
        {
            cdUpdateCount(nextCard);
        }
    }
    
}

function cdNextCard()
{
    try {
        if (CD_NEXT_CARD_TIME > 0)
        {
            if (CD_NEXT_CARD_TIME_CHANGED)
            {
                cdTimer.stop();
                cdTimer.reset();
            }
            cdCardTimer.reset();
            cdCardTimer.start();
        }
        else
        {
            if (CD_NEXT_CARD_TIME_CHANGED)
            {
                cdCardTimer.stop();
                cdCardTimer.reset();
            }
            statsAddTime(cdTimer.reset());
            cdTimer.start();
        }
        $(playerHand).empty();
        cdDealCard(playerHand, playerHandCards, CD_CARD_MODE);
        cdRoundFinished();
        if (deck.length === 0)
        {
            alertAndDispose("Shoe is empty!");
            cdNewDeck(false);
        }
    }
    catch (e) {
        console.error(e);
        alertAndDispose(e);
        cdNewDeck(false);
    }
}

function cdNext()
{
    CD_CARD_MODE = CD_MODE.ONE;

    cdNextCard();
}

function cdNextPair()
{
    CD_CARD_MODE = CD_MODE.TWO;

    cdNextCard(CD_MODE.TWO);
}
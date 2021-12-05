var DECK_SIZE = 4;
var deck = [];
var playedCards = [];

const fisherYatesShuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
}

function generateDecks()
{
    bjResetCount(); //@TODO: move out of here
    deck = [];
    playedCards = [];
    for (let i=0; i<DECK_SIZE; i++)
    {
        Array.prototype.push.apply(deck, Object.keys(cards));
    }
    for (let i=0; i < 5; i++)
    {
        fisherYatesShuffle(deck);
    }
    // deck[1] = "AS";
    // deck[2] = "5C";
    // deck[0] = "JC";
    // deck[4] = "6S";
    // deck[5] = "JS";
    // deck[6] = "5S";
    // deck[7] = "JS";

    // deck[3] = "AC";
    console.log(deck);
}



function getNextCard()
{
    if (deck.length > 0)
    {
        let nextCard = deck.shift();
        playedCards.push(nextCard);
        return nextCard;
    }
    else
    {
        console.log("all cards played");
        return null;
    }
}
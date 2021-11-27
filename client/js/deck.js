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
    // deck[2] = "AC";
    // deck[0] = "JC";
    // deck[4] = "4S";
    // deck[5] = "4S";
    // deck[6] = "4S";

    // deck[3] = "6C";
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
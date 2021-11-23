const DECK_SIZE = 1;
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

function generateDecks(decks=2)
{
    deck = [];
    playedCards = [];
    for (let i=0; i<DECK_SIZE; i++)
    {
        Array.prototype.push.apply(deck, Object.keys(cards));
    }
    fisherYatesShuffle(deck);
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
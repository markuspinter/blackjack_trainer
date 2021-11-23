const CARD_WIDTH = 360;
const CARD_HEIGHT = 540;
const BASE_OFFSET_X = 31;
const BASE_OFFSET_Y = 31;
const OFFSET_X = 30;
const OFFSET_Y = 30;
const SPRITE_WIDTH = 13;
const SPRITE_HEIGHT = 4;

const cards = {
    "AS" : 0, "2S": 1, "3S": 2, "4S": 3, "5S": 4, "6S": 5, "7S": 6, "8S": 7, "9S": 8, "10S": 9, "JS": 10, "QS": 11, "KS": 12,
    "AH" : 13, "2H": 14, "3H": 15, "4H": 16, "5H": 17, "6H": 18, "7H": 19, "8H": 20, "9H": 21, "10H": 22, "JH": 23, "QH": 24, "KH": 25,
    "AD" : 26, "2D": 27, "3D": 28, "4D": 29, "5D": 30, "6D": 31, "7D": 32, "8D": 33, "9D": 34, "10D": 35, "JD": 36, "QD": 37, "KD": 38,
    "AC" : 39, "2C": 40, "3C": 41, "4C": 42, "5C": 43, "6C": 44, "7C": 45, "8C": 46, "9C": 47, "10C": 48, "JC": 49, "QC": 50, "KC": 51
};

const cardTemplate = '<div class="cardContainer"><div class="card"></div></div>'

function setCardTexture(card, type, isFacedDown=false)
{
    $(card).attr("type", type);
    if (isFacedDown)
    {
        $(card).attr("faceddown", true);
        $(card).css("background-image", "url(../img/back.png)");
        $(card).css("background-position", "0px 0px");
    }
    else
    {
        let offset = -(BASE_OFFSET_X + (cards[type] % SPRITE_WIDTH) * CARD_WIDTH + (cards[type] % SPRITE_WIDTH) * OFFSET_X) + "px " + 
        -(BASE_OFFSET_Y + Math.trunc(cards[type] / SPRITE_WIDTH) * CARD_HEIGHT + Math.trunc(cards[type] / SPRITE_WIDTH) * OFFSET_Y) + "px";
        console.log(offset);
        $(card).css("background-image", "url(../img/playing_cards.svg)");
        $(card).css("background-position", offset);
    }
    console.log(card, cards[type]);
    
}
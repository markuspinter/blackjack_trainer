const FOUR_OR_MORE_H17_DAS =
{
    "hard": {
        5:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        6:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        7:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        8:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        9:  ["H", "Dh","Dh","Dh","Dh","H", "H", "H",    "H", "H" ],
        10: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh",   "H", "H" ],
        11: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh",   "Dh","Dh"],
        12: ["H", "H", "S", "S", "S", "H", "H", "H",    "H", "H" ],
        13: ["S", "S", "S", "S", "S", "H", "H", "H",    "H", "H" ],
        14: ["S", "S", "S", "S", "S", "H", "H", "H",    "H",    "H" ],
        15: ["S", "S", "S", "S", "S", "H", "H", "H",    "Suh",  "Suh" ],
        16: ["S", "S", "S", "S", "S", "H", "H", "Suh",  "Suh",  "Suh" ],
        17: ["S", "S", "S", "S", "S", "S", "S", "S",    "S",    "Sus" ],
        18: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        19: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        21: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
    },
    "soft": {
        13: ["H", "H", "H", "Dh","Dh","H", "H", "H", "H", "H" ],
        14: ["H", "H", "H", "Dh","Dh","H", "H", "H", "H", "H" ],
        15: ["H", "H", "Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        16: ["H", "H", "Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        17: ["H", "Dh","Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        18: ["Ds","Ds","Ds","Ds","Ds","S", "S", "H", "H", "H" ],
        19: ["S", "S", "S", "S", "Ds","S", "S", "S", "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
        21: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
    },
    "pair": {
        4:  ["P", "P", "P", "P", "P", "P", "H", "H", "H", "H" ],
        6:  ["P", "P", "P", "P", "P", "P", "H", "H", "H", "H" ],
        8:  ["H", "H", "H", "P", "P", "H", "H", "H", "H", "H" ],
        10: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh","H", "H" ],
        12: ["P", "P", "P", "P", "P", "H", "H", "H", "H", "H" ],
        14: ["P", "P", "P", "P", "P", "P", "H", "H", "H", "H" ],
        16: ["P", "P", "P", "P", "P", "P", "P", "P", "P", "Sup" ],
        18: ["P", "P", "P", "P", "P", "S", "P", "P", "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
        12: ["P", "P", "P", "P", "P", "P", "P", "P", "P", "P" ],
    }
}

const FOUR_OR_MORE_S17_DAS =
{
    "hard": {
        5:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        6:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        7:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        8:  ["H", "H", "H", "H", "H", "H", "H", "H",    "H", "H" ],
        9:  ["H", "Dh","Dh","Dh","Dh","H", "H", "H",    "H", "H" ],
        10: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh",   "H", "H" ],
        11: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh",   "Dh","H"],
        12: ["H", "H", "S", "S", "S", "H", "H", "H",    "H", "H" ],
        13: ["S", "S", "S", "S", "S", "H", "H", "H",    "H", "H" ],
        14: ["S", "S", "S", "S", "S", "H", "H", "H",    "H",    "H" ],
        15: ["S", "S", "S", "S", "S", "H", "H", "H",    "Suh",  "H" ],
        16: ["S", "S", "S", "S", "S", "H", "H", "Suh",  "Suh",  "Suh" ],
        17: ["S", "S", "S", "S", "S", "S", "S", "S",    "S",    "S" ],
        18: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        19: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
        21: ["S", "S", "S", "S", "S", "S", "S", "S",    "S", "S" ],
    },
    "soft": {
        13: ["H", "H", "H", "Dh","Dh","H", "H", "H", "H", "H" ],
        14: ["H", "H", "H", "Dh","Dh","H", "H", "H", "H", "H" ],
        15: ["H", "H", "Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        16: ["H", "H", "Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        17: ["H", "Dh","Dh","Dh","Dh","H", "H", "H", "H", "H" ],
        18: ["S", "Ds","Ds","Ds","Ds","S", "S", "H", "H", "H" ],
        19: ["S", "S", "S", "S", "Ds","S", "S", "S", "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
        21: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
    },
    "pair": {
        4:  ["P", "P", "P", "P", "P", "P", "H", "H", "H", "H" ],
        6:  ["P", "P", "P", "P", "P", "P", "H", "H", "H", "H" ],
        8:  ["H", "H", "H", "P", "P", "H", "H", "H", "H", "H" ],
        10: ["Dh","Dh","Dh","Dh","Dh","Dh","Dh","Dh","H", "H" ],
        12: ["P", "P", "P", "P", "P", "H", "H", "H", "H", "H" ],
        14: ["P", "P", "P", "P", "P", "P", "H", "H", "H", "H" ],
        16: ["P", "P", "P", "P", "P", "P", "P", "P", "P", "P" ],
        18: ["P", "P", "P", "P", "P", "S", "P", "P", "S", "S" ],
        20: ["S", "S", "S", "S", "S", "S", "S", "S", "S", "S" ],
        12: ["P", "P", "P", "P", "P", "P", "P", "P", "P", "P" ],
    }
}

const ACTION = {
	HIT: "hits",
	STAND: "stands",
    DOUBLE: "doubles",
    SPLIT: "splits",
	SURRENDER: "surrenders"
};

function updateStrategy()
{
    if (DECK_SIZE >=4)
    {
        if (HIT_ON_SOFT_17)
        {
            if (DOUBLE_AFTER_SPLIT)
            {
                BLACKJACK_STRATEGY = FOUR_OR_MORE_H17_DAS;
            }
            else
            {
                alertAndDispose("4 or more h17 ndas not implemented yet");
            }
        }
        else
        {
            if (DOUBLE_AFTER_SPLIT)
            {
                BLACKJACK_STRATEGY = FOUR_OR_MORE_S17_DAS;
            }
            else
            {
                alertAndDispose("4 or more s17 ndas not implemented yet");
            }
        }
    }
    else if (DECK_SIZE == 2)
    {
        alertAndDispose("deck size of 2 not implemented yet");
    }
    else if (DECK_SIZE == 1)
    {
        alertAndDispose("deck size of 1 not implemented yet");
    }
    else
    {
        alertAndDispose("deck size invalid");
    }
    
}

function checkStrategy(action, dealerHand, playerHand, playerCards)
{
    let isPair = bjIsPair(playerCards);

    let playerScore = parseInt(playerHand.find(".score").attr("score"));
    let isSoftHand = playerHand.find(".score").attr("isSoftHand") == "true";
    let dealerScore = parseInt(dealerHand.find(".score").attr("score"));

    console.log(isPair, playerScore, isSoftHand, dealerScore);
    let actionCategory = null;
    if (isPair)
    {
        actionCategory = BLACKJACK_STRATEGY["pair"];
    }
    else
    {
        if (isSoftHand)
        {
            actionCategory = BLACKJACK_STRATEGY["soft"];
        }
        else
        {
            actionCategory = BLACKJACK_STRATEGY["hard"];
        }
    }
    console.log(actionCategory);
    let correctAction = actionCategory[playerScore][dealerScore-2];

    let playerScoreString = playerHand.find(".score").text();
    let dealerScoreString = dealerHand.find(".score").text();
    let playerNumber = parseInt(playerHand.attr("playerID"))+1;

    let wrongColor = "#c90000";
    let correctColor = "white";
    switch (correctAction)
    {
        case "H":
            if (action === ACTION.HIT)
            {
                addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (correct)", correctColor);
            }
            else
            {
                addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (wrong you should hit)", wrongColor);
            }
            break;
        case "S":
            if (action === ACTION.STAND)
            {
                addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (correct)", correctColor);
            }
            else
            {
                addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (wrong you should stand)", wrongColor);
            }
            break;
        case "P":
            if (action === ACTION.SPLIT)
            {
                addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (correct)", correctColor);
            }
            else
            {
                addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (wrong you should split)", wrongColor);
            }
            break;
        case "Dh":
            if (!$("#double").prop("disabled"))
            {
                if (action === ACTION.DOUBLE)
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (correct)", correctColor);
                }
                else
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (wrong you should double)", wrongColor);
                }
            }
            else
            {
                if (action === ACTION.HIT)
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (correct)", correctColor);
                }
                else
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (wrong you should hit)", wrongColor);
                }
            }
            break;
        case "Ds":
            if (!$("#double").prop("disabled"))
            {
                if (action === ACTION.DOUBLE)
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (correct)", correctColor);
                }
                else
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (wrong you should double)", wrongColor);
                }
            }
            else
            {
                if (action === ACTION.STAND)
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (correct)", correctColor);
                }
                else
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (wrong you should stand)", wrongColor);
                }
            }
            break;
        case "Suh":
            if (!$("#surrender").prop("disabled"))
            {
                if (action === ACTION.SURRENDER)
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (correct)", correctColor);
                }
                else
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (wrong you should surrender)", wrongColor);
                }
            }
            else
            {
                if (action === ACTION.HIT)
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (correct)", correctColor);
                }
                else
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (wrong you should hit)", wrongColor);
                }
            }
            break;
        case "Sus":
            if (!$("#surrender").prop("disabled"))
            {
                if (action === ACTION.SURRENDER)
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (correct)", correctColor);
                }
                else
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (wrong you should surrender)", wrongColor);
                }
            }
            else
            {
                if (action === ACTION.STAND)
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (correct)", correctColor);
                }
                else
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (wrong you should stand)", wrongColor);
                }
            }
            break;
        case "Sup":
            if (!$("#surrender").prop("disabled"))
            {
                if (action === ACTION.SURRENDER)
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (correct)", correctColor);
                }
                else
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (wrong you should surrender)", wrongColor);
                }
            }
            else
            {
                if (action === ACTION.SPLIT)
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (correct)", correctColor);
                }
                else
                {
                    addChatMessage(playerScoreString + " against " + dealerScoreString + ": Player "+playerNumber+" "+action+"! (wrong you should split)", wrongColor);
                }
            }
            break;
        default:
            alertAndDispose("action not supported!");
    }
}
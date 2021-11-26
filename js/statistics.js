var HANDS_PLAYED = changeStat($(".handsPlayed .statValue"), loadStatFromCache("bjTrainerHandsPlayed"));
var WRONG_DECISIONS = changeStat($(".decisionsWrong .statValue"), loadStatFromCache("bjTrainerWrongDecisions"));
var CORRECT_DECISIONS = loadStatFromCache("bjTrainerCorrectDecisions");
var DECISIONS = changeStat($(".decisions .statValue"), (WRONG_DECISIONS + CORRECT_DECISIONS));
var HANDS_WON = loadStatFromCache("bjTrainerHandsWon");
var HANDS_PUSH = loadStatFromCache("bjTrainerHandsPush");
var DECISION_SCORE = changeStat($(".decisionsScore .statValue"), CheckNaN((CORRECT_DECISIONS/(WRONG_DECISIONS+CORRECT_DECISIONS)*100).toFixed(2)));
var WIN_LOOSE_RATIO = changeStat($(".winLooseRatio .statValue"), CheckNaN(((HANDS_WON/(HANDS_PLAYED-HANDS_PUSH))*100).toFixed(2)));

function CheckNaN(val, valIfNaN=0)
{
    if (isNaN(val))
    {
        val = valIfNaN;
    }
    return val;
}

function resetStats()
{
    WRONG_DECISIONS = 0;
    changeStatAndSaveToCache($(".decisionsWrong .statValue"), "bjTrainerWrongDecisions", WRONG_DECISIONS);

    CORRECT_DECISIONS = 0;
    saveToCache("bjTrainerCorrectDecisions", CORRECT_DECISIONS);
    
    DECISIONS = 0;
    DECISION_SCORE = 0;
    changeStat($(".decisionsScore .statValue"), DECISION_SCORE)
    changeStat($(".decisions .statValue"), DECISIONS);

    HANDS_PLAYED = 0;
    changeStatAndSaveToCache($(".handsPlayed .statValue"), "bjTrainerHandsPlayed", HANDS_PLAYED);

    HANDS_WON = 0;
    saveToCache("bjTrainerHandsWon", HANDS_WON);
        
    HANDS_PUSH = 0;
    saveToCache("bjTrainerHandsPush", HANDS_PUSH);
    
    WIN_LOOSE_RATIO = 0;
    changeStat($(".winLooseRatio .statValue"), WIN_LOOSE_RATIO);
}

function loadStatFromCache(key, defaultVal=0)
{
    let val = getFromLocalStorageOrDefault(key, defaultVal)
    return val;
}

function saveToCache(key, val)
{
    localStorage.setItem(key, val);
}

function changeStat(destinationElement, val)
{
    console.log(val);
    destinationElement.text(val);
    return val;
}

function changeStatAndSaveToCache(destinationElement, key, val)
{
    localStorage.setItem(key, val);
    changeStat(destinationElement, val)
}

function getFromLocalStorageOrDefault(key, defaultVal=0)
{
    let val = localStorage.getItem(key);
    if (val === null) 
    {
        val = defaultVal;
    }
    else if (!isNaN(val))
    {
        val = Number(val);
    }
    return val;
}

const DECISION = {
    CORRECT: "CORRECT",
    WRONG: "WRONG"
};

const RESULT = {
    WON: "WON",
    LOST: "LOST",
    PUSH: "PUSH"
};

function statsAddDecision(decision)
{
    
    if (decision === DECISION.WRONG)
    {
        WRONG_DECISIONS++;
        changeStatAndSaveToCache($(".decisionsWrong .statValue"), "bjTrainerWrongDecisions", WRONG_DECISIONS);
    }
    else if (decision === DECISION.CORRECT)
    {
        CORRECT_DECISIONS++;
        saveToCache("bjTrainerCorrectDecisions", CORRECT_DECISIONS);
    }
    else
    {
        alertAndDispose("statsAddDecision(): Decision "+decision+" not implemented");
    }
    DECISIONS = (WRONG_DECISIONS+CORRECT_DECISIONS);
    DECISION_SCORE = ((CORRECT_DECISIONS/DECISIONS)*100).toFixed(2);
    changeStat($(".decisionsScore .statValue"), DECISION_SCORE)
    changeStat($(".decisions .statValue"), DECISIONS);
}

function statsAddResult(result)
{
    HANDS_PLAYED++;
    changeStatAndSaveToCache($(".handsPlayed .statValue"), "bjTrainerHandsPlayed", HANDS_PLAYED);

    if (result === RESULT.WON)
    {
        HANDS_WON++;
        saveToCache("bjTrainerHandsWon", HANDS_WON);
        
    }
    if (result === RESULT.PUSH)
    {
        HANDS_PUSH++;
        saveToCache("bjTrainerHandsPush", HANDS_PUSH);
    }
    WIN_LOOSE_RATIO = ((HANDS_WON/(HANDS_PLAYED-HANDS_PUSH))*100).toFixed(2);
    changeStat($(".winLooseRatio .statValue"), WIN_LOOSE_RATIO);
}
const TIME_MEASUREMENTS_COUNT = 10;

var HANDS_PLAYED = changeStat($(".handsPlayed .statValue"), loadStatFromCache("cdTrainerHandsPlayed"));
var WRONG_DECISIONS = changeStat($(".decisionsWrong .statValue"), loadStatFromCache("cdTrainerWrongDecisions"));
var CORRECT_DECISIONS = loadStatFromCache("cdTrainerCorrectDecisions");
changeStat($(".decisionsCorrect .statValue"), CORRECT_DECISIONS);
var DECISIONS = changeStat($(".decisions .statValue"), (WRONG_DECISIONS + CORRECT_DECISIONS));
var HANDS_WON = loadStatFromCache("cdTrainerHandsWon");
var HANDS_PUSH = loadStatFromCache("cdTrainerHandsPush");
var DECISION_SCORE = changeStat($(".decisionsScore .statValue"), CheckNaN((CORRECT_DECISIONS/(WRONG_DECISIONS+CORRECT_DECISIONS)*100).toFixed(2)));
var WIN_LOOSE_RATIO = changeStat($(".winLooseRatio .statValue"), CheckNaN(((HANDS_WON/(HANDS_PLAYED-HANDS_PUSH))*100).toFixed(2)));
var TIME_MEASUREMENTS = loadStatFromCache("cdTrainerTimeMeasurements", []);
if (TIME_MEASUREMENTS.length > TIME_MEASUREMENTS_COUNT)
{
    TIME_MEASUREMENTS = TIME_MEASUREMENTS.splice(-TIME_MEASUREMENTS_COUNT,TIME_MEASUREMENTS_COUNT);
}
var TIME_AVERAGE = ((TIME_MEASUREMENTS.reduce((a, b) => a + b, 0) / TIME_MEASUREMENTS.length) || 0);
changeStat($(".timeAvg .statValue"), TIME_AVERAGE.toFixed(3));

function CheckNaN(val, valIfUndefined=0)
{
    if (isNaN(val))
    {
        val = valIfUndefined;        
    }
    return val;
}

function resetStats()
{
    WRONG_DECISIONS = 0;
    changeStatAndSaveToCache($(".decisionsWrong .statValue"), "cdTrainerWrongDecisions", WRONG_DECISIONS);

    CORRECT_DECISIONS = 0;
    saveToCache("cdTrainerCorrectDecisions", CORRECT_DECISIONS);
    changeStat($(".decisionsCorrect .statValue"), CORRECT_DECISIONS);
    
    DECISIONS = 0;
    DECISION_SCORE = 0;
    changeStat($(".decisionsScore .statValue"), DECISION_SCORE)
    changeStat($(".decisions .statValue"), DECISIONS);

    HANDS_PLAYED = 0;
    changeStatAndSaveToCache($(".handsPlayed .statValue"), "cdTrainerHandsPlayed", HANDS_PLAYED);

    HANDS_WON = 0;
    saveToCache("cdTrainerHandsWon", HANDS_WON);
        
    HANDS_PUSH = 0;
    saveToCache("cdTrainerHandsPush", HANDS_PUSH);
    
    WIN_LOOSE_RATIO = 0;
    changeStat($(".winLooseRatio .statValue"), WIN_LOOSE_RATIO);

    TIME_MEASUREMENTS = [];
    TIME_AVERAGE = 0;
    saveToCache("cdTrainerTimeMeasurements", JSON.stringify(TIME_MEASUREMENTS));
    changeStat($(".timeAvg .statValue"), TIME_AVERAGE.toFixed(3));
    cdTimer.reset();
}

function loadStatFromCache(key, defaultVal=0)
{
    let val = getFromLocalStorageOrDefault(key, defaultVal)
    try {
        val = JSON.parse(val);
    } catch (e) {
    }
    return val;
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
        changeStatAndSaveToCache($(".decisionsWrong .statValue"), "cdTrainerWrongDecisions", WRONG_DECISIONS);
    }
    else if (decision === DECISION.CORRECT)
    {
        CORRECT_DECISIONS++;
        saveToCache("cdTrainerCorrectDecisions", CORRECT_DECISIONS);
        changeStat($(".decisionsCorrect .statValue"), CORRECT_DECISIONS);
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
    changeStatAndSaveToCache($(".handsPlayed .statValue"), "cdTrainerHandsPlayed", HANDS_PLAYED);

    if (result === RESULT.WON)
    {
        HANDS_WON++;
        saveToCache("cdTrainerHandsWon", HANDS_WON);
        
    }
    if (result === RESULT.PUSH)
    {
        HANDS_PUSH++;
        saveToCache("cdTrainerHandsPush", HANDS_PUSH);
    }
    WIN_LOOSE_RATIO = ((HANDS_WON/(HANDS_PLAYED-HANDS_PUSH))*100).toFixed(2);
    changeStat($(".winLooseRatio .statValue"), WIN_LOOSE_RATIO);
}

function statsAddTime(time)
{
    TIME_MEASUREMENTS.push(time);

    let oldestTime = null;
    if (TIME_MEASUREMENTS.length > TIME_MEASUREMENTS_COUNT)
    {
        oldestTime = TIME_MEASUREMENTS.shift();
        TIME_AVERAGE -= oldestTime/TIME_MEASUREMENTS_COUNT;
    }
    TIME_AVERAGE += time/TIME_MEASUREMENTS_COUNT;

    saveToCache("cdTrainerTimeMeasurements", JSON.stringify(TIME_MEASUREMENTS));
    changeStat($(".timeAvg .statValue"), TIME_AVERAGE.toFixed(3));
}
$(window).on("load", function()
{
    // $(".dealerHand").append("<h1>test</h1>");
    // setCardTexture($(".card")[0], "AS");
    // testCards();
    // setCardTexture($(".card")[0], "AS", true);
    // setInterval(() => {
    //     testCards();
    // }, 6000);
    // alertAndDispose("test", 1000);
    console.log(isMobile());
});

var WAIT_FOR_USER_INPUT = false;

DOUBLE_AFTER_SPLIT = getFromLocalStorageOrDefault("bjTrainerDAS", defaultVal=true);
$("#doubleAfterSplitCbox")[0].checked = DOUBLE_AFTER_SPLIT;

$("#showHandTotalCbox")[0].checked = getFromLocalStorageOrDefault("bjTrainerShowHandTotal", defaultVal=true);
$("#showHandTotalCbox").change();

HIT_ON_SOFT_17 = getFromLocalStorageOrDefault("bjTrainerHitOnSoft17", defaultVal=true);
$(".hitOnSoft17").val(HIT_ON_SOFT_17 + "");

DECK_SIZE = getFromLocalStorageOrDefault("bjTrainerDeckSize", defaultVal=4);
$(".deckSelect").val(DECK_SIZE);

DECK_PRACTICE_MODE = getFromLocalStorageOrDefault("bjTrainerDeckMode", defaultVal=0);
$(".deckMode").val(DECK_PRACTICE_MODE);
checkDeckUsed(DECK_PRACTICE_MODE);

$(".surrenderRules").val(getFromLocalStorageOrDefault("bjTrainerSurrenderRules", defaultVal=0));

updateStrategy();

generateDecks();
bjNewRound();

if (isMobile() && window.matchMedia("(orientation: portrait)").matches)
{
    $("#versionLabel").attr("hidden", true);
    $(".chatButton").removeAttr("hidden");
    $("#chat").children().removeAttr("hidden");
    $("#chat").removeClass("col-2");
    
}
else
{
    $("#versionLabel").removeAttr("hidden");
    $("#chat").removeClass("sidebar");
}

$( window ).on( "orientationchange", function( event ) {
    
    var orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;
    console.log(orientation);
    if (orientation.includes("landscape")) 
    {
        $("#chat").removeClass("sidebar");
        $(".chatButton").attr("hidden", true);
        $("#chat").children().first().attr("hidden", true);
        $("#chat").addClass("col-2");
    } 
    else if (orientation.includes("portrait")) 
    {
        $(".chatButton").removeAttr("hidden");
        $("#chat").children().first().removeAttr("hidden");
        $("#chat").removeClass("col-2");
        $("#chat").addClass("sidebar");
    } 
    else 
    {
        console.error("orientation type not supported: " + orientation);
    }
});

function testCards()
{
    var i = 0;
    $.each(cards, function(key, val) {
        i++;
        setTimeout(() => {
            console.log(key);
            setCardTexture($(".card")[0], key)
        }, 200 * i);
    });
    
    
}

function onShowHandTotal(cbox)
{
    if (!cbox.checked)
    {
        $(".score").attr("hidden", true);
    }
    else
    {
        $(".score").removeAttr("hidden");
    }
    saveToCache("bjTrainerShowHandTotal", cbox.checked);
    
}

function onShowCount(cbox)
{
    if (cbox.checked)
    {
        $(".counts").removeAttr("hidden");
        SHOW_COUNT = true;
    }
    else
    {
        $(".counts").attr("hidden", true);
        SHOW_COUNT = false;
    }
}

function onDoubleAfterSplit(cbox)
{
    if (cbox.checked)
    {
        DOUBLE_AFTER_SPLIT = true
    }
    else
    {
        DOUBLE_AFTER_SPLIT = false
    }
    saveToCache("bjTrainerDAS", DOUBLE_AFTER_SPLIT);
}

function onDealerRulesChange(val)
{
    let newVal = (val.toLowerCase() === 'true');
    console.log(newVal);
    HIT_ON_SOFT_17 = newVal;
    saveToCache("bjTrainerHitOnSoft17", HIT_ON_SOFT_17);
}

function checkDeckUsed(deckMode)
{
    if (DECK_PRACTICE_MODE !== BJ_DECK_MODE.NORMAL)
    {
        $(".deckSelect").attr("disabled", true);
    }
    else
    {
        $(".deckSelect").removeAttr("disabled");
    }
}

function onPracticeModeChange(val)
{
    DECK_PRACTICE_MODE = parseInt(val);
    checkDeckUsed(DECK_PRACTICE_MODE);

    saveToCache("bjTrainerDeckMode", DECK_PRACTICE_MODE);

    generateDecks();
    bjNewRound();
}

function onDecksChange(val)
{
    DECK_SIZE = parseInt(val);
    saveToCache("bjTrainerDeckSize", DECK_SIZE);

    generateDecks();
    bjNewRound();
}

function onResetStats(btn)
{
    resetStats();
}

function onSurrenderRuleChange(val)
{
    saveToCache("bjTrainerSurrenderRules", parseInt(val));
}

function onSubmitCount(input)
{
    console.info(parseInt(input.value), input.value)
    if (parseInt(input.value) === BJ_RUNNING_COUNT)
    {
        $(".countCheckResponse").text("Correct!").css("color", "white");
    }
    else
    {
        $(".countCheckResponse").text("Wrong, the count is " + BJ_RUNNING_COUNT).css("color", "black");
    }
    setTimeout(() => {
        $(".countChecker").attr("hide", "true");
        $("body").trigger("focus");
    }, 500);
    // setTimeout(() => {
    //     $(".countChecker").attr("hidden", "true");
    // }, 1700);
}

function askForCount()
{
    $(".countChecker").attr("hide", "false");
    $(".countCheckResponse").text("Enter Running Count");
    $(".countCheckResponse").css("color", "white");
    setTimeout(() => {
        $(".countChecker input").trigger("focus");
    }, 400);
}

function onAskCountChange(input)
{
    let val = parseInt(input.value);
    BJ_CHECK_COUNT = val;
    if (val === 0)
    {
        input.value = "never";
    }
    else if (val === 1)
    {
        $(this).siblings().find("span").text("hand");
    }
    else
    {
        $(this).siblings().find("span").text("hands");
    }
}

function onPostfixUpdate(input, zeroStr, oneStr, elseStr)
{
    let postfix = $(input).parent().find(".postfix");
    let val = parseInt(input.value);
    if (val === 0)
    {
        postfix.text(zeroStr);
    }
    else if (val === 1)
    {
        postfix.text(oneStr);
    }
    else
    {
        postfix.text(elseStr);
    }

}

$("input").focusin(function() {
    WAIT_FOR_USER_INPUT = true;
});

$("input").focusout(function() {
    WAIT_FOR_USER_INPUT = false;
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
});

$('#chartModal').on('show.bs.modal', function (event) {
    // var button = $(event.relatedTarget) // Button that triggered the modal
    // var recipient = button.data('whatever') // Extract info from data-* attributes
    // // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text(BLACKJACK_STRATEGY_CHART[1]);
    modal.find('#chartImg').attr("src", BLACKJACK_STRATEGY_CHART[0]);
  })

  $(window).bind(
    'touchmove',
     function(e) {
      e.preventDefault();
    }
  );
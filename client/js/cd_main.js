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

DECK_SIZE = getFromLocalStorageOrDefault("cdTrainerDeckSize", defaultVal=4);
$(".deckSelect").val(DECK_SIZE);

CD_CHECK_COUNT = getFromLocalStorageOrDefault("cdTrainerAskCount", defaultVal=4);
$("#askCountSetting").val(CD_CHECK_COUNT);

generateDecks();

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
    saveToCache("cdTrainerShowHandTotal", cbox.checked);
    
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
    saveToCache("cdTrainerDAS", DOUBLE_AFTER_SPLIT);
}

function onDealerRulesChange(val)
{
    let newVal = (val.toLowerCase() === 'true');
    console.log(newVal);
    HIT_ON_SOFT_17 = newVal;
    saveToCache("cdTrainerHitOnSoft17", HIT_ON_SOFT_17);
}

function checkDeckUsed(deckMode)
{
    if (DECK_PRACTICE_MODE !== CD_DECK_MODE.NORMAL)
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

    saveToCache("cdTrainerDeckMode", DECK_PRACTICE_MODE);

    generateDecks();
    cdNewRound();
}

function onDecksChange(val)
{
    DECK_SIZE = parseInt(val);
    saveToCache("cdTrainerDeckSize", DECK_SIZE);

    generateDecks();
    cdNewRound();
}

function onResetStats(btn)
{
    resetStats();
}

function onSurrenderRuleChange(val)
{
    saveToCache("cdTrainerSurrenderRules", parseInt(val));
}

function onSubmitCount(input)
{
    console.info(parseInt(input.value), input.value)
    if (parseInt(input.value) === CD_RUNNING_COUNT)
    {
        $(".countCheckResponse").text("Correct!").css("color", "white");
    }
    else
    {
        $(".countCheckResponse").text("Wrong, the count is " + CD_RUNNING_COUNT).css("color", "black");
    }
    setTimeout(() => {
        $(".countChecker").attr("hide", "true");
        $("body").trigger("focus");
        onDisableOtherClick(false, "countChecker");
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
    WAIT_FOR_USER_INPUT = true;
    onDisableOtherClick(true, "countChecker");
    setTimeout(() => {
        $(".countChecker input").trigger("focus");
    }, 400);
}

function onAskCountChange(input)
{
    let val = parseInt(input.value);
    CD_CHECK_COUNT = val;
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
    saveToCache("cdTrainerAskCount", val);
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

  $('.btn').bind('touchend', function(e) {
    e.preventDefault();
    // Add your code here. 
    if (!$(this).attr("disabled"))
    {
        $(this).click();
    }
    
    // This line still calls the standard click event, in case the user needs to interact with the element that is being clicked on, but still avoids zooming in cases of double clicking.
  })
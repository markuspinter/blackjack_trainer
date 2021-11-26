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

if (isMobile() && window.matchMedia("(orientation: portrait)").matches)
{
    
    $(".chatButton").removeAttr("hidden");
    $("#chat").children().removeAttr("hidden");
    $("#chat").removeClass("col-2");
    
}
else
{
    $("#chat").removeClass("sidebar");
}

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
}

function onDealerRulesChange(val)
{
    let newVal = (val.toLowerCase() === 'true');
    console.log(newVal);
    HIT_ON_SOFT_17 = newVal;
}

function onDecksChange(val)
{
    DECK_SIZE = parseInt(val);
    generateDecks();
    bjNewRound();
}

function onResetStats(btn)
{
    resetStats();
}

$('#chartModal').on('show.bs.modal', function (event) {
    // var button = $(event.relatedTarget) // Button that triggered the modal
    // var recipient = button.data('whatever') // Extract info from data-* attributes
    // // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text(BLACKJACK_STRATEGY_CHART[1]);
    modal.find('#chartImg').attr("src", BLACKJACK_STRATEGY_CHART[0]);
  })
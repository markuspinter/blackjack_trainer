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
}
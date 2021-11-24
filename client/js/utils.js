var alertTemplate = '<div id="alert" class="alert alert-warning alert-dismissible fade show" role="alert"></div>';

function alertAndDispose(msg, disposeAfter=3000)
{
    let alert = $(alertTemplate).clone();
    alert.html(msg);
    $("#board").prepend(alert);
    setTimeout(() => {
        $("#alert").alert('close')
    }, disposeAfter);
}

function addChatMessage(msg)
{
    $("#chat").prepend('<span class="chatItem">' + msg + '</span><hr/>');
}

//abort if any key is pressed
document.onkeydown = function (event) {
    // if (event.shiftKey && event.altKey && (event.code === 'KeyD')) {
    //     let isHidden = $("#debugSequenceCheck").parent().prop("hidden");
    //     $("#debugSequenceCheck").parent().prop("hidden", !isHidden);
    // };

    if (event.code === "KeyR")
    {
        $("#newRound:enabled").click();
    }
    else if (event.code === "KeyG")
    {
        $("#hit:enabled").click();
    }
    else if (event.code === "KeyF")
    {
        $("#stand:enabled").click();
    }
    else if (event.code === "KeyD")
    {
        $("#double:enabled").click();
    }
    else if (event.code === "KeyS")
    {
        $("#split:enabled").click();
    }
    else if (event.code === "KeyA")
    {
        $("#surrender:enabled").click();
    }




};
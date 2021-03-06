var alertTemplate = '<div class="alert alert-warning alert-dismissible fade show gameAlert" role="alert"></div>';

function alertAndDispose(msg, disposeAfter=3000)
{
    let alert = $(alertTemplate).clone();
    alert.html(msg);
    $("#board").find(".gameAlert").remove();
    $("#board").prepend(alert);
    setTimeout(() => {
        $(".gameAlert").alert('close');
    }, disposeAfter);
}

function addChatMessage(msg, color="white")
{
    $(".log").prepend('<span class="chatItem" style="color: '+color+';">' + msg + '</span><hr/>');
}

//abort if any key is pressed
document.onkeydown = function (event) {
    // if (event.shiftKey && event.altKey && (event.code === 'KeyD')) {
    //     let isHidden = $("#debugSequenceCheck").parent().prop("hidden");
    //     $("#debugSequenceCheck").parent().prop("hidden", !isHidden);
    // };

    if (WAIT_FOR_USER_INPUT)
    {
        return;
    }

    if (event.code === "KeyR")
    {
        $("#newRound:enabled").click();
    }
    else if (event.code === "KeyG")
    {
        $("#hit:enabled").click();
        $("#nextPair:enabled").click();
    }
    else if (event.code === "KeyF")
    {
        $("#stand:enabled").click();
        $("#next:enabled").click();
    }
    else if (event.code === "KeyD")
    {
        $("#double:enabled").click();
    }
    else if (event.code === "KeyS")
    {
        $("#split:enabled").click();
        $("#stopTimer:enabled").click();
    }
    else if (event.code === "KeyA")
    {
        $("#surrender:enabled").click();
    }




};


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

window.isMobile = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

function saveToCache(key, val)
{
    localStorage.setItem(key, val);
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
    else if (val === "true")
    {
        val = true;
    }
    else if (val === "false")
    {
        val = false;
    }
    return val;
}

$("input.intOnly, input.posIntOnly").on("keydown", function (evt) {
    let keycode = (evt.keyCode ? evt.keyCode : evt.which);
    let str = $(evt.target).attr("str") || "";

    if (keycode === 8) // backspace
    {
        $(evt.target).attr("str", str.slice(0,-1));
    }
});

$("input.intOnly, input.posIntOnly").on("keypress", function (evt) {
    let keycode = (evt.keyCode ? evt.keyCode : evt.which);
    let key = String.fromCharCode(keycode);
    console.info(keycode, key)

    let str = $(evt.target).attr("str") || "";

    $(evt.target).attr("str", str+key);
});

$('input').on('click', function () {
    $(this).focus();   // inside this function the focus works
    focused = $(this); // to point to currently focused
});

$("input.intOnly").on("input", function (evt) {
    evt.preventDefault();
    let input = evt.target;
    var val = $(input).attr("str");

    let int = parseInt(val);
    console.log(val, int, isNaN(int));
    if (isNaN(int))
    {
        if (val !== "-")
        {
            console.info(val.slice(0, -1))
            input.value = val.slice(0, -1);
            $(input).attr("str", val.slice(0, -1));
        }
        
    }
    else
    {
        input.value = int;
        $(input).attr("str", int);
    }
    // input.value = "-";
    // $(input).attr("str", "-");
});

$("input.posIntOnly").on("input", function (evt) {
    evt.preventDefault();
    let input = evt.target;
    var val = $(input).attr("str");

    let int = parseInt(val);
    console.log(val, int, isNaN(int));
    if (isNaN(int))
    {
        input.value = val.slice(0, -1);
        $(input).attr("str", val.slice(0, -1));
    }
    else
    {
        input.value = int;
        $(input).attr("str", int);
    }
    // input.value = "-";
    // $(input).attr("str", "-");
});

function disableHandler(evt)
{
    console.log("hello")
    evt.preventDefault();
}

var clickHandlers = {};
function onDisableOtherClick(disable, parentclass)
{
    if (disable)
    {
        $( ".btn:not(."+parentclass+" *)" ).each(function(ind){
            console.log(this, ".btn:not(."+parentclass+" *)")
            if (this.onclick != null)
            {
                clickHandlers[ind] = this.onclick;
                console.log(this.onclick)
                this.onclick = null;
            }
            
        });
    }
    else
    {
        $( ".btn:not(."+parentclass+" *)" ).each(function(ind){

            this.onclick = clickHandlers[ind];
            console.log(this, clickHandlers[ind])
            console.log(this.onclick)
            
        });
    }
}


function onEnter(func, arg)
{
    console.log(arg)
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        func(arg);
    }
    //Stop the event from propogation to other handlers
    //If this line will be removed, then keypress event handler attached 
    //at document level will also be triggered
    event.stopPropagation();
}
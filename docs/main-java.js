setInterval(refreshIframe, 180000); /* refresh every 3 minutes*/
function refreshIframe() {
    $('.iframe-scaled').attr('src', function (i, val) { return val; });
    $('iframe').attr('src', function (i, val) { return val; });
}


function navigationBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

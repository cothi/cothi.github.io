
var style1 = 0;

function NavOpenClose() {

    if (style1) {
        document.getElementById("idnavigation").style.height = "100px";
        style1 = 0;
    } else {
        document.getElementById("idnavigation").style.height = "400px";
        style1 = 1;
    }

    if (style1) {
        document.getElementById("main").style.marginTop = "400px";
    } else {
        document.getElementById("main").style.marginTop = "0px";
    }
}


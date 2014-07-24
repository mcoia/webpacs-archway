window.onload = init;
//hides everything as long as there are only 3 856s on the page
function init(){
var a = document.getElementById("eight56LinkComponent");
a.classList.add("otherclass");
var b = document.getElementById("eight56LinkComponent_0");
b.classList.add("otherclass");
var c = document.getElementById("eight56LinkComponent_1");
c.classList.add("otherclass");
hideStlcc();
}
function hideStlcc(){
    var divsToHide = document.getElementsByClassName("otherclass");

    for(var i = 0; i < divsToHide.length; i++)
    {
    divsToHide[i].style.visibility="hidden";
    } 
}


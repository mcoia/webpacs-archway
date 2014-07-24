window.onload = init;
//hides everything as long as there are only 3 856s on the page
function init(){

    var divsToHide = document.getElementsByClassName("addtlInfoItem");

    for(var i = 0; i < divsToHide.length; i++)
    {
    divsToHide[i].style.visibility="hidden";
    } 
}


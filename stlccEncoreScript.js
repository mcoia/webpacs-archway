window.onload = init;
//hides everything 
function init(){
    var divsToHide = document.getElementsByClassName("addtlInfoItem");
    for(var i = 0; i < divsToHide.length; i++){
    divsToHide[i].style.visibility="hidden";
    } 
}


window.onload = init;

function init(){
//hides everything 
    /*var divsToHide = document.getElementsByClassName("addtlInfoItem");
    for(var i = 0; i < divsToHide.length; i++){
    divsToHide[i].style.visibility="hidden";
    }*/ 
//finds text in span by class
    var elems = document.getElementsByClassName("addtlInfoItem");
var arr = [];
for(var i = 0; i < elems.length; i++) {
    arr.push(elems[i].innerHTML);
}
alert(arr);
}


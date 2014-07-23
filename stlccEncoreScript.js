$(document).ready(function () {
encoreStccHideLinks();
});
function encoreStccHideLinks(){
    if($("a:contains('stlcc')").length){
    $('.addtlInfoItem').addClass('stlcc');
    hideOtherSchools();
}
}
function hideOtherSchools(){
	$(".addtlInfoItem").hide();
	}    
    

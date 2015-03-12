jQuery(document).ready(function(){
	jQuery('span .addtlInfoItem:not(:contains("St. Charles"))').addClass('hideMe');
	jQuery(".hideMe").hide();
	jQuery('span .addtlInfoItem:contains("Freely available online")').addClass('showMe');
	jQuery(".showMe").show();
	if (jQuery('span .availabilityMessage:contains("St Charles Elec. Resource")').addClass('change').length) {
    jQuery("span.change").find("span").text('Available').removeClass('itemsNotAvailable').addClass('itemsAvailable')};
	if (jQuery('span .availabilityMessage:contains("Electronic Resource (ONLINE)")').addClass('change').length) {
    jQuery("span.change").find("span").text('Available').removeClass('itemsNotAvailable').addClass('itemsAvailable')};  
});

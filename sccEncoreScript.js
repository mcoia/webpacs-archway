jQuery(document).ready(function(){
	jQuery('span .addtlInfoItem:not(:contains("St. Charles"))').addClass('hideMe');
	jQuery(".hideMe").hide();
	if (jQuery('span .availabilityMessage:contains("St Charles Elec. Resource")').addClass('change').length) {
    jQuery("span.change").find("span").text('Available').removeClass('itemsNotAvailable').addClass('itemsAvailable')};
  });

jQuery(document).ready(function(){
	jQuery('span .addtlInfoItem:not(:contains("STLCC"))').addClass('hideMe');
	jQuery(".hideMe").hide();
	if (jQuery('span .availabilityMessage:contains("STLCC Electronic Resources")').addClass('change').length) {
    jQuery("span.change").find("span").text('Available').removeClass('itemsNotAvailable').addClass('itemsAvailable')};
  });



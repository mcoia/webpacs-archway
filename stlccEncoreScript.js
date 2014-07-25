jQuery(document).ready(function(){
	jQuery('span .addtlInfoItem:not(:contains("STLCC"))').addClass('hideMe');
	jQuery(".hideMe").hide();
	if (jQuery('span .availabilityMessage:contains("STLCC Electronic Resources")').length) {
		jQuery('span .itemsNotAvailable').text('Available').removeClass('itemsNotAvailable').addClass('itemsAvailable')};
//this appends ALL of these(.availableItemsSection) on page to EVERY div(.availabilitySummaryArea)
	//jQuery(".availableItemsSection").clone().appendTo(".availabilitySummaryArea");
});


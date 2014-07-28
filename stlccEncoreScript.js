jQuery(document).ready(function(){
	jQuery('span .addtlInfoItem:not(:contains("STLCC"))').addClass('hideMe');
	jQuery(".hideMe").hide();
	if (jQuery('span .availabilityMessage:contains("STLCC Electronic Resources")').length) {
		jQuery('span .itemsNotAvailable').text('Available').removeClass('itemsNotAvailable').addClass('itemsAvailable')};
//this appends the first div too all the classes on the page -- need to match item container number id to all items id number
//jQuery("div[id*='allitems-']").clone().appendTo(".availabilitySummaryArea").addClass('contentEn bibHoldingsWrapperEn popUpWrapperEn');

//does the same as above but appends to div starting with item container need to match
//jQuery("div[id*='allitems-']").clone().appendTo("div[id*='ItemsContainer-']").addClass('contentEn bibHoldingsWrapperEn popUpWrapperEn');

//alerts number at the end of div id starting with allitems--loop through? do for itemscontainer to match
//alert(jQuery("div[id*='allitems-']").attr("id").match(/\d+$/));
});


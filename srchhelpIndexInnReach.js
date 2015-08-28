$(document).ready(function () {
	$(window).load(function() {

//adds prospector button to scrhelp index pages
		function updateInnReachButtonIndex() {
			indexChar = searchhelpIndex.slice(-1);	//gets index from variable on searchhelp_ pages
			searchIndexVal = $("#SEARCH").val(); //gets search text

				if(indexChar.match(/t|a|d/) && searchIndexVal.length > 0) { //when index is t|a|d and there is a value 
					innReachArgIndex = indexChar + ":(" + searchIndexVal + ")"; //creates url for t/a/d indexes
				}
				else {
					innReachArgIndex = searchIndexVal; //creates url for keyword and other indexes
				}

			$("#innReachLink").attr("href", innReachUrl + innReachArgIndex)
		}

innReachUrl = "http://encore.searchmobius.org/iii/encore/search/C__S";

innReachButton = "<a id='innReachLink' href=''><span class='navButton'>Search MOBIUS</span></a>";

		if ($("#SEARCH").val() > ""){ //for individual search index pages
			$(".pageHeader").after(innReachButton); // drop a button that doesn't go anywhere

			updateinnReachButtonIndex(); // Just set the href initially
		}
	})

});
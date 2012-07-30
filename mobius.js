// Configuration variables

var cluster = 'archway'
var menu_collapse = 1
var sms = 1

var location_initial = new Array ();
location_initial[1] = "e";
location_initial[2] = "j";
location_initial[3] = "c";
location_initial[9] = "p";

var changing_examples = 1;

if (scope == 0 || scope == 1 || scope == 2 || scope == 3 || scope == 9){
  var mobileHost = 'https://m.' + cluster + '.searchmobius.org';
}else {
  var mobileHost = 'http://m-' + cluster + '.searchmobius.org';
}

// Script that will find URL variables
$.extend({
  getUrlVars: function(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  },
  getUrlVar: function(name){
    return $.getUrlVars()[name];
  }
});

/*
* jQuery Cookie plugin
*
* Copyright (c) 2010 Klaus Hartl (stilbuero.de)
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*
*/
jQuery.cookie = function (key, value, options) {

    // key and at least value given, set cookie...
    if (arguments.length > 1 && String(value) !== "[object Object]") {
        options = jQuery.extend({}, options);

        if (value === null || value === undefined) {
            options.expires = -1;
        }

        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }

        value = String(value);

        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? value : encodeURIComponent(value),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }

    // key and possibly options given, get cookie...
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};


/**
*
*
* Mobile redirect
*
*
*/


var mobileHost;
var mobileUrl;
var searcharg = $.getUrlVar('searcharg');

if ($.getUrlVar('searcharg') || scope) {
  mobileUrl = mobileHost + '/search.php?searcharg=' + searcharg + '&scope=' + scope; 
}

// if a search argument is included, redirect to mobile search page
// otherwise send to front page. MobileCat search.php expects a searcharg
// or it will complain in big red text.
if (searcharg) {
  mobileUrl = mobileHost + '/search.php?searcharg=' + searcharg; 
  if (scope) {
    mobileUrl = mobileUrl + '&scope=' + scope; 
  }
} else {
  mobileUrl = mobileHost + '/index.php';
  if (scope) {
    mobileUrl = mobileUrl + '?scope=' + scope;
  }
}

if ( !($.cookie('hatesmobile') || $.getUrlVar('no_redirect')) ) {
(function(a,b){if(/android|avantgo|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))window.location=b})(navigator.userAgent||navigator.vendor||window.opera, mobileUrl);
}

/*
*
*
* Temporary domain redirect
*
*
*/


var href = window.location.href
var edu = ".edu"
var domainLength = href.indexOf(edu) + edu.length
var notDomain = href.substring(domainLength)
var searchmobius = 'http://' + cluster + '.searchmobius.org'

if (notDomain == "/") {
  var redirectUrl = searchmobius  + "/search~S0&redirected"  
}else {
  var r =  /\W$/
  if (r.test(notDomain) == true){
    notDomain = notDomain.slice(0,-1);
  }
  redirectUrl = searchmobius + notDomain + "&redirected"
}

if(href.indexOf("missouri.edu") != -1 ){
    var oldDomain = cluster + ".missouri.edu"
    window.location = redirectUrl
}else if(href.indexOf("umsystem.edu") != -1 ){
    var oldDomain = cluster + ".missouri.edu"
    window.location = redirectUrl; 
}else{}


if (scope == undefined || scope == 0){
  var newURL = searchmobius
}else {
  var newURL = searchmobius + "/search~S" + scope
}

if (href.indexOf("&redirected") != -1 ) {
    
    var redirectMessage = "<p>You've been redirected from " + cluster + ".mobius.umsystem.edu or " + cluster + ".missouri.edu. Starting in June of 2012, those addresses will no longer work.</p><p>Please update your bookmarks to <a href='" + newURL + "'>" + newURL + "</a>.</p>"

    $(document).ready(function () {
        $('#alertMessage').html(redirectMessage);
    });  
}

/* 
   Simple JQuery Collapsing menu.
   HTML structure to use:

   <ul id="menu">
     <li><a href="#">Sub menu heading</a>
     <ul>
       <li><a href="http://site.com/">Link</a></li>
       <li><a href="http://site.com/">Link</a></li>
       <li><a href="http://site.com/">Link</a></li>
       ...
       ...
     </ul>
     <li><a href="#">Sub menu heading</a>
     <ul>
       <li><a href="http://site.com/">Link</a></li>
       <li><a href="http://site.com/">Link</a></li>
       <li><a href="http://site.com/">Link</a></li>
       ...
       ...
     </ul>
     ...
     ...
   </ul>

Copyright 2007 by Marco van Hylckama Vlieg

web: http://www.i-marco.nl/weblog/
email: marco@i-marco.nl

Free for non-commercial use
*/

if (menu_collapse == 1){

    function initMenu() {
      $('#rightCol ul').hide();
      $('#rightCol li a').click(
        function() {
            $(this).next().slideToggle('normal');	
          }
        );
      }
    $(document).ready(function() {initMenu();});

}

/**
*
*
* SMS feature
*
*
*/

// JavaScript Document

// set this to be the URL for the SMS script

if (sms == 1){
    var smsurl = "http://mobiusconsortium.org/sms/sms-" + cluster + ".php?";
    
       function showsms() {
    
            /*   This function shows the SMS layer and creates the form   */
    
    try {
    
      var title = '';										// we'll save the title here
      var debug = 0;										// enable this to show alerts
      var f = document.getElementById('bib_detail');
    
      try {													// we use try/catch blocks to hide errors 
        var tr = document.getElementsByTagName('TR');		// we have to iterate through every TR b/c we can't get to the title otherwise
        for(i = 0; i < tr.length; i++) {					// for every TR in the document
          var x=tr[i].getElementsByTagName('TD');			// get all of the Columns
          if (x.length == 2 && x[0].innerHTML == "Title") {  // if the row has 2 columns and the first one has the text of Title
            title = x[1].innerHTML.replace(/(<([^>]+)>)/ig,""); // strip out all of the HTML so we just have text
                if (debug > 0) alert('found title: ' + title);		// just a debug notice
          }
        }
     } catch (e) {}
     
     var sms = document.getElementById('sms');				// this is the DIV that we're going to put the text into
     // we'll load the 'out' variable with all the html and then put it into the sms div
     var out = "<h3>Send the title, location, and call number of this item to your cell phone.</h3><form name='sms_form' method=post><p><b>Title</b>: "+ title +"</p>";
    
     out += '<input type=hidden name=title value=\"'+title+'\">';	//dump the title into a hidden form variable
     out += '<p><b>Enter your cell phone #</b>: <input name=phone type=text></p>';	// input for the phone #
     out += "<p class=eg>(use the full 10 digits of your phone #, no spaces, no dashes eg. 6105265000)</p>";
    out += "<p><b>Select your provider:</b><select name=provider>";	// pull-down for each of phone carriers the values will be parsed by the perl script
            out += "<option value=att>AT&amp;T</option>";
            out += "<option value=northwest>Northwest Cellular</option>";
            out += "<option value=sprint>Sprint</option>";
            out += "<option value=tmobile>T-Mobile</option>";
            out += "<option value=uscellular>US Cellular</option>";
            out += "<option value=verizon>Verizon</option>";
     out += "</select></p>";
     out += "<p><b>Choose the item you need:</b><ol>";
     
     var itms = document.getElementById('bib_items');		// get the ITEM table
     var tr = itms.getElementsByTagName('TR');	// get each row
      for(i = 1; i < tr.length; i++) {
        var x=tr[i].getElementsByTagName('TD');			// get each cell
        if (x.length == 3) {								// if there's only 3 cells (like our ITEM table)
          var loc = x[0].innerHTML.replace(/(<([^>]+)>|&nbsp;)/ig,"");		// get the location (remove tags)
              var callLinks = x[1].getElementsByTagName("a"); //get the call number without extras
              var call = callLinks[0].innerHTML.replace(/(<([^>]+)>|&nbsp;)/ig,"");
              //var call = x[1].innerHTML.replace(/(<([^>]+)>|&nbsp;)/ig,"");	// get the call number + copies if any (remove tags)
              var status = x[2].innerHTML.replace(/(<([^>]+)>|&nbsp;)/ig,"");	// get the status (remove tags)
              
              var chck = '';
              if (i == 1) chck = ' checked ';									// if we're on the first row, check it
                    // append the input
                    out += '<li><input '+chck+' type=radio name=loc value=\"'+loc+'|'+call+'\">'+ loc + ": "+call+" ("+status+")</li>";
                    // debug statement
              if (debug > 0) alert('found item: ' + loc + '|' + call + ' | ' + status );
            }
     }	
            // close the list and add note
       out += "</ol></p>";
       out += "<p><strong>NOTE:</strong> Carrier charges may apply if your cell phone service plan does not include free text messaging.</p>";
       // add buttons at bottom.  note the return false which stops the forms from actually doing anything
       out += "<p><a href='#here' id='sendmessage' onClick='sendSMS();return false;'><img src='/screens/smssend.gif' border=0></a> <a href='#here' id='clearmessage' onClick='clearsms();return false;'><img src='/screens/smsclear.gif' border=0></a></p>";
    
            // we use the innerHTML property to actually set the HTML into the page
       sms.innerHTML = out+"</form>";
    
       // now we make the div visible
       sms.style.visibility = 'visible';
       sms.style.display = 'block';
            // some fancy positioning
        findPos(document.getElementById('smsbutton'),sms,25,-320);
    } catch (e) {
            // doesn't work?  hide the SMS buttons
    document.getElementById('smsfeatures').style.visibility='hidden';
    }
    return false;
    }
    
    
       function sendSMS(location) {
        var frm = document.sms_form;			// get the SMS form
            var phone = frm.phone.value;			// get the phone #
            phone = phone.replace(/[^\d]/ig,"");	// remove all non-digit characters
            if (phone.length == 10) {				// if 10 chars, we're good
            var url = smsurl;						// start creating the URL
                    url += "&number="+encodeURIComponent(frm.phone.value);	// html escape #
                    url += "&provider="+encodeURIComponent(frm.provider.options[frm.provider.selectedIndex].value);	// html escpae provider
                    for (i=0;i<frm.loc.length;i++) {		// for each item, get the checked one 
    //		alert(i+" "+frm.loc[i].checked);
                            if (frm.loc[i].checked == true) {	// if checked, add it to the URL
                                    url += "&item="+encodeURIComponent(frm.loc[i].value);
                            }
                    }
                    if (frm.loc.length == undefined) {		// if just one, should not come to this
                            url += "&item="+encodeURIComponent(frm.loc.value);		
                    }
    
            var bodyRef = document.getElementsByTagName("body")[0]; //get the bib number out of the <body>, add it to the url
            var bodyText = bodyRef.innerHTML;
            var bibNum = bodyText.match(/b[\d]{7}/m);
            url += "&bib="+bibNum;
             
             var head = document.getElementsByTagName("head")[0];		// now we create a <SCRIPT> tag in the <HEAD> to get the response
             var script = document.createElement('script');
             script.setAttribute('type','text/javascript');
             script.setAttribute('src',url);							// the script is actually the PERL script 
             head.appendChild(script);									// append the script
            } else {		// invalid phone #, send message
              alert('please enter a valid phone #');
          }
       }
            
            // clear/hide the SMS DIV
       function clearsms() {
         var sms = document.getElementById('sms');
             sms.style.visibility = 'hidden';
             sms.style.display = 'none';
             }
             
    
    
    // get the position of an item, good for putting the SMS form in a useful place
    function findPos(obj,obj2,lofset,tofset) {
            var curleft = curtop = 0;
            if (obj.offsetParent) {
                    curleft = obj.offsetLeft
                    curtop = obj.offsetTop
                    while (obj = obj.offsetParent) {
                            curleft += obj.offsetLeft
                            curtop += obj.offsetTop
                    }
            }
            obj2.style.left = curleft+lofset;
            obj2.style.top = curtop+tofset;
    //	return [curleft,curtop];
    }
    
    // Grab the bib number of the item
       function getbib() {
         var buttonBlock = document.getElementById('navigationRow').innerHTML;
             sms.style.visibility = 'hidden';
             sms.style.display = 'none';
             }
}



$(document).ready(function () {

/*
*
*
* Hide the III footer
*
*
*/

	$("span:contains(WebPAC PRO)").hide(); 

/*
*
*
* Change search examples when the dropdown menu changes
*
*
*/


        if (changing_examples == 1){
            //Changes the search examples
            $('#searchtype').change(function(){
            $("#exampleText").load("/screens/" + this.value + ".inc");
            });
        }

/*
*
*
* Hide out of scope locations in the advanced search menu
*
*
*/

      if(location_initial[scope]){
          var selectAny = $('#b option[value=""]')
          $('#b option:not([value^=' + location_initial[scope] + '])').detach(); 
          selectAny.prependTo("#b")
      }
});
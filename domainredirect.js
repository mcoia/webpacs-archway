// Add methods to parse out the arguments from the URL we're on
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

var searchmobius = 'http://archway.searchmobius.org:2082'; // No trailing slash
var redirectUrl = searchmobius;
var scope;
var scopeMatch = /~S(\d+)/.exec(window.location.href);
var searcharg = $.getUrlVar('searcharg');

if ($.getUrlVar('searchscope')) {
  scope = $.getUrlVar('searchscope');
} else if (scopeMatch) {
  scope = scopeMatch[1];
}

if ($.getUrlVar('searcharg') || scope) {
  redirectUrl = searchmobius + '/search.php?searcharg=' + searcharg + '&scope=' + scope; 
}


if(window.location.href.indexOf("missouri") != -1 ){
    $.cookie('oldDomain', 'missouri.edu', { domain: 'archway.searchmobius.org' });
    window.location = redirectUrl
}else if(window.location.href.indexOf("umsystem") != -1 ){
    $.cookie('oldDomain', 'mobius.umsystem.edu', { domain: 'archway.searchmobius.org' });
    window.location = redirectUrl; 
}else{}

alert( $.cookie('oldDomain') ) 


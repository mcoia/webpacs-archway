<?PHP

//Function to go out and grab the html of a specified URL
//You must have curl enabled on your server for this to work
function get_url_contents($url){
	$crl = curl_init();
	$timeout = 30;
	curl_setopt ($crl, CURLOPT_URL,$url);
	curl_setopt ($crl, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt ($crl, CURLOPT_CONNECTTIMEOUT, $timeout);
	$ret = curl_exec($crl);
	curl_close($crl);
	return $ret;
}

//form variables
$email 			= trim($_GET['email']);
$bib 			= trim($_GET['bib']);

$item 			= $_GET['item']; //parse the item
$itemArray 		= explode("|", $item);
$location 		= trim($itemArray[0]);
$callNumber 	= trim($itemArray[1]);
$item 			= "\n<strong>Loc:</strong> ".$location."\n<br /><strong>Call:</strong> ".$callNumber;
//echo "document.write('Debug: ".$location." ".$callNumber."');";

//Change this url to your own catalog
$url = "http://archway.searchmobius.org/record=".$bib;

//Use the bib number to get the title information for the item from the catalog
$catalogItemPage = get_url_contents($url);
preg_match('/fieldtag=t(.*)fieldtag=p/s', $catalogItemPage, $matches); //get the right secton of code
preg_match('/<strong>([^:]*).*<\/strong>/s', $matches[1], $matches2); //grab the title text before the colon
$title = trim($matches2[1]);

$header= "Return-Path: tes@test.com \r \n";
$header.= "From: Archway Catalog <NoReply@archway.searchmobius.org>. \r\n";
$header.= "Reply-To: NoReply@archway.searchmobius.org \r\n";
$header.= "Content-Type: text/html; charset= iso-8859-1; \n\n\r\n";			

//$fromAddress 	= 'webmaster@www.libraries.wright.edu';
$subject 		= "Archway Library Record";
$toAddress 		= $email;
$body 			= "<p>Your record(s) from the Archway catalog:</p><p>$item \n<br /><strong>Title:</strong> $title</p>";

//verify that the call number and location are listed on the page for extra security
if(!strstr($catalogItemPage, $callNumber) || !strstr($catalogItemPage, $location)){
	echo "alert('There was a problem. Message not sent!');";
	exit;
}
else 
{
	mail($email, $subject, $body, $header);
	echo "alert('Message sent!');";
	echo "clearemail();";
}
?>
var request = indexedDB.open("SomethingFunDB",3);




$(document).ready(function() { 
	if (!window.indexedDB) {
    window.alert("Your browser doesn't support a stable version of IndexedDB. So use Chrome. Here's a link if you are too lazy, https://www.google.com/chrome/browser/desktop/index.html");
}
	$("#title").fadeIn(2000);
	$("#intro").fadeIn(5000);
	$("#start").fadeIn(8000);

// Stores name if changed and just defaults to someone if empty
	$( "#username" ).blur(function() {
 	 	if ($( "#username" ).text() === "") {
 	 		$( "#username" ).text("Someone");
 	 		
 	 	}
	});

	


});
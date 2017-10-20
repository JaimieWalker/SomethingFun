if (!window.indexedDB) {
    window.alert("Your browser doesn't support a stable version of IndexedDB. So use Chrome. Here's a link if you are too lazy, https://www.google.com/chrome/browser/desktop/index.html");
}

$(document).ready(function() { 

	$("#title").fadeIn(2000);
	$("#intro").fadeIn(5000);
	$("#start").fadeIn(8000);

	$("#username").keydown(function(e){
		if (e.keyCode == 13) {
			e.preventDefault();
			this.blur();
		}
	})
// Stores name if changed and just defaults to someone if empty
	$( "#username" ).blur(function(event) {
 	 	if ($( "#username" ).text() === "" || !!$( "#username" ).text() ) {
 	 		$( "#username" ).text("Someone");	
 	 	}else{
 	 		localStorage.setItem("name", $(event.target).text().trim());
 	 	}
	});

	


});
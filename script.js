// 1. Clicking on an A element applies a CSS class to it that changes it’s background color. http://api.jquery.com/css/

// 2. Clicking on one of the H2 post titles in the main content area hides it



$(document).ready(function() {
	$( "a" ).on( "click", function() {
  		$(this).css( "background-color", "#00bfbf" )
  	})

  	$( ".post h2" ).on( "click", function() {
  		$(this).hide()
  	})

  	}); 

/* If only one h2 post titles was supposed to be hidden...


$(document).ready(function() {
	$( "a" ).on( "click", function() {
  		$(this).css( "background-color", "#00bfbf" )
  	})

  	$( " .post h2:first" ).on( "click", function() {
  		$(this).hide()
  	})

  	});


*/









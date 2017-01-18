//load page before executing anything 
$( document ).ready(function() {
	console.log("document loaded");
});

//initally hide the page links//
$('.nav').hide();

//when clicking div, show the page links
$('.hamburgerLink').click(function() {
	event.preventDefault();
	$( ".nav" ).show("slow", function() {
		//animation is complete.
	});
}); 

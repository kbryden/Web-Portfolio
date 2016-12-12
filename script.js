//Response, using jQuery, to at least two different user interaction events

$("document").ready(function() {

	$( ".js-aboutme" ).click(function(){
		$( ".about-me" ).slideToggle("slow");
	});

    $( "article" ).hover(function(){
        $( "h3", this ).slideToggle();
        $( "p", this ).slideToggle();
    });

    $( "#drop-down-nav" ).hover(function() {
      $( ".object" ).animate({"width":"5.5em"}, 1000);
    });

   

});

$(function() {
    "use strict";

    $('#web')
            .find('a')
            .colorbox({
                rel : 'gallery'
            });

    $('#photos')
            .find('a')
            .colorbox({
                rel : 'gallery'
            });

    $('#projects')
            .find('a')
            .colorbox({
                rel : 'gallery'
            });

});







//Response, using jQuery, to at least two different user interaction events

$("document").ready(function() {

	$( ".js-aboutme" ).click(function(){
		$( ".about-me" ).slideToggle("slow");
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







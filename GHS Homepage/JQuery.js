$(document).ready( function() {


		if ($(window).scroll() != 0) {
			console.log($(window).scrollTop());
		};

   $('.mnu1').click( function () {
			$(".mnu").slideToggle('fast');
    });

	$("#home").mouseenter (  function () {
		$("#more").slideToggle("fast");
	});



	$("#more").mouseleave (  function () {
		$("#more").slideToggle("slow");
	});


});

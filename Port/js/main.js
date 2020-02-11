jQuery(document).ready(function(){

	"use strict";

	$('.slider').ripples({
	  dropRadius: 10,
	  perturbance: 0.02
	});


	$(".text").typed({
			strings: ["For the things we have to learn before we can do them, we learn by <strong class='primary'>doing them.</strong>", "Practice is the hardest part of learning, and training is the essence of <strong class='secondary'>transformation.</strong>"],
			typeSpeed: 0,
			loop:true
		});

	$(window).scroll(function(){

		var top = $(window).scrollTop();

		if(top>70)
		{
			$('header').addClass('transparent-bg');
		}

		else
		{
			if($('header').hasClass('transparent-bg'))
			{
				$('header').removeClass('transparent-bg');
			}
		}

	});

});
$(function(){

	bindEvents();

	function bindEvents(){

		// set section's height
		resizeHeight();
		$(window).resize( resizeHeight );
		function resizeHeight(){
			$('.t-pc-section').css('height', $(window).height());
		}
		resizeHeight();

		// $.scrollify({
		// 	section:".t-pc-section",
		// 	scrollbars: false,
		// 	easing: "easeInOutQuart",
		// 	before: function(){
		// 		$('.currentimg').removeClass('currentimg');
		// 	},
		// 	after: function(){
		// 		$('.t-pc-section .col-sm-6:not(.text) img').addClass('currentimg');
		// 	}
		// });

		$(".t-top").on('click', function(event) {
			if (this.hash !== "") {

				event.preventDefault();

				var hash = this.hash;

				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 900, function(){

					window.location.hash = "home";
				});
			} // End if
		});

		$(".go-work").on('click', function(event) {
			if (this.hash !== "") {

				event.preventDefault();

				var hash = this.hash;

				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 900, function(){

					window.location.hash = "home";
				});
			} // End if
		});

		$(".go-book").on('click', function(event) {
			if (this.hash !== "") {

				event.preventDefault();

				var hash = this.hash;

				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 900, function(){

					window.location.hash = "home";
				});
			} // End if
		});

		$(".go-say").on('click', function(event) {
			if (this.hash !== "") {

				event.preventDefault();

				var hash = this.hash;

				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 900, function(){

					window.location.hash = "home";
				});
			} // End if
		});
		
	}
});


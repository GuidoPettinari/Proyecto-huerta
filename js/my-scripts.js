(function() {

    var quotes = $(".quotes");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(1500)
            .delay(1500)
            .fadeOut(1500, showNextQuote);
    }

    showNextQuote();

})();


$('.carousel').carousel({
  interval: 2500
})

// Smooth Transition -->

$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				  $('html, body').animate({
				    scrollTop: target.offset().top
				  }, 1000);
				  return false;
			}
		}
	});
});

// Ajax para que el send-mail.php se ejecute en la web

$(function () {

  $('form').on('submit', function (e) {

    e.preventDefault();

    $.ajax({
	 type: 'post',
	 url: 'send-mail.php',
	 data: $('form').serialize(),
	 success: function () {
	   alert('El formulario fue enviado');
	 }

    });

  });

});

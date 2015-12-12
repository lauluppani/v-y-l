var clock;

$(document).ready(function() {
	var clock;

	clock = $('.your-clock').FlipClock({
        clockFace: 'DailyCounter',
        autoStart: false,
        // callbacks: {
        // 	stop: function() {
        // 		$('.message').html('The clock has stopped!')
        // 	}
        // }
    });
		    
    clock.setTime(4392309);
    clock.setCountdown(true);
    clock.start();


    $('.datos').hide();

    $( "#quiero-ayudar" ).click(function() {
        $(this).prev('.datos').fadeIn(1000);
        $(this).addClass('pressed');
        $(this).text('Muchas gracias!').append('<i class="fa fa-thumbs-o-up"></i>');
        return false;
    });
});
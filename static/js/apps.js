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

});
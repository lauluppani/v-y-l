var clock;

$(document).ready(function() {

    $( "img.flowers.left" ).animate({
        left: "-100",
        bottom: "-10",
        }, 2000, function() {
    });
    $( "img.flowers.right" ).animate({
        right: "-100",
        bottom: "-30",
        }, 2000, function() {
    });

    if ($(window).width() < 600) {
        $( "img.flowers.left" ).animate({
            left: "-60",
            }, 2000, function() {
        });
    }
    else {
       // alert('More than 960');
    }
    if ($(window).width() < 600) {
        $( "img.flowers.right" ).animate({
            right: "-50",
            // bottom: "-30",
            }, 2000, function() {
        });
    }
    else {
       // alert('More than 960');
    }

    // Mobile Nav
    $( "button.navbar-toggle" ).click(function() {
        $(this).parents().find('ul.mobile-nav').slideToggle(1000).toggleClass('open');
        $(this).toggleClass('pressed');
        return false;
    });

    // Flipclock Countdown
    var currentDate = new Date();
    var futureDate = new Date(2016,0,30,18,30,00); // (yyyy,m,d) //
    var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
    var clock = $('.your-clock').FlipClock(diff, {
        clockFace: 'DailyCounter',
        countdown: true
    });

    clock.start();

    // Changes the language of the labels
    $('.flip-clock-divider.days .flip-clock-label').text('Dias');
    $('.flip-clock-divider.hours .flip-clock-label').text('Horas');
    $('.flip-clock-divider.minutes .flip-clock-label').text('Minutos');
    $('.flip-clock-divider.seconds .flip-clock-label').text('Segundos');


    // Hide & Show CBU Info
    $('.datos-wrapper').hide();
    $( "#quiero-ayudar" ).click(function() {
        $(this).prev('.datos-wrapper').fadeIn(1000);
        $(this).addClass('pressed');
        $(this).text('Muchas gracias!').append('<i class="fa fa-thumbs-o-up"></i>');
        return false;
    });

    // Magnific Popup
    $('.galeria-wrapper').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled:true
        },
        tCounter: false,
        // other options
    });
    $('button.mfp-arrow.mfp-arrow-left').append('<i class="fa fa-caret-left"></i>');


});
var clock;

$(document).ready(function() {

    $( "a#opcionA" ).click(function() {
        $(this).addClass('active');
        $(this).parent().next().find('a#opcionB').removeClass('active');
        $(this).parents().find('#map-pilar').css('opacity' , '1');
        $(this).parents().find('#map-escobar').css('opacity' , '0');
        $(this).parents().find('p.instruccion').text('Salir en la bajada del km 45, y tomar por calle Florida. Seguir esta calle, y en la única bifurcación que se presenta, girar a la derecha. Al terminar la calle se encuentra la entrada a dos barrios, tomar la de la izquierda hacia Campo Grande.');
        return false;
    });
    $( "a#opcionB" ).click(function() {
        $(this).addClass('active');
        $(this).parent().prev().find('a#opcionA').removeClass('active');
        $(this).parents().find('#map-escobar').css('opacity' , '1');
        $(this).parents().find('#map-pilar').css('opacity' , '0');
        $(this).parents().find('p.instruccion').text('Bajar en salida a Ruta 25. Transitar por Ruta 25, hasta calle Alborada y girar a la izquierda. Tomar Alborada hasta que se corta y obliga a girar a la derecha, por calle Matacos. A 200 mts sobre mano izquierda está la entrada a Campo Grande.');
        return false;
    });

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


    $(window).resize(function() {
      if ($(window).width() < 600) {
        $( "img.flowers.left" ).animate({
            left: "-60",
            }, 2000, function() {
        });
      }
     else {
        // alert('More than 960');
     }
    });

    $(window).resize(function() {
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
    });

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


$(document).ready(function() {

//ANIMACIÓN MENÚ

    $('.nav-menu a').each(function(index, elemento) {
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            'top': '0'
        }, 2000 + (index * 500));
    });

//ANIMACIÓN HEADER

    if( $(window).width() > 800 ) {
        $('header .textos').css({
            'opacity': '0',
            'marginTop': '0'
        });

        $('header .textos').animate({
            'opacity': '1',
            'marginTop': '-52'
        }, 1500);
        
    };

//SCROLL MENÚ

    var acercaDe = $('#acerca-de').offset().top;
    var menu = $('#platos').offset().top;
    var galeria = $('#galeria').offset().top;
    var ubicacion = $('#ubicacion').offset().top;


    $('#btn-acerca-de').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            'scrollTop': acercaDe - 150
        }, 500);
    })

    $('#btn-menu').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            'scrollTop': menu + 550
        }, 500);
    })

    $('#btn-galeria').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            'scrollTop': galeria
        }, 500);
    })

    $('#btn-ubicacion').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            'scrollTop': ubicacion
        }, 500);
    })

});
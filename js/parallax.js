$(document).ready(function() {
    var windowWidth = $(window).width();
    
    $(window).scroll(function() {

        if( windowWidth > 800) {
            var scroll = $(window).scrollTop();

            $('header .textos').css({
                'transform': 'translate(0,'+ scroll / 2 + '%)'
            });
            
            $('.acerca-de article').css({
                'transform': 'translate(0, -'+ scroll / 4 + '%)'
            });
        };
    });

    $(window).resize(function() {
        if(windowWidth < 800) {
            $('.acerca-de article').css({
                'transform': 'translate(0,0)'
            });
        }
    });

});
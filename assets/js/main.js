
$( document ).ready(function() {

    $('.carrossel').slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                  slidesToShow: 3,
                  arrows: false,
                  dots: true
                }
              },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                arrows: false,
                dots: true
              }
            }
          ]
    });

    $( ".click-img" ).click(function() {
        $( ".click-video" ).removeClass( 'ativo' );
        $( ".click-info" ).removeClass( 'ativo' );
        $( ".click-todos" ).removeClass( 'ativo' );

        $( ".click-img" ).addClass( 'ativo' );

        $( ".video-clicado" ).removeClass( 'd-block' );
        $( ".video-clicado" ).addClass( 'd-none' );
        
        $( ".info-clicado" ).removeClass( 'd-block' );
        $( ".info-clicado" ).addClass( 'd-none' );
        
        $( ".foto-clicada" ).addClass( 'd-block' );
    });

    $( ".click-video" ).click(function() {
        $( ".click-img" ).removeClass( 'ativo' );
        $( ".click-info" ).removeClass( 'ativo' );
        $( ".click-todos" ).removeClass( 'ativo' );

        $( ".click-video" ).addClass( 'ativo' );

        $( ".foto-clicada" ).removeClass( 'd-block' );
        $( ".foto-clicada" ).addClass( 'd-none' );
        
        $( ".info-clicado" ).removeClass( 'd-block' );
        $( ".info-clicado" ).addClass( 'd-none' );
        
        $( ".video-clicado" ).addClass( 'd-block' );
    });

    $( ".click-info" ).click(function() {
        $( ".click-img" ).removeClass( 'ativo' );
        $( ".click-video" ).removeClass( 'ativo' );
        $( ".click-todos" ).removeClass( 'ativo' );

        $( ".click-info" ).addClass( 'ativo' );

        $( ".foto-clicada" ).removeClass( 'd-block' );
        $( ".foto-clicada" ).addClass( 'd-none' );
        
        $( ".video-clicado" ).removeClass( 'd-block' );
        $( ".video-clicado" ).addClass( 'd-none' );
        
        $( ".info-clicado" ).addClass( 'd-block' );
    });

    $( ".click-todos" ).click(function() {
        $( ".click-img" ).removeClass( 'ativo' );
        $( ".click-video" ).removeClass( 'ativo' );
        $( ".click-info" ).removeClass( 'ativo' );

        $( ".click-todos" ).addClass( 'ativo' );

        $( ".foto-clicada" ).removeClass( 'd-none' );
        $( ".foto-clicada" ).addClass( 'd-block' );

        $( ".info-clicado" ).removeClass( 'd-none' );
        $( ".info-clicado" ).addClass( 'd-block' );
        
        $( ".video-clicado" ).removeClass( 'd-none' );
        $( ".video-clicado" ).addClass( 'd-block' );
    });

    $( ".menu-hamburger" ).click(function() {
        $( ".menu-fechado" ).addClass( 'menu-aberto' );
    });

    $( ".fechar" ).click(function() {
        $( ".menu-fechado" ).removeClass( 'menu-aberto' );
    });

});

$(document).ready(function(){
    
    $("#logotipo").on("mouseover",function(){

        $("#banner h1").addClass("efeito");
        
    }).on("mouseout", function(){
        
        $("#banner h1").removeClass("efeito");
            
    });

    $("#input-search").on("focus",function(){
    
        $("li.search").addClass("ativo");
    
    }).on("blur", function(){
        
        $("li.search").removeClass("ativo");
    
    });

    //Carousel Noticias
    var owl = $('.thumbnails');
    owl.owlCarousel({
        loop:true,
        margin: 10,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        nav:true,
        navText: ["Anterior", "Próximo"],
        responsive: {

            0 :{
                 items: 1

            },
            
            480:{
                  items: 3

            },

            1000:{
                  items: 4
            }

        }
    }); 

    $('#btn-news-next').click(function() {
       owl.trigger('next.owl.carousel');
    })
    $('#btn-news-prev').click(function() {
       owl.trigger('prev.owl.carousel', [300]);
    })
    
    //Carousel Shop 
    var owlDestaque = $('#destaque-produtos');
		
    owlDestaque.owlCarousel({
        items:2,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true
    });

    $('#btn-destaque-next').click(function() {
        owlDestaque.trigger('next.owl.carousel');
    })

    $('#btn-destaque-prev').click(function() {
        owlDestaque.trigger('prev.owl.carousel', [300]);
    })


//Botão subir

    $("#page-up").click(function(event){

        $('html, body').animate({
            scrollTop: 0
        }, 'slow');
    });

    $("#btn-bars").click(function(){
        $("header").toggleClass("open-menu");
      });

    $("#menu-mobile-mask, .btn-close").click(function(){
        $("header").removeClass("open-menu"); 
    })

    $("#btn-search").click(function(){
        $("header").toggleClass("open-search");
        $("#input-search-mobile").focus();

    })
});

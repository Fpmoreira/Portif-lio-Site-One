$(function(){

    //Abre e Fecha o menu
    $('.nav-toggle, .nav-close').click(function(e){
        e.preventDefault();
        $('.nav').toggleClass('active');
    });

    // Fixar heade (menu fixo)
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('.header').addClass('fixed');
        }else{
            $('.header').removeClass('fixed');
        }
    });

});
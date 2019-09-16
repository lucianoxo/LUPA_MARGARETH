$(function () {
//DESLIZA O MENU
    $('.main_header_menu ul li a').click(function () {
        var goto = $('.' + $(this).attr('href').replace('#', '')).position().top;
        $('html, body').animate({scrollTop: goto}, 1000);
        return false;
    });

//    $('.banner-info .btn_cta a').click(function () {
//        var goto = $('.' + $(this).attr('href').replace('#', '')).position().top;
//        $('html, body').animate({scrollTop: goto - $('.main_header').outerHeight()}, 1000);
//        return false;
//    });

    $('.banner').unslider({
        autoplay: true,
        delay: 10000,
        dots: false,
        arrows: true
    });


    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });

//    $('.main_artigos_article > article').hover(function () {
//        $('.main_artigos_article > article .main_artigos_info').css('display', 'block')},
//    function(){
//        $('.main_artigos_article > article .main_artigos_info').css('display', 'none')
//    });



    // EFEITOS DE SCROLL
    window.sr = ScrollReveal();
    sr.reveal('.srBottom', {origin: 'bottom', distance: '200px', duration: 1500, delay: 1});
    sr.reveal('.srTop', {origin: 'top', distance: '200px', duration: 1500});
    sr.reveal('.srLeft', {origin: 'left', distance: '200px', duration: 1500, delay: 1});
    sr.reveal('.srRight', {origin: 'right', distance: '200px', duration: 1500, delay: 1});
    sr.reveal('.boxs', {duration: 2000});
});
//
//$(window).scroll(function () {
//    if ($(this).scrollTop() > $('.main_header').outerHeight() + 150) {
//        $('.main_header_logo > a > img').fadeIn(1000).attr("src", "http://sobesrio.org.br/sobes/wp-content/themes/sobes/img/logo-sobes.png");
//        $('.main_header').addClass('main_header_fixed');
//        $('.main_header_fixed').fadeIn(1000).css('display', 'block');
//        $('.main_header_menu_button').fadeIn(1000).css('background-color', '#fff');
//        $('.main_header_menu ul li a').fadeIn(1000).css('color', '#476351');
//        $('.main_header_menu_button > i').fadeIn(1000).css('color', '#476351');
//        $('.main_header_menu_button > p').fadeIn(1000).css('color', '#476351');
//    } else {
//        $('.main_header').removeClass('main_header_fixed');
//        $('.main_header_logo > a > img').fadeIn(1000).attr("src", "http://sobesrio.org.br/sobes/wp-content/themes/sobes/img/logo-sobes-white.png");
//        $('.main_header_menu ul li a').fadeIn(1000).css('color', '#fff');
//        $('.main_header_menu_button').fadeIn(1000).css('background-color', 'transparent');
//        $('.main_header_menu_button > i').fadeIn(1000).css('color', '#fff');
//        $('.main_header_menu_button > p').fadeIn(1000).css('color', '#fff');
//    }
//});
//
//$('.menu_mobile').click(function () {
//    $('.main_header_menu_box').css('display', 'block');
//    if (!$(this).hasClass('active')) {
//        $(this).addClass('active');
//        $('.main_header_menu_interno ul').css('display', 'none');
//        $('.main_header_menu ul').css('display', 'none');
//        $(".menu_mobile > i").attr("class", "fas fa-times");
//        $(".menu_mobile > p").html("Fechar");
//        $('.main_header_menu_box').animate({'right': '0px'}, 500);
//        $('.main_header_menu_box ul li a').click(function () {
//            $(".menu_mobile > .material-icons").html("menu");
//            $('.main_header_menu_box').animate({'right': '-100%'}, 500);
//            $('.menu_mobile').removeClass('active');
//        });
//    } else {
//        $(this).removeClass('active');
//        $('.main_header_menu_interno ul').css('display', 'flex');
//        $('.main_header_menu ul').css('display', 'flex');
//        $(".menu_mobile > i").attr("class", "fas fa-bars");
//        $(".menu_mobile > p").html("Menu");
//        $('.main_header_menu_box').animate({'right': '-100%'}, 500);
//    }
//});




$(document).ready(function () {
    //FORM SUBMIT
    $('.j_form').submit(function () {
        var dados = $(this).serialize();

        $.ajax({
            url: '../sendEmail.php',
            data: dados,
            type: 'POST',
            dataType: 'HTML',
            beforeSend: function () {
                $('.form_load').fadeIn();
            },
            sucess: function (data) {
                $('.form_load').fadeOut();
            },
            complete: function () { /* completo */
                $('.form_load').fadeOut(); //wow!
//                $('.bg-black').fadeOut(); //wow!
                $('.j_form_message').fadeIn(300).delay(4000).fadeOut(400);

            }
        });
        return false;
    });
});

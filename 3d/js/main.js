'use strict';

$(function () {
	$('.our-works__slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        slidesToShow: 1,
        speed: 700,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 891,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '80px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 520,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '50px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 380,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    new WOW({
        offset: 50
    }).init();

    $(document)
    .on('click', '.header__btn-nav', function () {
        $('.header-nav').stop().slideToggle();
    })
    .on('scroll', function () {
        if($(document).scrollTop() > 1) {
            console.log($(document).scrollTop());
            $('.header__menu').addClass('active');
        } else {
            $('.header__menu').removeClass('active');
        }
    });

    $(document).on('click','.header-nav a, a.g-btn', function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top - 90;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').stop().animate({scrollTop: top}, 1500);
    });
});
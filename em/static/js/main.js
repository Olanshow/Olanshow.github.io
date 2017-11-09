$(document).ready(function () {
	svg4everybody({});

//----------menu-top
	$('.sandwich').click(function() {
			var nav = $('.header-nav__list');
			$(this).toggleClass('active');

			if(nav.is(':visible')) {
				nav.slideUp();
			} else {
				nav.slideDown();
			}
	})

//----------slider
	$('.js-reviews-slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: '.reviews-slider__prev',
		nextArrow: '.reviews-slider__next',
		responsive: [
		{
			breakpoint: 1024,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			infinite: true,
			dots: true
			}
		},
		{
			breakpoint: 1000,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1
			}
		}
		]
	});

//----------Scroll
	$(".header-nav__list").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });


//---------- form validate
	$("form").on("submit", function() {
		var formID = '#' + $(this).attr("id");
		$(formID).validate({
			rules: {
				name: 'required',
				phone: 'required'
			},
			messages: {
				name: 'введите корректные данные',
				phone: 'введите корректные данные'
			}
		});
		if ($(formID).valid()) {
			$(this).hide();
			$(this).parent().find('.success-form').addClass('success-show')
		}
		return false;
	});

//popup
	$('.popup-link').magnificPopup({
		type: 'inline'
	});

});
$(document).ready(function() {
$('.mainMenuButton').click(function(){
	$(this).next().slideToggle();
});
$('.navPhoneIcon').click(function(){
	$('.navPhone').slideToggle();
});
	
	$('.owl-carousel').owlCarousel();

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});
	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$(".search-menu_link").click(function() {
		$.scrollTo($(".scrollToContact"), 800, {
			offset: 0
		});
	});
	$(".link-menu_link").click(function() {
		$.scrollTo($(".sectionAbout"), 800, {
			offset: 100
		});
	});


	// Каруселька
	// Документация: http://owlgraphic.com/owlcarousel/------>Удалена
var w = $('.slider_container').width();
        $('.slides>li').width(w);
        $('.slides').width( w*$('.slides>li').length );
        $('.slides').css('left', -w);
        $('.slides>li:last-child').prependTo('.slides');
        function next(){
           $('.slides').animate({
               'margin-left': -w
           }, 1500, function(){
              $('.slides>li:first-child').appendTo('.slides');
              $('.slides').css('margin-left', '0');
           })
        }
        $('.nextSlide').click(next);
        function prev(){
            $('.slides').animate({
                'margin-left': w
            }, 1500, function(){
                $('.slides>li:last-child').prependTo('.slides');
                $('.slides').css('margin-left', '0');
            })
        }
        $('.prevSlide').click(prev);


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".topButton").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				// $.fancybox.close();
				$(this).reset()
			}, 1000);
		});
		return false;
	});

});
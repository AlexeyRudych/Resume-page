$(document).ready(function() {
$('.peeek-loading').delay(550).fadeOut('slow')
$('.mainMenuButton').click(function(){
	$('.minMenuNav').slideToggle().show();
});
$('.navPhoneIcon').click(function(){
	$('.minNavphone').slideToggle().show();
});
	$(".search-menu_link").click(function() {
		$.scrollTo($(".scrollToContact"), 1000, {
		});
	});
	$(".link-menu_link").click(function() {
		$.scrollTo($(".sectionAbout"), 1000, {
		});
	});
	$(".main-menu_link").click(function() {
		$.scrollTo($(".welcomesSection"), 1000, {
		});
	});
	$(".settings-menu_link").click(function() {
		$.scrollTo($(".skillsPeriod"), 1000, {
			offset: 80
		});
	});
	$(".topButton").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Thank You for support!");
			setTimeout(function() {
				// $.fancybox.close();
				$(this).reset()
			}, 1000);
		});
		return false;
	});
});
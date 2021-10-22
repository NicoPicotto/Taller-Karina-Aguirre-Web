//Botón con animación que aparece cuando no estás en el header, y te lleva al top
$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$(".toTopButton").fadeIn();
		} else {
			$(".toTopButton").fadeOut();
		}
	});

	$(".toTopButton").click(function () {
		$("body,html").animate(
			{
				scrollTop: 0,
			},400
		);
		return false;
	});
});

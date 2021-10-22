//Función para responsive menú hamburguesa
$(".openMenu").click(function () {
	$(".mainMenu").css("display", "flex");
	$(".mainMenu").css("top", "0");
});

$(".closeMenu").click(function () {
	$(".mainMenu").css("top", "-100%");
});

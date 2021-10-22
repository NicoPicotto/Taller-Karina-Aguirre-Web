//Animación con jQuery para navegar por las secciones a través del header
$(".mainMenu a").click(function (e) {
	if (this.hash !== "") {
		e.preventDefault();

		const hash = this.hash;

		$("html, body").animate(
			{
				scrollTop: $(hash).offset().top,
			},800
		);
	}
});

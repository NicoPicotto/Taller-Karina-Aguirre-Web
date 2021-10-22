// Función submit que realiza diferentes acciones dependiendo si los campos están completos
$(".formSubmit").click(function (e) {
	e.preventDefault();

	let inputs = $("#form").find(':input[type="text"]');
	//Función para alertar por casillas sin completar
	inputs.each(function (index, elemento) {
		if ($(elemento).val().length <= 0) {
			$(elemento).css("background-color", "#f09d9d");
			Toastify({
				text: "🤔 Tenés casillas sin completar",
				style: {
					background: "red",
				},
				className: "info",
			}).showToast();
		} else if ($(elemento).val().length != 0) {
			$(elemento).css("background-color", "#F5DFD2");
		}
	});

	//Función para alertar que el mensaje fue enviado y resetear el form
	if (
		$("#formNombre").val() != "" &&
		$("#formMail").val() != "" &&
		$("#formAsunto").val() != "" &&
		$("#formMensaje").val() != ""
	) {
		Toastify({
			text: "🤙 Gracias por tu mensaje",
			style: {
				background: "green",
			},
			className: "info",
		}).showToast();
		$("#form").trigger("reset");
	}
});

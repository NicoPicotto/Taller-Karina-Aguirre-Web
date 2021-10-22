//Función para verificar si añadiste un correo para suscribirte, en caso de hacerlo modifica el DOM y alerta que fue exitoso
$("#botonSuscripcion").click(() => {
	if ($("#news").val() == "") {
		Toastify({
			text: "🤔 No ingresaste ningún mail",
			backgroundColor: "red",
			className: "info",
		}).showToast();
	} else {
		$("#tituloNews").text("¡Gracias por suscribirte!");
		setTimeout(() => {
			cambio();
			$("#news").val("");
		}, 2000);
	}
});

//Función para volver al value original del elemento <h>
function cambio() {
	$("#tituloNews").text("¡Suscribite a nuestro newsletter semanal!");
}

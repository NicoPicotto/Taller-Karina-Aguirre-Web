//A través de AJAX se toman los datos del JSON "entradasBlog.json", y los vuelca dentro del HTML
$.get("../assets/json/entradasBlog.json", function (datos) {
	$.each(datos, function (index, entrada) {
		$(".blogContainer").append(
			`<div class="cardBlog">
                <div class="cardBlogInfo">
                    <h3 class="tituloBlog">Entrada ${entrada.id} - ${entrada.titulo}</h3>
                    <h4 class="contenidoBlog">${entrada.contenido}</h4>
                </div>
            </div>`
		);
	});
});

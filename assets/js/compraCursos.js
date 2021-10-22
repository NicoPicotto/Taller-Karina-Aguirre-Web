let productosDisponibles = [];

$.get("../assets/json/listaCursos.json", function (datos) {
	$.each(datos, function (index, producto) {
		productosDisponibles.push(producto);
		$(".tiendaCursosContainer").append(
			`<div class="cardCursos">
                            <div class="cardImgContainer">
                                <img src=${producto.img} alt="Foto Card Cursos" class="cardFoto">
                            </div>
                            <div class="cardCursosInfo">
                                <h3>${producto.nombre}</h3>
                                <h4>${producto.desc}</h4>
                            </div>
                            <div class="cardCursosComprar">
                                <h2>$${producto.precio}</h2>
                                <a class="cardCursosComprarBoton" id="boton${producto.id}">COMPRAR</a>
                            </div>
                        </div>`
		);

		$(`#boton${producto.id}`).click(function (e) {
			e.preventDefault();
			agregarAlCarrito(producto.id);
			Toastify({
				text: "🤙 Producto Agregado",
				style: {
					background: "green",
				},
				className: "info",
			}).showToast();
		});
	});
});

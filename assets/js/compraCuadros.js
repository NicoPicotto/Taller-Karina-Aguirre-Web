let productosDisponibles = [];

$.get("../assets/json/listaCuadros.json", function (datos) {
	$.each(datos, function (index, producto) {
		productosDisponibles.push(producto);
		$(".tiendaCuadrosContainer").append(
			`<div class="cardCuadros">
                            <div class="cardImgContainer">
                                <img src=${producto.img} alt="Foto Card Cuadros" class="cardFoto">
                            </div>
                            <div class="cardCuadrosInfo">
                                <h3>${producto.nombre}</h3>
                                <h4>${producto.desc}</h4>
                            </div>
                            <div class="cardCuadrosComprar">
                                <h2>$${producto.precio}</h2>
                                <a class="cardCuadrosComprarBoton" id="boton${producto.id}">COMPRAR</a>
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

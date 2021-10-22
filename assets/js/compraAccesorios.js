let productosDisponibles = []

$.get("../assets/json/listaAccesorios.json", function (datos) {
	$.each(datos, function (index, producto) {
		productosDisponibles.push(producto);
		$(".tiendaAccesoriosContainer").append(
			`<div class="cardAccesorios">
                            <div class="cardImgContainer">
                                <img src=${producto.img} alt="Foto Card Accesorios" class="cardFoto">
                            </div>
                            <div class="cardAccesoriosInfo">
                                <h3>${producto.nombre}</h3>
                                <h4>${producto.desc}</h4>
                            </div>
                            <div class="cardAccesoriosComprar">
                                <h2>$${producto.precio}</h2>
                                <a class="cardAccesoriosComprarBoton" id="boton${producto.id}">COMPRAR</a>
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

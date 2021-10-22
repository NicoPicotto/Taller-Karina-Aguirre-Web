//Declaración de constantes y carrito vacío
const contenedorCarrito = document.getElementById("cartContainer");
const contadorCarrito = document.getElementById("contadorCarrito");
const precioTotal = document.getElementById("precioTotal");
let carritoDeCompras = [];

//Función principal que crea un array nuevo con los productos seleccionados y pushea al modal
function agregarAlCarrito(id) {
	$("#mensajeConfirmacion").css("display", "none");
	botonConfirmar.style.display = "flex";
	//Chequeo de repetidos, si el ID existe le suma 1 a la cantidad
	let repetido = carritoDeCompras.find((prodRepetido) => prodRepetido.id == id);
	if (repetido) {
		repetido.cantidad = repetido.cantidad + 1;
		document.getElementById(
			`cantidad${repetido.id}`
		).innerHTML = `<h2 id="cantidad${repetido.id}">Cantidad: ${repetido.cantidad}</h2>`;
		actualizarCarrito();
	} else {
		//En caso de no estar repetido crea el div correspondiente en el modal
		let productoAgregar = productosDisponibles.find((prod) => prod.id == id);
		carritoDeCompras.push(productoAgregar);
		//Despliega en el HTML y actualiza
		mostrarCarrito(productoAgregar);
		actualizarCarrito();
	}
}

//Función para confirmar la compra, vacía el array, limpia el localStore y muestra un mensaje de confirmación.
let botonConfirmar = document.getElementById("botonConfirmar");
let infoDesaparecer = document.getElementById("cartInfoVariable");
botonConfirmar.addEventListener("click", () => {
	botonConfirmar.style.display = "none";
	infoDesaparecer.style.display = "none";
	carritoDeCompras = [];
	contenedorCarrito.innerHTML =
		'<h3 id="mensajeConfirmacion">Su compra fue procesada orden N° 564asdas1d5sadasd4</h3>';
	localStorage.clear();
	actualizarCarrito();
});

//Función para desplegar los productos del array en el carrito y también quitarlos
function mostrarCarrito(productoAgregar) {
	let div = document.createElement("div");
	div.classList.add("cartContainer");
	div.innerHTML = `		
                    <div class="cartImgContainer">
                        <img src=${productoAgregar.img} alt="Foto ${productoAgregar.nombre}">
                    </div>
                    <div class="cartInfoContainer">
                        <h2>${productoAgregar.nombre}</h2>
                        <h3 id="cantidad${productoAgregar.id}">Cantidad: ${productoAgregar.cantidad}</h3>
                    </div>
                    <div class="cartPrecioContainer">
                        <h2>$${productoAgregar.precio}</h2>
                    </div>
                    <a href="#" class="eliminarProducto" id="eliminar${productoAgregar.id}"><i class='bx bxs-trash' style='color:#f5dfd2' ></i></a>
                    `;

	contenedorCarrito.appendChild(div);

	//Función para eliminar productos
	let botonEliminar = document.getElementById(`eliminar${productoAgregar.id}`);
	botonEliminar.addEventListener("click", () => {
		if (productoAgregar.cantidad > 1) {
			productoAgregar.cantidad = productoAgregar.cantidad - 1;
			document.getElementById(
				`cantidad${productoAgregar.id}`
			).innerHTML = `Cantidad: ${productoAgregar.cantidad}`;
			actualizarCarrito();
			Toastify({
				text: "👎 Cantidad Reducida",
				style: {
					background: "red",
				},
				className: "info",
			}).showToast();
		} else {
			botonEliminar.parentElement.remove();
			carritoDeCompras = carritoDeCompras.filter(
				(prodEliminado) => prodEliminado.id != productoAgregar.id
			);
			actualizarCarrito();
			Toastify({
				text: "👎 Producto Eliminado",
				style: {
					background: "red",
				},
				className: "info",
			}).showToast();
		}
	});
}

//Función para actualizar siempre el carrito al finalizar una interacción
function actualizarCarrito() {
	contadorCarrito.innerText = carritoDeCompras.reduce(
		(acc, el) => acc + el.cantidad,
		0
	);
	precioTotal.innerText = carritoDeCompras.reduce(
		(acc, el) => acc + el.cantidad * el.precio,
		0
	);
	guardarLocalStorage();
}

//Función para guardar en Local Storage, llamada cada vez que se actualiza el carrito
function guardarLocalStorage() {
	localStorage.setItem("carritoGuardado", JSON.stringify(carritoDeCompras));
}

//Función para obtener del Local Storage el array formado en el carrito
function obtenerLocalStorage() {
	let carritoActualizado = JSON.parse(localStorage.getItem("carritoGuardado"));
	if (carritoActualizado) {
		carritoActualizado.forEach((el) => {
			carritoDeCompras.push(el);
			mostrarCarrito(el);
			actualizarCarrito();
		});
	}
}

obtenerLocalStorage();

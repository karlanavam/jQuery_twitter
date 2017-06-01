// Cuando carga la página
window.addEventListener("load", function () {
	
	var contador= 0;
	// Envío de To - Do
	var toDoForm = document.getElementById("to-do-form");
	toDoForm.addEventListener("submit", function (e) {
		e.preventDefault();
		// Obtenemos datos
		var contenedor = document.getElementById("posts");
		var mensajeContenedor = document.getElementById("message");
		var mensaje = mensajeContenedor.value;

		// Creamos elementos
		var postContenedor = document.createElement("article");
		/*var post = document.createElement("p");*/
		var postCheck = document.getElementById("input");
		var postTexto = document.getElementById("label");

		var identificador = "marcador-" + contador;
		// Personalizamos elementos
		postContenedor.className = "jumbotron";
		/*post.textContent = mensaje;*/
		postCheck.id = identificador;
		postCheck.typw = "checkbox";
		postTexto.setAtribute = ("for", identificador);
		postTexto = mensaje;
		

		// Agregarlos al DOM
		postContenedor.appendChild(post);

		// Agregarlo a un elemento existente para visualizarlo
		contenedor.appendChild(postContenedor);

		// Borrar contenido de textarea
		mensajeContenedor.value = "";
		contador++;
	});
});
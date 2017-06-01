var boton = document.getElementById("btn-submit");
var tweet = document.getElementById("tweet");
var areaDeTweets = document.getElementById("posts");

boton.addEventListener("click", imprimirTexto);

function imprimirTexto(e) {
	e.preventDefault();
	
	var parrafo = document.createElement("p");
	parrafo.innerHTML = tweet.value;
	
	areaDeTweets.appendChild(parrafo);
}



var boton = document.getElementById("btn-submit");
var tweet = document.getElementById("tweet");
var areaDeTweets = document.getElementById("posts");
var contador = document.getElementById("contador");


boton.addEventListener("click", imprimirTexto);
tweet.addEventListener("keyup", contarCaracter);

function imprimirTexto(e) {
	e.preventDefault();
	
	var parrafo = document.createElement("p");
	parrafo.innerHTML = tweet.value;
	
	areaDeTweets.appendChild(parrafo);
}

function contarCaracter() {
	var limiteContador = 140;
	var contar = tweet.value.length;
	var resta = limiteContador - contar;
	
	contador.innerHTML = resta;
	
	if (contar == 0) {
		boton.disabled = true;
	}
	
}


/*

//jQuerys
var $areaDeTweets = $("#posts");
var $tweet = $("#tweet");
var $boton = $("#btn-submit");
var $contadorCaracteres = $("#contadorCaracteres");
var $restaContador = $("#restaCaracteres");

$boton.click(imprimirTexto);
$tweet.keyup(contarCaracter);

function imprimirTexto() {
	var $contenedorTweet = $("<div />");
	var $parrafo = $("<p />");
	
	$areaDeTweets.append($contenedorTweet);
	$contenedorTweet.prepend($parrafo);
	
	$parrafo.text($tweet.val);
}


*/


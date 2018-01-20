window.addEventListener("load", cargaPagina);

var miGaleria = new Galeria(7);
function cargaPagina() {

    aleatoria();

    document.getElementById("primera").addEventListener("click", irPrimera);
    document.getElementById("anterior").addEventListener("click", irAnterior);
    document.getElementById("siguiente").addEventListener("click", irSiguiente);
    document.getElementById("ultima").addEventListener("click", irUltima);


}

function aleatoria() {
    var foto = miGaleria.posAleatorio();

    var imagen = document.getElementById("imagen");

    imagen.style.backgroundImage = "url(images/" + foto + ")";
    
    bloqueos();
}

function irPrimera() {
    var imagen = document.getElementById("imagen");

    miGaleria._cursor = 0;

    imagen.style.backgroundImage = "url(images/foto1.jpg)";

    bloqueos();
}

function irAnterior() {
    var posicion = miGaleria._cursor;
    var posicionAnterior = posicion - 1;

    var imagen = document.getElementById("imagen");
    miGaleria._cursor = posicionAnterior;

    imagen.style.backgroundImage = "url(images/foto" + posicionAnterior + ".jpg)";
    
    bloqueos();
}

function irSiguiente() {
    var posicion = miGaleria._cursor;
    var posicionSiguiente = posicion + 1;

    var imagen = document.getElementById("imagen");
    miGaleria._cursor = posicionSiguiente;

    if (miGaleria._cursor === "6") {
        document.getElementById("siguiente").className = "deshabilitado";
        document.getElementById("ultima").className = "deshabilitado";
    }

    imagen.style.backgroundImage = "url(images/foto" + posicionSiguiente + ".jpg)";
    
    bloqueos();
}

function irUltima() {
    var imagen = document.getElementById("imagen");

    miGaleria._cursor = 7;

    imagen.style.backgroundImage = "url(images/foto7.jpg)";

    bloqueos();

}

function bloqueos(){
    
    if (miGaleria._cursor===0) {
         document.getElementById("primera").className = "deshabilitado";
         document.getElementById("anterior").className = "deshabilitado";
         document.getElementById("ultima").className = "habilitado";
         document.getElementById("siguiente").className = "habilitado";
         document.getElementById("primera").disabled;
         document.getElementById("anterior").disabled;
    }
    
    if (miGaleria._cursor===7) {
         document.getElementById("primera").className = "habilitado";
         document.getElementById("anterior").className = "habilitado";
         document.getElementById("ultima").className = "deshabilitado";
         document.getElementById("siguiente").className = "deshabilitado";
         document.getElementById("siguiente").disabled;
         document.getElementById("ultima").disabled;
    }
    
    if (miGaleria._cursor!==0 && miGaleria._cursor!==7) {
         document.getElementById("primera").className = "habilitado";
         document.getElementById("anterior").className = "habilitado";
         document.getElementById("ultima").className = "habilitado";
         document.getElementById("siguiente").className = "habilitado";
    }


}

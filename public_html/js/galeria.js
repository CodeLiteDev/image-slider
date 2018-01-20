function Galeria(cantidad) {
    this._fotos = new Array(cantidad);
    this._cursor = 0;
    for (var i = 0; i < cantidad; i++) {
        this._fotos[i] = "foto" + (i+1) + ".jpg";
    }
}

Galeria.prototype.posAleatorio = function() {
    var tamanio = this._fotos.length;    
    this._cursor = Math.floor(Math.random() * (tamanio - 0) + 0);
    
    return this._fotos[this._cursor];
};

Galeria.prototype.posUltima = function() {
    var tamanio = this._fotos.length;
    this._cursor = tamanio-1;
    
    return this._fotos[this._cursor];
};

Galeria.prototype.posPrimera = function() {
    this._cursor = 0;
    
    return this._fotos[this._cursor];
};

Galeria.prototype.posAnterior = function() {
    this._cursor = this._cursor-1;
    
    return this._fotos[this._cursor];
};

Galeria.prototype.posSiguiente = function() {
    this._cursor = this._cursor+1;
    
    return this._fotos[this._cursor];
};



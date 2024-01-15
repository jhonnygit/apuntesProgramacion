
var Perro = function(nombre) {
    this.nombre = nombre  || "Sin nombre aún"
    this.patas = 4;
    this.ojos = 2;
};

// Mixin 1
var PerroGuia = function() {};

PerroGuia.prototype = {
    guiar: function() {
        console.log("Te estoy guiando...");
    }
};

// Mixin 2
var PerroSuperPoderes = function() {};

PerroSuperPoderes.prototype = {
	perseguir: function() {
        console.log("Te estoy persiguiendo....");
    },
    rastrear: function() {
        console.log("Te estoy rastreando...");
    },
    camuflar: function() {
        console.log("Ya no me ves...");
    },
    conducir: function() {
        console.log("Ahora... estoy conduciendo!");
    }
};

// Mixin 3
var PastorAleman = function () {};

PastorAleman.prototype = {
    colorLengua: "negra",
    colorOjos: "marrón",
    capacidadTrabajo: true,
    especialidad: "Pastoreo"
};


function extender(claseReceptora, claseDonante) {
    // solo extendemos los metodos que pasamos por parametros
    if (arguments[2]) {
        for (var i = 2, len = arguments.length; i < len; i++) {
            claseReceptora.prototype[arguments[i]] = claseDonante.prototype[arguments[i]];
        }
    }
    // extendemos todos los metodos
    else {
        for (var nombreMetodo in claseDonante.prototype) {
            // comprobamos que ya no existiese un metodo llamado igual
            if (!claseReceptora.prototype[nombreMetodo]) {
                claseReceptora.prototype[nombreMetodo] = claseDonante.prototype[nombreMetodo];
            }
        }
    }
}

// Extendemos todos los metodos
extender(Perro, PerroGuia);
extender(Perro, PastorAleman);

// Extendemos solo conducir
extender(Perro, PerroSuperPoderes, "conducir");

var miPerroGuia = new Perro("K9");

// utilizamos los metodos heredados
console.log("Nombre: "+miPerroGuia.nombre+"\nNúmero patas: "+miPerroGuia.patas+"\n Número ojos: "+miPerroGuia.ojos+"\n Color Lengua: "+miPerroGuia.colorLengua+"\n Color ojos: "+miPerroGuia.colorOjos+"\n Capacidad de trabajo: "+miPerroGuia.capacidadTrabajo+"\n Especialidad: "+miPerroGuia.especialidad);
miPerroGuia.guiar();
miPerroGuia.conducir();
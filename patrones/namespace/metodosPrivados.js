//funcion anonima
var myApp=(function(){
    var metodoPrivado1=function(){
        console.log("metodo privado 1");
    };
    var metodoPrivado2=function(){
        console.log("metodo privado 2");
    };
    var propiedadPrivada1='dato1';
    return {
        metodoPublico1:metodoPrivado1,
        propiedadesPublicas:{
            propiedad1:propiedadPrivada1,
            otro:"otro"
        },
        mas:{
            metodoPublico2:metodoPrivado2
        }
    }
})();
console.log(myApp)

//extendido
var myApp2=myApp2 || {};
(function(namespace){
    namespace.propiedad1="Propiedad 1";
    namespace.metodo1=function(){
        return "metodo1";
    };
})(myApp2);
console.log(myApp2);

//usando namespace
var myApp3 = myApp3 || {};

// sub-objeto
myApp3.ejemploDatos = {}

myApp3.ejemploDatos = {
    metodo: function () {
        console.log("esto es un metodo");           
    },
    propiedad1: 1,
    propiedad2: "dos"
}

console.log(myApp3)

//Simplificar la creación de elementos
var myApp4 = myApp4 || {};

myApp4.crearElemento = function(nombre){
    var partes = nombre.split('.');
    var nameSpace = myApp4;
    for (var i in partes) {
        if (!nameSpace[partes[i]]) {
            nameSpace[partes[i]] = {};
        }
        nameSpace = nameSpace[partes[i]];
    }
}

myApp4.crearElemento('uno.dos.tres.cuatro.cinco.y.mas.niveles');
myApp4.uno.dos.tres.cuatro.cinco.y.mas.niveles = "Funciona!"
console.log(myApp4);
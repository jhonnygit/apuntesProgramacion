var contador=0;//ID
var cocheEmpresa=function(marca,modelo,antiguedad,color,tipo){
    this.marca = marca;
    this.modelo = modelo;
    this.antiguedad = antiguedad;
    this.colorFondo = color;
    this.tipoCoche = tipo;
    this.id=contador++;

    var ITVPasada=true;
    var ITVfrecuencia="cada año";
    var seguroEnRegla=true;
    var companySeguros="segurExpress";
    var tipoSeguro="a terceros";

    this.dameDetalles=function(){
        return "Tu coche es un "+marca+" "+modelo+" con "+antiguedad+" años, clase "+tipo+" y color "+color;
    }

    function datosPrivados(){
        if(ITVPasada && seguroEnRegla){
            console.info("INFO: Todo en Regla, tienes que pasar la ITV "+ITVfrecuencia+". Tienes un seguro "+tipoSeguro+" con "+companySeguros);
        }else{
            console.error("ALERTA! El coche no puede usarse. El seguro o la ITV no esta en regla.");
        }
    }

    function identificador(){
        console.warn("Recuerda! Tu coche esta identificado como coche numero "+contador);
    }

    datosPrivados();
    this.dameDetalles();
    identificador();

}

var miCoche = new cocheEmpresa ("Audi", "S8", 2, "negro", "Berlina");
var otroCoche = new cocheEmpresa ("Audi", "A8", 5, "gris", "Berlina");
var miCoche2 = new cocheEmpresa ("Seat", "Ibiza", 9, "rojo", "Utilitario");
console.info("Total de coches de empresa hasta el momento "+contador);
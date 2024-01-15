const opcionesCoche={
    marca: "Land Rover",
    modelo: "Santana Aníbal",
    antiguedad: 35,
    color: "Marrón tierra",
    tipo: "4x4"
}

const opcionesFurgon = {
    taraMinima: 1200,  
    cargaUtil:  768,
    volumenCarga: 4.5,
    tipo: "furgon"
};

const coche= function(opciones){
    this.marca=opciones.marca;
    this.modelo=opciones.modelo;
    this.antiguedad=opciones.antiguedad;
    this.color=opciones.color;
    this.tipo=opciones.tipo;
    this.detalles=function(){
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Antiguedad: ${this.antiguedad}, Color: ${this.color}, Tipo: ${this.tipo}`); 
    }
}

const furgon = function (opciones) {
    this.taraMinima = opciones.taraMinima;
    this.cargaUtil = opciones.cargaUtil;
    this.volumenCarga = opciones.volumenCarga;

    this.detallesTecnicos = function(){
        console.warn(`Tu vehículo tiene una Tara mínima de ${this.taraMinima}. Carga útil de ${this.cargaUtil} y un volumen de carga de ${this.volumenCarga}m3`);
    };
};

//patron factory method

class factoriaVehiculos{
    createVehicle(options){
        if(options.tipo==="turismo" ||options.tipo==="4x4"){
            this.claseVehiculo=coche;
        }else{
            this.claseVehiculo=furgon;
        }
        return new this.claseVehiculo(options);
    }
}

factoriaVehiculos.prototype.claseVehiculo=coche;

//aplicando el patron
const factoriaCoches=new factoriaVehiculos();

const miFurgon=factoriaCoches.createVehicle(opcionesFurgon);
const mi4x4=factoriaCoches.createVehicle(opcionesCoche);
const miCoche=factoriaCoches.createVehicle({
    marca:"Seat",
    modelo:"Ibiza",
    antiguedad:20,
    color:"azul oscuro",
    tipo:"turismo"
});

//comprobaciones
function verInstanciacion(){
    console.log(`¿Es "miCoche" una instancia de "coche" ? ${miCoche instanceof coche}`);
    miCoche.detalles();
    console.log(`¿Es "mi4x4" una instancia de "coche" ? ${mi4x4 instanceof coche}`);
    mi4x4.detalles();
    console.log(`¿Es "miFurgon" una instancia de "furgon" ? ${miFurgon instanceof furgon}`);
    miFurgon.detallesTecnicos();
}

verInstanciacion();

//posiblemente no cumple con Solid - ocp

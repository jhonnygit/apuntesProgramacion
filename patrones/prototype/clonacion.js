//clonacion simple con object.create()
const coche = {
    marca: "Seat",
    modelo: "Panda",
    antiguedad: 20,
    color: "azul",
    tipo: "turismo"
  };
  
  const clonCoche = Object.create(coche);
  console.log(`${clonCoche.marca} ${clonCoche.modelo}`); 
  
  //clonacion compleja con object.create()

  const cochee = {
    marca: "Land Rover",
    modelo: "Santana Aníbal",
    antiguedad: 35,
    color: "Marrón tierra",
    tipo: "4x4",
    detalles: dameDetalles
  };
  
  const furgon = {
    taraMinima: 1200,
    cargaUtil: 768,
    volumenCarga: 4.5,
    detalles: detallesTecnicos
  };

  const conductor = {
    nombre: "Yo",
    apellido: "Mismo",
    experiencia: 10000,
    limite: 120,
    detalles() {
      console.log(`El conductor es ${this.nombre} ${this.apellido}. Con ${this.experiencia} horas de experiencia y una restricción a ${this.limite}Km/h.`);
    }
  };

  function dameDetalles(){
    console.log(`Tu coche es un ${this.marca} ${this.modelo} con ${this.antiguedad} años, clase ${this.tipo} y color ${this.color}`);
  };
  
  function detallesTecnicos(){
    console.warn(`Tu coche tiene una Tara mínima de ${this.taraMinima}. Carga útil de ${this.cargaUtil} y un volumen de carga de ${this.volumenCarga}m3`);
  };

  //patron prototipe
  const miPickup=Object.create(cochee,{
    'conductor':{value:conductor},
    'carga':{value:furgon}
  });

  miPickup.detalles();
  miPickup.carga.detalles();
  miPickup.conductor.detalles();
  console.log(`Es "coche" prototipo de "miPickup" ? ${coche.isPrototypeOf(miPickup)}`);
console.log(`Es "conductor" prototipo de "miPickup" ? ${conductor.isPrototypeOf(miPickup)}`);
console.log(`Es "furgon" prototipo de "miPickup" ? ${furgon.isPrototypeOf(miPickup)}`);

//Sin Object.create()
class constructorCoches{
    constructor(modelo,color){
        this.marca="Seat";
        this.modelo=modelo || "Ibiza";
        this.antiguedad = 20;
        this.color = color || "rojo";
        this.detalles = function (){
          console.log(`Tu coche es un ${this.marca} ${this.modelo} con ${this.antiguedad} años y color ${this.color}`);
        }

    }

    clone(){
        return new constructorCoches(this.modelo,this.color);
    }
}

//comprobaciones
const cocheRojo=new constructorCoches();
const otroCoche=constructorCoches.prototype.clone("Azul");
    
console.log(`¿Es "cocheRojo" una instancia de "constructorCoches"? ${cocheRojo instanceof constructorCoches}`); 
console.log(`¿Es "otroCoche" una instancia de "constructorCoches"? ${otroCoche instanceof constructorCoches}`); 
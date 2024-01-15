//cumple el principio SOLID OCP
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
class Vehiculo {
    constructor(opciones) {
      this.marca = opciones.marca;
      this.modelo = opciones.modelo;
      this.antiguedad = opciones.antiguedad;
      this.color = opciones.color;
      this.tipo = opciones.tipo;
    }
  
    detalles() {
      console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Antigüedad: ${this.antiguedad}, Color: ${this.color}, Tipo: ${this.tipo}`);
    }
  }
  
  class Coche extends Vehiculo {
    constructor(opciones) {
      super(opciones);
    }
  }
  
  class Furgon extends Vehiculo {
    constructor(opciones) {
      super(opciones);
      this.taraMinima = opciones.taraMinima;
      this.cargaUtil = opciones.cargaUtil;
      this.volumenCarga = opciones.volumenCarga;
    }
  
    detallesTecnicos() {
      console.warn(`Tu vehículo tiene una Tara mínima de ${this.taraMinima}. Carga útil de ${this.cargaUtil} y un volumen de carga de ${this.volumenCarga}m3`);
    }
  }
  
  class FactoriaVehiculos {
    createVehicle(options) {
      if (options.tipo === "turismo" || options.tipo === "4x4") {
        return new Coche(options);
      } else {
        return new Furgon(options);
      }
    }
  }
  
  const factoriaCoches = new FactoriaVehiculos();
  
  const miFurgon = factoriaCoches.createVehicle(opcionesFurgon);
  const mi4x4 = factoriaCoches.createVehicle(opcionesCoche);
  const miCoche = factoriaCoches.createVehicle({
    marca: "Seat",
    modelo: "Ibiza",
    antiguedad: 20,
    color: "azul oscuro",
    tipo: "turismo"
  });
  
  function verInstanciacion() {
    console.log(`¿Es "miCoche" una instancia de "Coche" ? ${miCoche instanceof Coche}`);
    miCoche.detalles();
    console.log(`¿Es "mi4x4" una instancia de "Coche" ? ${mi4x4 instanceof Coche}`);
    mi4x4.detalles();
    console.log(`¿Es "miFurgon" una instancia de "Furgon" ? ${miFurgon instanceof Furgon}`);
    miFurgon.detallesTecnicos();
  }
  
  verInstanciacion();
  
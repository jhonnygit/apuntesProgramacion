//ejemplo singleton sistema de ventas
class Comercial {
    // Propiedades protegidas
    constructor() {
      this.nombre = '';
      this.direccion = '';
      this.email = '';
    }
  
    static getInstance() {
      if (!Comercial._instance) {
        Comercial._instance = new Comercial();
      }
      return Comercial._instance;
    }
  
    visualiza() {
        console.log("Nombre: " + this.nombre);
        console.log("Dirección: " + this.direccion);
        console.log("Email: " + this.email);
    }  
  }
  
  // Uso del Singleton
  const comercial1 = Comercial.getInstance();
  comercial1.nombre="comercial Fernandez";
  comercial1.direccion="Calle dos";
  comercial1.email="comer@example.com";
  comercial1.visualiza();
  
  const comercial2 = Comercial.getInstance();
  comercial2.visualiza(); // Debería mostrar la misma información que comercial1
  
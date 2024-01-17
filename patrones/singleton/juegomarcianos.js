class Marcianos {
    constructor() {
      if (Marcianos.instance) {
        return Marcianos.instance;
      }
  
      Marcianos.instance = this;
      this.cantidad = 10;
    }
  
    static getMarcianos() {
      return new Marcianos();
    }
  
    cuantosQuedan() {
      console.log(`Marcianos restantes: ${this.cantidad}`);
    }
  }
  
  class Computadora {
    creaMarcianos() {
      // Lógica para crear marcianos
      // Puedes implementar aquí la generación de marcianos
      // y actualizar la cantidad en la instancia de Marcianos.
    }
  }
  
  class Jugador {
    destruirMarciano() {
      // Lógica para destruir un marciano
      // Puedes implementar aquí la lógica para destruir marcianos
      // y actualizar la cantidad en la instancia de Marcianos.
    }
  }
  
  class Juego {
    constructor() {
      this.marcianos = Marcianos.getMarcianos();
      this.computadora = new Computadora();
      this.jugador = new Jugador();
    }
  
    iniciarJuego() {
      let disparos;
  
      do {
        console.log("Digite los disparos: ");
        // Simulamos la entrada del usuario utilizando un valor predefinido
        disparos = 3; // Puedes cambiar esto para obtener entrada real del usuario
  
        for (let i = 0; i < disparos; i++) {
          this.jugador.destruirMarciano();
        }
        this.computadora.creaMarcianos();
        this.marcianos.cuantosQuedan();
      } while (disparos !== 0);
    }
  }
  
  // Uso del Singleton
  const juego = new Juego();
  juego.iniciarJuego();
  
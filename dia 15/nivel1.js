class Animal{
    constructor(name,edad,color,piernas){
        this.name = name;
        this.edad=edad;
        this.color=color;
        this.piernas=piernas;
    }

    getInfoAnimal(){
        return `Nombre: ${this.name}, Edad:${this.edad} , Color:${this.color}`;
    }

}

class Perro extends Animal{
    constructor(name, edad, color, piernas) {
        super(name,edad,color,piernas)
    }

    ladrar(){
        console.log("Ladrando");
    }

}

class Gato extends Animal{
    maillar(){
        console.log("Maullando");
    }
}

const perro=new Perro("zeus",3,"negro",4);
const gato=new Gato("hades",4,"naranja",4);

console.log(perro);
perro.ladrar();

console.log(gato);
gato.maillar();
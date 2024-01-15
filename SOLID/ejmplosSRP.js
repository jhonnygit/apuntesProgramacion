//bad
class ValidatePerson{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    ValidateName(name){
        if(name.length >3){
            return true;
        }else{
            return false;
        }
    }

    ValidateAge(age){
        if(age >18){
            return true;
        }else{
            return false;
        }
    }

    Display(){
        if(this.ValidateName(this.name) && this.ValidateAge(this.age)){
            console.log(`${this.name} is ${this.age}`);
        } else {
            console.log("invalid");
        }
    }
}

//good
class ValidatePersonGood{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    ValidateName(name){
        if(name.length >3){
            return true;
        }else{
            return false;
        }
    }

    ValidateAge(age){
        if(age >18){
            return true;
        }else{
            return false;
        }
    }  
}

class DisplaPerson{
    constructor(name,age){
        this.name=name;
        this.age=age;
        this.validate=new ValidatePersonGood(this.name,this.age);
    }
    display(){
        if(this.validate.ValidateName(this.name) && this.validate.ValidateAge(this.age)){
            console.log(`${this.name} is ${this.age}`);
        }else{
            console.log('Invalid');
        }
    }
}

persona=new DisplaPerson("jhonny",44);

console.log(persona);
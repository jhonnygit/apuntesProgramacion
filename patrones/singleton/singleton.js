const miSingleton=((()=>{
    let instancia;
    function crearinstancia(){
        const objeto=new Object();
        return objeto;
    }

    return{
        instanciacion(){
            if(!instancia){
                instancia=crearinstancia();
            }
            return instancia;
        }        
    }
}))();

let instancia1 = {};
let instancia2 = {};
console.log(`¿Es lo mismo? ${instancia1 === instancia2}`);  
instancia1 = miSingleton.instanciacion();
instancia2 = miSingleton.instanciacion();
console.log(`¿Es la misma instaciación? ${instancia1 === instancia2}`);
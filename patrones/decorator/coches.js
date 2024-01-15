//Añadiendo una funcionalidad
function constructorCoches(color){
    this.marca = "Seat";
    this.modelo = "Ibiza";
    this.antiguedad = 20;
    this.color = color || "rojo";
    this.extras=0,
    this.detalles = function (){
      console.log(`Tu coche es un ${this.marca} ${this.modelo} con ${this.antiguedad} años y color ${this.color}`);
    }  
}

const cocheRojo=new constructorCoches();
cocheRojo.detalles();

const otroCoche=new constructorCoches("Azul");
otroCoche.detalles();
//decorator
otroCoche.definirModelo=function(nuevoModelo){
    this.modelo=nuevoModelo;
};

otroCoche.definirColor=function(nuevoColor){
    this.color=nuevoColor;
};

otroCoche.definirModelo("Panda");
otroCoche.definirColor( "Azul Oscuro" );
otroCoche.detalles();
/** solo otroCoche se define con las funcionalidades */
const nuevoCoche=new constructorCoches("verde");
nuevoCoche.detalles();

//Añadiendo multiples funcionalidades

//decorator 1
function pgs(coche){
    coche.gps=true;
    coche.extras++;
}
//decorator 2

function aireAcondicionado(coche){
    coche["aire acondiccionado"]=true;
    coche.extras++;
}

//decorator 3
function elevaLunas(coche){
    coche.elevaLunas=true;
    coche.extras++;
}
//decorator 4
function farosLed(coche){
    coche["faros led"]=true;
    coche.extras++;
}
//decorator 5
function detallesTecnicos( coche ){
    coche.detallesTecnicos = () => {
      if(coche.extras > 0){
        console.log(`El coche tiene ${coche.extras} extras: \n`);
        (coche.gps) ? console.log("- GPS"):console.log("- SIN GPS");
        (coche["aire acondiccionado"]) ? console.log("- Aire acondiccionado"):console.log("- SIN Aire acondiccionado");
        (coche["faros led"]) ? console.log("- Faros Led"):console.log("- SIN Faros Led");
        (coche.elevaLunas) ? console.log("- Elevalunas"):console.log("- SIN Elevalunas");
      } else {
        console.log("Parece.. que no se han añadido extras aun.");
      }
    };
}

const cocheRojoo=new constructorCoches();
cocheRojoo.detalles();

//aplicando cambios
detallesTecnicos(cocheRojoo);
cocheRojoo.detallesTecnicos();
//mas cambios
pgs(cocheRojoo);
aireAcondicionado(cocheRojoo);
elevaLunas(cocheRojoo);
farosLed(cocheRojoo);
cocheRojoo.detallesTecnicos();

//otro
const cocheVerde=new constructorCoches("verde");
cocheVerde.detalles();



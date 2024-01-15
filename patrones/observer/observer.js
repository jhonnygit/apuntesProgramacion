const objetoPrincipal={
    observadores:[],
    suscripcion(f){
        this.observadores.push(f);
    },
    eliminarSuscripcion(f){
        this.observadores=this.observadores.filter(
            observador=>{
                if(observador!==f){
                    return observador;
                }
            }
        );
    },
    mensaje(o,objeto){
        const ambito=objeto||window;
        this.observadores.forEach((observador)=>{
            observador.call(ambito,o);
        });
    }
};

const otraFuncion1=item=>{
    console.info(`${item} desde otraFuncion1`);
};

function otraFuncion2(item) {
    console.info(`${item} desde otraFuncion2`);  
};

//Pruebas
objetoPrincipal.mensaje('mensaje #1');
objetoPrincipal.suscripcion(otraFuncion1);
objetoPrincipal.suscripcion(otraFuncion2);
objetoPrincipal.mensaje('mensaje #2');
objetoPrincipal.eliminarSuscripcion(otraFuncion2);
objetoPrincipal.mensaje('mensaje #2');
objetoPrincipal.suscripcion(otraFuncion2);
objetoPrincipal.mensaje('mensaje #3');
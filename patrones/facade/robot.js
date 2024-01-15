const moduloRobotAutonomo=((()=>{
    const _privado={
        velocidad:0,
        velocidadMax:20,
        velocidadMin:2,
        velocidadActual(){
            console.log(`Velocidad Actual:${_privado.velocidad}`);
        },
        ajustarVelocidad(valor){
            this.velocidad=valor;
        },
        acelerar(){
            if(_privado.velocidad>=_privado.velocidadMax){
                console.warn("Maxima velocidad alcanzada");
                _privado.velocidadActual();
            }else if(_privado.velocidad < _privado.velocidadMax){
                _privado.ajustarVelocidad(_privado.velocidad+1)
                _privado.velocidadActual();
            };
        },
        desacelerar(){
            if (_privado.velocidad <= _privado.velocidadMin ) {
                console.warn("Mínima velocidad Alcanzada!");
                _privado.velocidadActual();
              } else if (_privado.velocidad > _privado.velocidadMin){
                  _privado.ajustarVelocidad (_privado.velocidad-1)
                  _privado.velocidadActual();
              };
        },
        parar(){
            _privado.velocidad=0;
            console.log("robot parado");
        },
        validarVelocidad(valor){
            if(valor<=_privado.velocidadMax && valor >= _privado.velocidadMin){
                return true;
            }else {
                return false;
            }
        }
    };

    return{
        facadeAPI:{
            velocidadCrucero(valor){
                if(_privado.validarVelocidad(valor)){
                    _privado.ajustarVelocidad(valor);
                    _privado.velocidadActual();
                }else{
                    console.warn(`La velocidad deseada ${valor}Km/h no esta entre ${_privado.velocidadMin}Km/h y los ${_privado.velocidadMax}Km/h. permitidos` )
                }
            },
            masLento:_privado.desacelerar,
            masRapido:_privado.acelerar,
            stop:_privado.parar
        
        }
    };
})());

const robot=moduloRobotAutonomo.facadeAPI;
robot.velocidadCrucero(20);
robot.masRapido();
robot.masLento();
robot.stop();
robot.masLento();
const constructorCocheEmpresa=(function(marca,modelo,antiguedad,color){
    this.marca;
    this.modelo;
    this.antiguedad;
    this.color; 

    const _ITVPasada=true;
    const _ITVfrecuencia="Cada año";
    const _seguroEnRegla=true;
    const _companySeguros="seguroExpress";
    const _tipoSeguro="a terceros";

    function _dameDetalles(){
        console.log(`Tu coche es un ${marca} ${modelo} con ${antiguedad} años y color ${color}`);
    }

    function _datosPrivados(){
        if (_ITVPasada && _seguroEnRegla)
            console.log(`INFO: Todo en Regla, tienes que pasar la ITV ${_ITVfrecuencia}. Tienes un seguro ${_tipoSeguro} con ${_companySeguros}`);
        else{
            console.error("ALERTA! El coche no puede usarse. El seguro o la ITV no esta en regla.");
        }
    }

    return{
        datosPrivados:_datosPrivados,
        dameDetalles:_dameDetalles
    }
})();

const miCoche = new constructorCocheEmpresa("Audi", "S8", 2, "negro", "Berlina");
miCoche.datosPrivados();
miCoche.dameDetalles();
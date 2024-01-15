const iterador = ((() => {
    let indice = 0;
    const datos = { primerDato: 1, segundoDato: 'dos', tercerDato: 'tercero' };
    const llaves = Object.keys(datos);
    const totalDatos = llaves.length;

    return {
        siguiente() {
            let elemento;
            if (!this.tieneSiguiente()) {
                return null;
            }
            elemento = datos[llaves[indice]];
            indice ++;
            return elemento;
        },
        tieneSiguiente() {
            return indice < totalDatos;
        },
        rebobinar() {
            indice = 0;
            return datos[llaves[indice]];
        },
        actual() {
            return datos[llaves[indice]];
        }
    };
})());


while(iterador.tieneSiguiente()) {  
    console.log(iterador.siguiente());
}

iterador.rebobinar();  
console.log(iterador.actual());  

//patron iterator
const iterador=((()=>{
    let indice=0;
    const datos=[1,2,3,4,5,6,7,8,9,10];
    const totaldatos=datos.length;

    return{
        siguiente(){
            let elemento;
            if(!this.tieneSiguiente()){
                return null;
            }
            elemento=datos[indice];
            indice++;
            return elemento;
        },
        tieneSiguiente(){
            return(indice<totaldatos);
        },
        rebobinar(){
            indice=0;
            return datos[indice];
        },
        actual(){
            return datos[indice];
        }        
    };
})());

while(iterador.tieneSiguiente()){
    console.log(`${iterador.siguiente()}`);
}
iterador.rebobinar();  
console.log(iterador.actual());  

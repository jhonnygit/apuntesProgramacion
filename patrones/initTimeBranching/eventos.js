const myApp={};

myApp.eventos={
    agregar:null,
    quitar:null,
    manejador(evento){
        console.log("-----------------------------")
        console.log(`Type: ${evento.type}`); // Tipo
        console.log(`Bubbles: ${evento.bubbles}`); // sube por el DOM
        console.log(`Cancelable: ${evento.cancelable}`);
        console.log("CurrentTarget: ", evento.currentTarget);
        console.log(`DefaultPrevented: ${evento.defaultPrevented}`);
        console.log(`EventPhase: ${evento.eventPhase}`);
        console.log("Target: ", evento.target);
        console.log(`TimeStamp: ${evento.timeStamp}`);
        console.log(`IsTrusted: ${evento.isTrusted}`); // true - Usuario o false - Script
        console.log("=============================")
    }
};

if(typeof window.addEventListener==='function'){
    myApp.eventos.agregar=(el,type,fn)=>{
        el.addEventListener(type, fn,false);
    };
    myApp.eventos.quitar=(el,type,fn)=>{
        el.removeEventListener(type,fn,false);
    };
} else {
    myApp.eventos.agregar=(el,type,fn)=>{
        el.attachEvent(`on${type}`, fn);
    };
    myApp.eventos.quitar = (el, type, fn) => {
        el.detachEvent(`on${type}`, fn);
    };
}

myApp.eventos.agregar(window, 'click', myApp.eventos.manejador);
myApp.eventos.quitar(window, 'click', myApp.eventos.manejador);
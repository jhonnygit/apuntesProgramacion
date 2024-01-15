
const myApp = {};

myApp.eventos = {
    agregar(el, type, fn) {
        if (typeof window.addEventListener === 'function') {
            myApp.eventos.agregar = (el, type, fn) => {
                el.addEventListener(type, fn, false);
            };
        } else { // IE8
            myApp.eventos.agregar = (el, type, fn) => {
                el.attachEvent(`on${type}`, fn);
            };
        }

        myApp.eventos.agregar(el, type, fn);
    },
    quitar(el, type, fn) {
        if (typeof window.addEventListener === 'function') {
            myApp.eventos.quitar = (el, type, fn) => {
                el.removeEventListener(type, fn, false);
            };
        } else { // IE8
            myApp.eventos.quitar = (el, type, fn) => {
                el.detachEvent(`on${type}`, fn);
            };
        }
        myApp.eventos.quitar(el, type, fn);
    },
    manejador(evento) {

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


myApp.eventos.agregar(window, 'click', myApp.eventos.manejador);
myApp.eventos.quitar(window, 'click', myApp.eventos.manejador);


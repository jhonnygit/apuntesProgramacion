function memoize(fn){
    const cache={};
    return function(...args){
        const key=JSON.stringify(args);
        if(cache[key]){
            return cache[key];
        }

        const result =fn(...args);
        cache[key]=result;
        return result;
    }
}

function fib(n){
    if(n<2){
        return n;
    }
    return fib(n-1)+fib(n-2);
}
fib=memoize(fib);

fib(20);
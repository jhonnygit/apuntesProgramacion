//2
const solveQuadEquation=(a,b,c)=>{
    let discriminant=Math.pow(b,2)-4*a*c;
    if (discriminant<0) {
        return 'no real roots';}else{
            let x1=-b/(2*a);  
            let x2=-b/(-2*a)+ Math.sqrt((-b)/(2*a));
            return x1
            };
};

console.log(solveQuadEquation(1,4,4));

//3
const printArray=(args)=>{
    for(const element of args){
        console.log(element) 
    }
   
}

console.log(printArray([2,3,4,5]))

//6 
const reverseArray=(args)=>{
    let reversed=[];
    for (let i = args.length-1 ;i>=0;--i ){
        reversed.push(args[i]);
    }
    return reversed;
}

console.log(reverseArray([1, 2, 3, 4, 5]))

//8


    
       




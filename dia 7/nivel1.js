function fullName(){
    return "jhonny fernandez"
}

console.log(fullName());
//2
function fullName2(firstName,lastName){
    return `${firstName} ${lastName}`  //template literals
}

console.log(fullName2("dulce","colque"));
//3
const addNumbers=(num1,num2)=>num1+num2;
console.log(addNumbers(2,4))
//4
function areaOfRectangulo(length,width){
    return length*width
}
console.log(areaOfRectangulo(5,4))

//5
const perimeterOfRectangle=(length,width)=>2*(length+width);
console.log(perimeterOfRectangle(2,4));


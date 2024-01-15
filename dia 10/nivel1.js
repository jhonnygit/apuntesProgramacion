const countries = ["Finland", "Sweden", "Norway"];
//1
const setnew=new Set();
//2
const num=new Set();
for(let i=0;i<=10;i++){
    num.add(i);
}
console.log(num);
//3
num.delete(5);
console.log(num);
//4
num.clear();
console.log(num);
//5
const paises=new Set(countries);
console.log(paises);
//6
const countriesmap=new Map();
countries.forEach(element => {
    console.log(element,element.length);
    countriesmap.set(element,element.length);
});
console.log(countriesmap);

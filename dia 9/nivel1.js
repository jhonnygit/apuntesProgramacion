const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
//1 forEach, map, filter, and reduce.

names.forEach(element=>console.log(element.toLocaleUpperCase()));
let sum=0;
numbers.forEach(num=>sum+=num);
console.log(sum);

const productos=products.map((product)=>(`${product.product}-${product.price}`));
console.log(productos);

const cuadrados=numbers.map((num)=>num*num);
console.log(cuadrados);

const endword=countries.filter((country)=>country.endsWith("en"));
console.log(endword);

const precioMayor=products.filter((product)=>product.price>=7);
console.log(precioMayor);

const suma=numbers.reduce((acc,cur)=>acc+cur,0);
console.log(suma);

//2

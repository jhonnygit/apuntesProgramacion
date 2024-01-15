//1
const dog={}
//2
console.log(dog)
//3
const dogs={
    name:'wang',
    legs:"pasto",
    color:"black",
    age:12,
    bark:"woof woof",
}

//5
dogs.breed="green";
dogs.getDogInfo=function(){
    let complete=`${this.name} is a dog ${this.legs}`;
    return complete;
}
console.log(dogs.getDogInfo())
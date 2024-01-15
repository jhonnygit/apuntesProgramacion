//bad
const iceCreamFlavors=['chocolate','vanilla'];

class makeIceCream{
    constructor(flavor){
        this.flavor = flavor;
    }
    make(){
        if(iceCreamFlavors.indexOf(this.flavor)>-1){
            return `You made a ${this.flavor} ice cream.`;
        }else{
            return "Epic fail. No ice cream for you";
        }
    }
}

//good
class addIceCream{
    constructor(flavor){
        this.flavor=flavor;
    }

    add(){
        iceCreamFlavors.push(this.flavor);
    }
}

iceCream1=new makeIceCream('vanilla');
console.log(iceCream1.make());
iceCream2=new makeIceCream('banana');
console.log(iceCream2.make());

let addBananaFlavor=new addIceCream('banana');
addBananaFlavor.add();
console.log(iceCream2.make());
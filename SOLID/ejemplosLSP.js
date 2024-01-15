//bad
class Rectangle{
    setWidth(width){
        this.width = width;
    }

    setHeigth(height){
        this.heigth = height;
    }

    setColor(color){
        this.color = color;
    }

    getArea(){
        return this.width * this.heigth;
    }

}

class Square extends Rectangle{
    setWidth(width){
        this.width=width;
        this.heigth=width;
    }

    setHeigth(height){
        this.width=height;
        this.heigth=height;
    }
}

let rectangle=new Rectangle();
rectangle.setWidth(5);
rectangle.setHeigth(3);
console.log(rectangle.getArea());
//sub clase bad rompe
let square=new Square();
square.setWidth(4);
square.setHeigth(5);
console.log(square.getArea());

//good solution general class
class Shape {
    setColor(color){
        this.color = color;
    }

    getColor(){
        return this.color;
    }

}

class Rectanglee extends Shape{
    setWidth(width){
        this.width = width;
    }

    setHeigth(height){
        this.heigth = height;
    }

    getArea(){
        return this.width * this.heigth;
    }
}

class Squaree extends Shape{
    SetSide(side){
        this.side = side;
    }
    getArea(){
        return Math.pow(this.side,2) ;
    }
}

let shape=new Shape();
shape.setColor('red');
console.log(shape.getColor());

let rectanglee=new Rectanglee();
rectanglee.setColor('green');
rectanglee.setWidth(5);
rectanglee.setHeigth(6);
console.log(rectanglee.getArea());

let squaree=new Squaree();
squaree.setColor('blue');
squaree.SetSide(7);
console.log(squaree.getArea());
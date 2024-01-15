// @See: http://blog.benoitvallon.com/data-structures-in-javascript/the-array-data-structure/
class MyArray {
    constructor() {
      this.array = [];
    }
  
    add(data) {
      this.array.push(data);
    }
  
    remove(data) {
      this.array = this.array.filter(current => current !== data);
    }
  
    search(data) {
      const foundIndex = this.array.indexOf(data);
      if(~foundIndex) {
        return foundIndex;
      }
  
      return null;
    }
  
    getAtIndex(index) {
      return this.array[index];
    }
  
    length() {
      return this.array.length;
    }
  
    print() {
      console.log(this.array.join(' '));
    }
  }
  
  const array = new MyArray();
  array.add(1);
  array.add(2);
  array.add(3);
  array.add(4);
  array.print(); 
  console.log('search 3 gives index 2:', array.search(3)); 
  console.log('getAtIndex 2 gives 3:', array.getAtIndex(2)); 
  console.log('length is 4:', array.length()); 
  array.remove(3);
  array.print();
  array.add(5);
  array.add(5);
  array.print(); 
  array.remove(5);
  array.print(); 
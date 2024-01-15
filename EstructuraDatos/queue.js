//Cola
class Queue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(value) {
      this.queue.push(value);
    }
  
    dequeue() {
      return this.queue.shift();
    }
  
    peek() {
      return this.queue[0];
    }
  
    length() {
      return this.queue.length;
    }
  
    print() {
      console.log(this.queue.join(' '));
    }
  }
  
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.print(); 
  console.log('length is 3:', queue.length()); 
  console.log('peek is 1:', queue.peek()); 
  console.log('dequeue is 1:', queue.dequeue()); 
  queue.print(); 
  console.log('dequeue is 2:', queue.dequeue());  
  console.log('length is 1:', queue.length()); 
  console.log('dequeue is 3:', queue.dequeue());
  queue.print();
  console.log('peek is undefined:', queue.peek()); 
  console.log('dequeue is undefined:', queue.dequeue()); 
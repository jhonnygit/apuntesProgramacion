
function Node(data) {
    this.data = data;
    this.previous = null;
    this.next = null;
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.numberOfValues = 0;
    }
  
    add(data) {
      const node = new Node(data);
      if(!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        node.previous = this.tail;
        this.tail.next = node;
        this.tail = node;
      }
      this.numberOfValues++;
    }
  
    remove(data) {
      let current = this.head;
      while(current) {
        if(current.data === data) {
          if(current === this.head && current === this.tail) {
            this.head = null;
            this.tail = null;
          } else if(current === this.head) {
            this.head = this.head.next;
            this.head.previous = null;
          } else if(current === this.tail) {
            this.tail = this.tail.previous;
            this.tail.next = null;
          } else {
            current.previous.next = current.next;
            current.next.previous = current.previous;
          }
          this.numberOfValues--;
        }
        current = current.next;
      }
    }
  
    insertAfter(data, toNodeData) {
      let current = this.head;
      while(current) {
        if(current.data === toNodeData) {
          const node = new Node(data);
          if(current === this.tail) {
            this.add(data);
          } else {
            current.next.previous = node;
            node.previous = current;
            node.next = current.next;
            current.next = node;
            this.numberOfValues++;
          }
        }
        current = current.next;
      }
    }
  
    traverse(fn) {
      let current = this.head;
      while(current) {
        if(fn) {
          fn(current);
        }
        current = current.next;
      }
    }
  
    traverseReverse(fn) {
      let current = this.tail;
      while(current) {
        if(fn) {
          fn(current);
        }
        current = current.previous;
      }
    }
  
    length() {
      return this.numberOfValues;
    }
  
    print() {
      let string = '';
      let current = this.head;
      while(current) {
        string += `${current.data} `;
        current = current.next;
      }
      console.log(string.trim());
    }
  }
  
  const doublyLinkedList = new DoublyLinkedList();
  doublyLinkedList.print(); 
  doublyLinkedList.add(1);
  doublyLinkedList.add(2);
  doublyLinkedList.add(3);
  doublyLinkedList.add(4);
  doublyLinkedList.print(); 
  console.log('length is 4:', doublyLinkedList.length()); 
  doublyLinkedList.remove(3);
  doublyLinkedList.print(); 
  doublyLinkedList.remove(9); 
  doublyLinkedList.print(); 
  doublyLinkedList.remove(1); 
  doublyLinkedList.print(); 
  doublyLinkedList.remove(4); 
  doublyLinkedList.print(); 
  console.log('length is 1:', doublyLinkedList.length()); 
  doublyLinkedList.remove(2); 
  doublyLinkedList.print(); 
  console.log('length is 0:', doublyLinkedList.length()); 
  doublyLinkedList.add(2);
  doublyLinkedList.add(6);
  doublyLinkedList.print(); 
  doublyLinkedList.insertAfter(3, 2);
  doublyLinkedList.print(); 
  doublyLinkedList.traverseReverse(node => { console.log(node.data); });
  doublyLinkedList.insertAfter(4, 3);
  doublyLinkedList.print(); 
  doublyLinkedList.insertAfter(5, 9); 
  doublyLinkedList.print(); 
  doublyLinkedList.insertAfter(5, 4);
  doublyLinkedList.insertAfter(7, 6); 
  doublyLinkedList.print(); 
  doublyLinkedList.add(8); 
  doublyLinkedList.print(); 
  console.log('length is 7:', doublyLinkedList.length()); 
  doublyLinkedList.traverse(node => { node.data = node.data + 10; });
  doublyLinkedList.print(); 
  doublyLinkedList.traverse(node => { console.log(node.data); }); 
  console.log('length is 7:', doublyLinkedList.length()); 
  doublyLinkedList.traverseReverse(node => { console.log(node.data); }); 
  doublyLinkedList.print(); 
  console.log('length is 7:', doublyLinkedList.length()); 
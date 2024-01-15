//@See: http://blog.benoitvallon.com/data-structures-in-javascript/the-singly-linked-list-data-structure/
function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  class SinglyLinkedList {
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
        this.tail.next = node;
        this.tail = node;
      }
      this.numberOfValues++;
    }
  
    remove(data) {
      let previous = this.head;
      let current = this.head;
      while(current) {
        if(current.data === data) {
          if(current === this.head) {
            this.head = this.head.next;
          }
          if(current === this.tail) {
            this.tail = previous;
          }
          previous.next = current.next;
          this.numberOfValues--;
        } else {
          previous = current;
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
            this.tail.next = node;
            this.tail = node;
          } else {
            node.next = current.next;
            current.next = node;
          }
          this.numberOfValues++;
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
  
  const singlyLinkedList = new SinglyLinkedList();
  singlyLinkedList.print(); 
  singlyLinkedList.add(1);
  singlyLinkedList.add(2);
  singlyLinkedList.add(3);
  singlyLinkedList.add(4);
  singlyLinkedList.print(); 
  console.log('length is 4:', singlyLinkedList.length()); 
  singlyLinkedList.remove(3); 
  singlyLinkedList.print(); 
  singlyLinkedList.remove(9); 
  singlyLinkedList.print(); 
  singlyLinkedList.remove(1); 
  singlyLinkedList.print(); 
  singlyLinkedList.remove(4); 
  singlyLinkedList.print(); 
  console.log('length is 1:', singlyLinkedList.length()); 
  singlyLinkedList.add(6);
  singlyLinkedList.print(); 
  singlyLinkedList.insertAfter(3, 2);
  singlyLinkedList.print(); 
  singlyLinkedList.insertAfter(4, 3);
  singlyLinkedList.print(); 
  singlyLinkedList.insertAfter(5, 9); 
  singlyLinkedList.print(); 
  singlyLinkedList.insertAfter(5, 4);
  singlyLinkedList.insertAfter(7, 6); 
  singlyLinkedList.print(); 
  singlyLinkedList.add(8); 
  singlyLinkedList.print(); 
  console.log('length is 7:', singlyLinkedList.length()); 
  singlyLinkedList.traverse(node => { node.data = node.data + 10; });
  singlyLinkedList.print(); 
  singlyLinkedList.traverse(node => { console.log(node.data); }); 
  console.log('length is 7:', singlyLinkedList.length()); 
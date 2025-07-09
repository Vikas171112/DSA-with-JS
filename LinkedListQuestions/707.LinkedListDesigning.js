class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  get(index) {
    if (index < 0 || index >= this.size) {
      return -1;
    }
    let current = this.head;
    let i = 0;
    while (i < index) {
      current = current.next;
      i++;
    }
    return current.value;
  }

  addAtHead(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  addAtTail(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      let temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = newNode;
    }
    this.size++;
  }

  addAtIndex(index, val) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.addAtHead(val);
      return;
    }
    let prev = null;
    let current = this.head;
    let i = 0;
    while (i < index) {
      prev = current;
      current = current.next;
      i++;
    }
    const newNode = new Node(val);
    prev.next = newNode;
    newNode.next = current;
    this.size++;
  }

  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) {
      return;
    }
    if (index === 0) {
      const temp = this.head;
      this.head = this.head.next;
      temp.next = null;
    } else {
      let prev = null;
      let current = this.head;
      let i = 0;
      while (i < index) {
        prev = current;
        current = current.next;
        i++;
      }
      prev.next = current.next;
      current.next = null;
    }
    this.size--;
  }
}

// Example usage:
const list = new MyLinkedList();
list.addAtHead(1);
list.addAtTail(2);
list.addAtIndex(1, 3); // List: 1 -> 3 -> 2
console.log(list.get(1)); // Output: 3
list.deleteAtIndex(1); // List: 1 -> 2
console.log(list.get(1)); // Output: 2

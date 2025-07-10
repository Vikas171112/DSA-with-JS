class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
  }

  removeDuplicatesfromSortedlist() {
    let current = this.head;
    while (current && current.next) {
      if (current.val === current.next.val) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
    return this.head;
  }
}

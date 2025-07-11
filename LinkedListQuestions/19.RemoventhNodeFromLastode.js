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

  removenthnodefromlast(head, n) {
    let fast = head;
    let i = 0;
    while (i < n && fast != null) {
      i++;
      fast = fast.next;
    }
    if (fast == null) {
      let newHead = head.next;
      head.next = null;
      return newHead;
    }
    let slow = head;
    while (fast.next != null) {
      slow = slow.next;
      fast = fast.next;
    }
    let nodetobeDel = slow.next;
    slow.next = nodetobeDel.next;
    nodetobeDel.next = null;
    return head;
  }
}

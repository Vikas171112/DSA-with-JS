class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
class MyLinkedList {
  constructor() {
    this.head = null;
  }
  swapNode(head, k) {
    let fast = head;
    for (let i = 0; i < k - 1; i++) {
      fast = fast.next;
    }
    let firstKth = fast;
    let slow = head;
    while (fast.next !== null) {
      slow = slow.next;
      fast = fast.next;
    }
    let lastKthElement = slow;
    let temp = firstKth.value;
    firstKth.value = lastKthElement.value;
    lastKthElement.value = temp;
    return head;
  }
}

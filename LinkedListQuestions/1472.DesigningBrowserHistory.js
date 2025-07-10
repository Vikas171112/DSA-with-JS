class Node {
  constructor(url) {
    this.url = url;
    this.next = null;
    this.prev = null;
  }
}
class BrowserHistory {
  constructor(homepage) {
    let newNode = new Node(homepage);
    this.current = newNode;
  }
  visit(url) {
    let newNode = new Node(url);
    this.current.next = newNode;
    newNode.prev = this.current;
    newNode.next = null;
    this.current = newNode;
  }
  back(steps) {
    while (steps > 0 && this.current.prev) {
      this.current = this.current.prev;
      steps--;
    }
    return this.current.url;
  }
  forward(steps) {
    while (steps > 0 && this.current.next) {
      this.current = this.current.next;
      steps--;
    }
    return this.current.url;
  }
}
const browser = new BrowserHistory("leetcode.com");
browser.visit("google.com");
browser.visit("facebook.com");
browser.visit("youtube.com");

console.log(browser.back(1)); // facebook.com
console.log(browser.back(1)); // google.com
console.log(browser.forward(1)); // facebook.com
browser.visit("linkedin.com");
console.log(browser.forward(2)); // linkedin.com
console.log(browser.back(2)); // google.com
console.log(browser.back(7)); // leetcode.com

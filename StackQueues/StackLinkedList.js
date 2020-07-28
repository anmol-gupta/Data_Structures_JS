class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingpPointer = this.top;
      this.top = newNode;
      this.top.next = holdingpPointer;
    }
    this.length++;
    console.log(this);
    return this;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    console.log(this);
    return this;
  }

  isEmpty() {
    if (this.top === null && this.bottom === null) {
      return true;
    } else {
      return false;
    }
  }
}

const stack = new Stack();
stack.push(5);
stack.push(4);
stack.push(3);
stack.pop();
stack.pop();
stack.pop();
console.log(stack.isEmpty());
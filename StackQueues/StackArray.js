class Stack {
  constructor() {
    this.array = [];
  }
  push(value) {
    this.array.push(value);
    console.log(this);
    return this;
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  pop() {
    this.array.pop();
    console.log(this);
    return this;
  }
  isEmpty() {
      return (this.array.length == 0);
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

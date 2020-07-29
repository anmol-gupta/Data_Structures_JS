class QueueUsingStack {
  constructor() {
    this.first = [];
    this.last = [];
  }
  enqueue(value) {
    const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value);
    console.log(this);
    return this;
  }
  dequeue() {
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop();
    console.log(this);
    return this;
  }
  peek() {
    if (this.last.length > 0) {
      return this.last[0];
    }
    console.log(this.first[this.first.length - 1]);
    return this.first[this.first.length - 1];
  }
}

const myQueue = new QueueUsingStack();
myQueue.peek();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.peek();
myQueue.dequeue();
myQueue.enqueue('Anmol');
myQueue.dequeue();
myQueue.dequeue();
myQueue.peek();
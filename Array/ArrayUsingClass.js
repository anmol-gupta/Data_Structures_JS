class MyArray {
    constructor() {
      this.length = 0;
      this.data = {};
    }
  
    get(index) {
      return this.data[index];
    }
    push(item) {
      this.data[this.length] = item;
      this.length++;
      return this.length;
    }
    pop() {
      if (this.length > 0) {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
      } else {
        console.log("Underflow");
      }
    }
    delete(index) {
      const item = this.data[index];
      this.shiftIndex(index);
    }
    shiftIndex(index) {
      if (0 <= index && index < this.length) {
        for (let i = index; i < this.length - 1; i++) {
          this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
      }
      else {
          console.log("Underflow from shiftIndex");
      }
    }
  }
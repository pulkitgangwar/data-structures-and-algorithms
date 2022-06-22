class Stack<T> {
  private data: T[] = [];
  private index: number = -1;

  push(value: T): T {
    this.data[++this.index] = value;
    return this.data[this.index];
  }

  pop() {
    // shift array algorithm
    this.index--;
    return this.data.pop();
  }

  peek() {
    return this.data[this.index];
  }

  printData() {
    this.data.forEach((item) => {
      console.log(item);
    });
  }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.pop(), "pop");
console.log(stack.peek(), "peek");

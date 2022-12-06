class MinHeap {
  public storage: number[] = [];
  public length: number = 0;

  hasParent(index: number): boolean {
    return Math.floor(index - 1 / 2) >= 0;
  }

  hasLeftChild(index: number): boolean {
    return 2 * index + 1 < this.length;
  }

  hasRightChild(index: number): boolean {
    return 2 * index + 2 < this.length;
  }

  getParentIndex(index: number): number {
    return Math.floor(index - 1 / 2);
  }

  getLeftChildIndex(index: number): number {
    return 2 * index + 1;
  }

  getRightChildIndex(index: number): number {
    return 2 * index + 2;
  }

  getParentValue(index: number): number {
    return this.storage[this.getParentIndex(index)];
  }

  getLeftChildValue(index: number): number {
    return this.storage[this.getLeftChildIndex(index)];
  }

  getRightChildValue(index: number): number {
    return this.storage[this.getRightChildIndex(index)];
  }

  swap(index: number, index2: number): void {
    let temp = this.storage[index];
    this.storage[index] = this.storage[index2];
    this.storage[index2] = temp;
  }

  insertIterative(value: number): void {
    this.storage[this.length] = value;
    this.length++;
    this.heapifyUp();
  }

  removeIterative(): void {
    if (!this.length) {
      throw new Error("heap is empty");
    }
    let data = this.storage[0];
    this.storage[0] = this.storage[this.length - 1];
    this.length--;
    this.heapifyDown();
  }

  heapifyDown(): void {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.getRightChildValue(index) < this.getLeftChildValue(index)
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      if (this.storage[index] < this.storage[smallerChildIndex]) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }

  heapifyUp(): void {
    let index = this.length - 1;
    while (
      this.hasParent(index) &&
      this.getParentValue(index) > this.storage[index]
    ) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  printList(): void {
    for (let index = 0; index < this.length; index++) {
      console.log(this.storage[index]);
    }
  }
}

const heap = new MinHeap();

heap.insertIterative(1);
heap.insertIterative(0);
heap.insertIterative(-1);
heap.insertIterative(122);
// heap.removeIterative();
// heap.removeIterative();
// heap.removeIterative();

heap.printList();

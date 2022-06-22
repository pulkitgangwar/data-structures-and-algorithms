class ListNode {
  public value: number;
  public next: ListNode | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

class LinkedList {
  private head: ListNode | null = null;
  private tail: ListNode | null = null;
  private length: number = 0;

  private push(value: number): void {
    const newNode = new ListNode(value);

    if (!this.tail || !this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  private insertFirst(value: number): void {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  private removeFirst(): number {
    if (!this.head) {
      return -1;
    }

    let current = this.head;
    this.head = this.head.next;
    current.next = null;
    this.length--;
    return current.value;
  }

  private removeLast(): number {
    if (!this.tail || !this.head) return -1;

    let current: ListNode = this.head;

    while (current?.next?.next) {
      current = current.next;
    }

    this.tail = current;
    current.next = null;
    this.length--;
    return current.value;
  }

  insert(index: number, value: number) {
    if (index > this.length) {
      throw new Error("invalid index provided");
    }

    if (index === 0 || !this.head) {
      return this.insertFirst(value);
    }

    if (index === this.length) {
      return this.push(value);
    }

    let counter = 0;
    let current: ListNode | null = this.head;
    let previous: ListNode = current;

    while (counter !== index) {
      previous = current as ListNode;
      current = current ? current.next : null;
      counter++;
    }

    const newNode = new ListNode(value);
    previous.next = newNode;
    newNode.next = current;
    this.length++;
  }

  remove(index: number): number {
    if (index > this.length || index < 0) {
      throw new Error("invalid index provided");
    }

    if (index === 0 || !this.head) {
      return this.removeFirst();
    }

    if (index === this.length) {
      return this.removeLast();
    }

    let counter = 0;
    let current = this.head;
    let previous = this.head;

    while (counter !== index && current.next) {
      previous = current;
      current = current.next;
      counter++;
    }

    const removedElement = current;
    previous.next = current.next;
    removedElement.next = null;
    this.length--;
    return removedElement.value;
  }

  printList(): void {
    let current: ListNode | null = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  reverse() {}
}

const list = new LinkedList();

list.insert(0, 100);
list.insert(1, 200);
list.insert(2, 300);
list.remove(1);

list.printList();

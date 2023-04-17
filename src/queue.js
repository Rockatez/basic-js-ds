const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null; // начало очереди
    this.tail = null; // конец очереди
  }

  getUnderlyingList() {
    return this.head; // возвращает голову очереди, что является началом списка
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (!this.head) { // если очередь пуста
      this.head = newNode;
      this.tail = newNode;
    } else { // если очередь не пуста
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (!this.head) { // если очередь пуста
      return null;
    }

    const removedNode = this.head;

    if (this.head === this.tail) { // если в очереди только один элемент
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    return removedNode.value;
  }
}

module.exports = {
  Queue
};

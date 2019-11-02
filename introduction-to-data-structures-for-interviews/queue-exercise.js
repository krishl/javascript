/** Class representing a Queue. 
 * @constructor
*/

class Queue {

  constructor() {
    this._storage = {};
    this._firstIndex = 0;
    this._lastIndex = 0;
  }
  /*
  * Enqueues a new value at the end of the queue
  * @param {*} value the value to enqueue
  */
  enqueue(value) {
    this._storage[this._lastIndex] = value;
    this._lastIndex++; 
  }

  /*
  * Dequeues the value from the beginning of the queue and returns it
  * @return {*} the first and oldest value in the queue
  */
  dequeue() {
    let dequeued = this._storage[this._firstIndex];
    delete this._storage[this._firstIndex];
    this._firstIndex++;
    return dequeued;
  }
  /*
  * Returns the value at the beginning of the queue without removing it from the queue
  * @return {*} the first and oldest value in the queue
  */
  peek() {
    return this._storage[this._firstIndex];
  }
}

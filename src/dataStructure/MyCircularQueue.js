
/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this._list = new Array(k)
    this._head = -1;
    this._tail = -1;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    //入队是添加到尾部， tail ++；
    //如果队列已经满了，那么将不能再添加新的元素
    if(this.isFull()){
        return false;
    }
    if(this.isEmpty()){
        this._head = 0;
    }
    
    this._tail = (this._tail + 1) % this._list.length;
    this._list[this._tail] = value;
    return true;

};

/*
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty()){
        return false;
    }
    this._list[this._head] = null;
    if(this._head === this._tail){
        this._head = this._tail = -1;
    }else{
        this._head = (this._head + 1) % this._list.length;
    }
    return true;
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(this.isEmpty()){
        return -1;
    }
    return this._list[this._head];
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.isEmpty()){
        return -1;
    }
    return this._list[this._tail]
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    if (this._head === -1 && this._tail === -1) {
        return true;
    }
    return false;
    
};


MyCircularQueue.prototype.isFull = function() {
    const nextIndex =(this._tail + 1) % this._list.length; 
    return nextIndex === this._head;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = Object.create(MyCircularQueue).createNew(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
var circularQueue = new MyCircularQueue(3);
// mycircularQueue.enQueue(1);
// mycircularQueue.enQueue(2);
// mycircularQueue.enQueue(3);
// mycircularQueue.deQueue();
// mycircularQueue.enQueue(4);
// mycircularQueue.enQueue(5);
// mycircularQueue.enQueue(6);
// MyCircularQueue circularQueue = new MycircularQueue(3); // 设置长度为 3

circularQueue.enQueue(1);  // 返回 true

circularQueue.enQueue(2);  // 返回 true

circularQueue.enQueue(3);  // 返回 true

circularQueue.enQueue(4);  // 返回 false，队列已满

// circularQueue.deQueue();
// circularQueue.deQueue();
// circularQueue.deQueue();
// circularQueue.deQueue();
// circularQueue.deQueue();

circularQueue.Rear();  // 返回 3

circularQueue.isFull();  // 返回 true

circularQueue.deQueue();  // 返回 true

circularQueue.enQueue(4);  // 返回 true

circularQueue.Rear();  // 返回 4
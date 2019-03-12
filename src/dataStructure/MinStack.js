/**
 * initialize your data structure here.
 * 使用2个数组来解决
 * 1个数组存放所有的数据，另外一个数组放置最小的数据
 */
var MinStack = function() {
    this.min = null;    
    this.list= [];
    this.s2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if (this.s2.length === 0 || this.s2[this.s2.length - 1] >= x ) {
        this.s2.push(x);
    }
    this.list.push(x)
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let val = this.list.pop();
    if(val === this.s2[this.s2.length - 1]){
        this.s2.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.list[this.list.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.s2[this.s2.length - 1];
};


/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
let minstack = new MinStack();
minstack.push(-2);
minstack.push(0);
minstack.push(-3);
console.log(minstack.getMin())
minstack.pop();
console.log(minstack.getMin())

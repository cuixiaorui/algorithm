/**
 * 堆栈
 * 后进先出
 */
class Stack{
    constructor(){
        this.datastore = [];
    }

    push(element){
        return this.datastore.push(element);
    }

    pop(){
        return this.datastore.pop();
    }

    peek(){
        return this.datastore[this.datastore.length-1];
    }

    clear(){
        this.datastore = [];
    }

    isEmpty(){
        return this.datastore.length === 0;
    }
}
module.exports = Stack;
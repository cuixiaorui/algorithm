/** 
 * 队列  
 * 先进先出
*/
class Queue{
    constructor(){
        this.datastore = [];
    }

    enqueue(element){
        this.datastore.push(element);
    }

    dequeue(){
        return this.datastore.shift();
    }

    isEmpty(){
        return this.datastore.length === 0;
    }

    clear(){
        this.datastore = [];
    }

    toString(){
        if(this.datastore.length === 0){
            console.log('');
            return;
        }
        this.datastore.forEach( d => console.log(d));
    }
}
module.exports = Queue;
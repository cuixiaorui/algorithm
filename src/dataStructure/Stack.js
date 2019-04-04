/**
 * 堆栈
 * 后进先出
 */
class Stack{
    constructor(){
        this.list = [];
        this.count = 0;
    }
    
    /**
     * 进栈
     */
    push(data){
        this.list[this.count] = data;
        this.count++;
    }

    /**
     * 出栈
     */
    pop(){
        if(this.count === 0){
            return undefined;
        }
        this.count--;
        const popValue = this.list[this.count];
        delete this.list[this.count];
        return popValue;
    }

    /**
     * 获取栈顶的值
     * 但是不删除它
     */
    peek(){
        var topIndex = this.count -1;
        return this.list[topIndex];
    }

    /**
     * 获取当前栈的长度
     */
    getLength(){
        return this.count;
    }

    /**
     * 是否为空栈
     */
    empty(){
        return this.count === 0;
    }

    clear(){
        this.count = 0;
        this.list = [];
    }
  
}
module.exports = Stack;
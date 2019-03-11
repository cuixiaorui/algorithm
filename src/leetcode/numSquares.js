/**
 * 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。
 * 
 * 示例 1:
 * 
 * 输入: n = 12
 * 输出: 3 
 * 解释: 12 = 4 + 4 + 4.
 * 
 * 示例 2:
 * 
 * 输入: n = 13
 * 输出: 2
 * 解释: 13 = 4 + 9.
 * 
 * 
 * @param {number} n
 * @return {number}
 */
class Queue{
    constructor(){
        this.list = [];
    }
    enqueue(val){
        this.list.push(val);
    }
    dequeue(){
        return this.list.shift();
    }
    size(){
        return this.list.length;
    }
    empty(){
        return this.list.length === 0;
    }

}
var numSquares = function(n) {
    //采用广度优先搜索解决
    if(n <= 0)return 0;
    let visited = [];
    let q = new Queue(); 
    for(let i=1; i<=n; i++){
        visited[i] = false;
    }
    q.enqueue(n)
    visited[n] = true;
    let steps = 0;
    while(!q.empty()){
       //例如 n = 12   这时候它只能走   【1，4，9】   --》 【11，8， 3】 
       let len = q.size();
        for (let j = 0; j < len; j++) {
            let val = q.dequeue();
            for (let i = 1; i * i <= val; i++) {
                let nextVal = val - i * i;
                if (nextVal === 0) {
                    return steps + 1;
                }
                if (!visited[nextVal]) {
                    q.enqueue(nextVal);
                    visited[nextVal] = true;
                }
            }

        }
        steps++;
    }
};
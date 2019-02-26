/**
 * 拓扑排序
 * 凡是需要通过局部顺序来推导全局顺序的，一般都能用拓扑排序来解决
 * 还可以用来检测环的存在
 */
const Graph = require('../dataStructure/Graph.js');
const Queue = require('../dataStructure/Queue.js');
let graph = new Graph();
graph.add('内裤',"裤子");
graph.add('内裤',"鞋子");
graph.add('裤子',"鞋子");
graph.add('裤子',"腰带");
graph.add('袜子',"鞋子");
graph.add('鞋子',"");
graph.add('衬衣',"外套");
graph.add('衬衣',"领带");
graph.add('领带',"");
graph.add('外套',"");
graph.add('腰带',"");
/**
 * kahn算法
 * 利用贪心算法思想
 */

function topoSortByKahn(){
   //先计算出每个顶点的入度值来
   let degreeList = {}
   let linkedList = graph.getLinkedList();
   for(let key in linkedList){
       degreeList[key] = 0;
   }
  
   for(let key in linkedList){
       let arr = linkedList[key];
       for(let i=0; i< arr.length; i++){
           if(arr[i]){
               degreeList[arr[i]] += 1;
           }
       }
   }
   //拿出入度值为0的顶点放入队列内
   const queue = new Queue();
   for(let key in degreeList){
       if(degreeList[key] === 0)
       {
           queue.enqueue(key)
       }
   }

   while(!queue.isEmpty())
   {
       let v = queue.dequeue();
       console.log(v);
       //需要把和这个顶点 有关的 顶点的入度全部减一
       const list = linkedList[v];
       for(let i=0; i<list.length; i++){
           const key = list[i];
           degreeList[key]--;
           if(degreeList[key] === 0){
               //循环打印所有 入度为0 的顶点
               queue.enqueue(key);
           }
       }
   }

    

}
topoSortByKahn();

function topoSortByDFS(){

}
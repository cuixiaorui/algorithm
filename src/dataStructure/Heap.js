/**
 * Heap 堆
 * 应用：优先级队列、top K、堆排序、求中位数
 * 入堆 、 出堆 、建堆、
 * 小顶堆
 */

 class Heap{
     constructor() {
         //需要从1开始
         this._list = [null];
         this._count = 1;
     }

     insert(data){
        this._list[this._count] = data;
        this._count++;
        //从下到上 堆化
        let i = this._count -1;
        //如果父节点存在并且父节点的值大于当前节点的值，那么交换位置
        this.bottomToTopHeapify(this._list,i);
     }

     remove(){
         //1. 删除堆顶的元素
         //2. 把最后一个元素放到堆顶的位置
         //3. 从上往下堆化 
        let i = 1;
        let heapTopValue = this._list[i];
        this._list[i] = this._list[--this._count];

         while (this._list[i * 2]) {
             if (this._list[i * 2] < this._list[i]) {
                 //交换位置
                 //左侧
                 this.swap(this._list,i,i*2);
                 i = i * 2
             }else if(this._list[i * 2 + 1] < this._list[i]){
                 //右侧
                 this.swap(this._list,i,i*2 + 1);
                 i = i * 2 + 1
             }else{
                 break;
             }
         }
         return heapTopValue;
     }
     //建堆
     buildHeap(list){
         //从非叶子节点开始

         let len = list.length;
         let i = len - 1;
         for(i/2; i>=1; i--){
            console.log(Number.parseInt(i/2))
            this.bottomToTopHeapify(list,i)
            //从下往上堆化
         }
         this._list = list;
         this._count = len;
     }

     //下往上堆化
     bottomToTopHeapify(list,i){
        while(list[Number.parseInt(i / 2)] && list[Number.parseInt(i / 2)] > list[i]){
            //交换位置
            const parentIndex = Number.parseInt(i / 2);
            this.swap(list,parentIndex,i)
            i = parentIndex;
        }
     }

     swap(list,a,b){
         let temp = list[a];
         list[a] = list[b];
         list[b] = temp;
     }
 }
 var heap = new Heap();

 heap.buildHeap([5,3,7,9,4,2,23,6])
 

//  heap.insert(10);
//  heap.insert(2);
//  heap.insert(1);
//  heap.insert(4);
//  heap.insert(8);
//  heap.insert(3);
 


//  console.log(heap.remove());
//  console.log(heap.remove());
//  console.log(heap.remove());
//  console.log(heap.remove());
//  console.log(heap._list)
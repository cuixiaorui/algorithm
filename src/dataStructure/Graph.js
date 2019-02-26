/**
 * 简单的图数据结构
 */
class Graph{
    constructor(){
        this._v = 0;
        this._linkedList = {}
    }

    add(s,t){
       if(!this._linkedList[s])
       {
           this._linkedList[s] = [];
           this._v++;
       }
       this._linkedList[s].push(t);
    }
    getLinkedList(){
        return this._linkedList;
    }

}
module.exports = Graph;
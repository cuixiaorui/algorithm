/**
 * 迪杰斯特拉算法
 * 是从一个顶点到其余各顶点的最短路径算法，解决的是有向图中最短路径问题。
 * 迪杰斯特拉算法主要特点是以起始点为中心向外层层扩展，直到扩展到终点为止
 */
const graph = {
    "A": [
        { "v": "B", "d": 5 },
        { "v": "C", "d": 1 }]
    ,
    "B": [
        { "v": "A", "d": 5 },
        { "v": "C", "d": 2 },
        { "v": "D", "d": 1 }]
    ,
    "C": [
        { "v": "A", "d": 1 },
        { "v": "D", "d": 4 },
        { "v": "E", "d": 8 },
        { "v": "B", "d": 2 }]
    ,
    "D": [
        { "v": "B", "d": 1 },
        { "v": "E", "d": 3 },
        { "v": "F", "d": 6 },
        { "v": "C", "d": 4 }
    ],
    "E": [
        { "v": "D", "d": 3 },
        { "v": "C", "d": 8 }
    ],
    "F": [
        { "v": "D", "d": 6}
    ]
}
/**
 * 从 DFS 优化而来，把队列变为优先级队列 即可实现
 * @param {} graph 
 * @param {*} v 
 */
function dijkstra(graph, v){
    // 优先队列 
    const priorityList = Object.create(PriorityList);
    
    //初始化
    // visited 访问记录
    // 父级点
    // 和 v 的距离
    let visited = Object.create(null);
    let parents = Object.create(null);
    let distance = Object.create(null);
    for(let key in graph){
        visited[key] = false;
        parents[key] = "";
        distance[key] = undefined;
    }

    priorityList.push({"v":v,"d":0});

    while(!priorityList.isEmpty())
    {
        const currentV =priorityList.pop(); 
        const list = graph[currentV["v"]] 
        for(let i=0; i<list.length; i++){
            let vInfo = list[i]
            let d = vInfo["d"];
            let v = vInfo['v']
            if(visited[v])continue;
            if(distance[currentV["v"]] !== undefined){
                d += distance[currentV['v']]
            }
            //如果别的线路的距离小于之前记录的距离的话，那个更改线路
            if(distance[v] > d || distance[v] === undefined){
                distance[v] = d;
                parents[v] = currentV["v"]
            }
            priorityList.push({ d, v })
        }
        visited[currentV['v']] = true;

    }
}


//todo 优先级队列，后面需要用 堆 来实现
//基于 {"v":"xx","d":0} d 值来排序越小优先级越高
var PriorityList = {
    _list:[],
    push(info){
        this._list.push(info);
        this._list.sort((objA,objB)=>{
            return objA.d - objB.d
        })
    },
    pop(){
        return this._list.shift();
    },
    isEmpty(){
        return this._list.length === 0
    }
}

dijkstra(graph,"A");
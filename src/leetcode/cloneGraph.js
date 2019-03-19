var graph = {"$id":"1","neighbors":[{"$id":"2","neighbors":[{"$ref":"1"},{"$id":"3","neighbors":[{"$ref":"2"},{"$id":"4","neighbors":[{"$ref":"3"},{"$ref":"1"}],"val":4}],"val":3}],"val":2},{"$ref":"4"}],"val":1}

/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
function Node(val, neighbors,id) {
    this.val = val;
    this.neighbors = [];
};

Node.prototype.add = function(node){
    this.neighbors.push(node)
}

/**
 * @param {*} node 
 */
var cloneGraph = function(headNode) {
    let visited = {};
    let hash = Object.create(null)
    let DFS = (node,infoList) => {
       if(!visited[node.val]){
           visited[node.val] = true;
           let neighbors = [];
           //初始化所有的node
           hash[node.val] = new Node(node.val)
           for(let i=0; i<node.neighbors.length; i++){
               let neighborNode = node.neighbors[i]
               neighbors.push(neighborNode['val'])
               DFS(neighborNode,infoList)
           }
           const r = {val: node.val,neighbors} 
           infoList.push(r);
       } 
    }
    let infoList = [];
    DFS(headNode,infoList)
    
    infoList.forEach((info)=>{
        let node = hash[info.val];
        info.neighbors.forEach((n)=>{
            node.add(hash[n])
        })

    })
    return hash["1"]
};
let n1 = new Node("1")
let n2 = new Node("2")
let n3 = new Node("3")
let n4 = new Node("4")

n1.add(n2)
n1.add(n4)

n2.add(n1)
n2.add(n3)

n3.add(n2);
n3.add(n4);

n4.add(n1);
n4.add(n3)

const newGraph = cloneGraph(n1)
console.log(newGraph)



var cloneGraph1 = function (node){
    // 更加简洁的递归处理
    let map = new Map();
    const DFS = (node)=>{
        if(!node || !node.val)return;
        // 创建一个新的 Node
        let cloneNode = new Node(node.val);
        map.set(node.val,cloneNode)
        for (let i = 0; i < node.neighbors.length; i++) {
            let neighborNode = node.neighbors[i]
            //如果 map 内有的话，那么直接添加到 neighbors 内
            if (map.has(neighborNode.val)) {
                cloneNode.neighbors.push(map.get(neighborNode.val));
            } else {
                // 如果没有的话， 递归处理 =》 
                cloneNode.neighbors.push(DFS(neighborNode));
            }
        }
        return node;
    }
    DFS(node)
    return map.get("1")

}
cloneGraph1(n1)
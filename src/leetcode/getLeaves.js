/**
 * 获取多根树的叶子节点
 */
function getLeaves(nodes){
   let r = [];
   const iteration = (node,r)=>{
       let len = node.children.length;
       for(let i=0; i<len; i++){
           let childrenNode = node.children[i]
           if(childrenNode.children && childrenNode.children.length > 0){
               iteration(childrenNode,r)
           }else{
               r.push(childrenNode)
           }
       }
   }
   for(let i=0,len=nodes.length;i<len; i++){
       let node = nodes[i]
       iteration(node, r)
   }
   return r;
}

let v = [{
    val:1,
    children:[
        {
            val:2,
            children:[
                {
                    val:3,
                    children:[]
                }
            ]
        },{
            val:3,
            children:[
                {
                    val:4,
                    children:[]
                }
            ]
        }
    ]
},{
    val:1,
    children:[
        {
            val:2,
            children:[
                {
                    val:5,
                    children:[]
                }
            ]
        },{
            val:3,
            children:[
                {
                    val:6,
                    children:[]
                }
            ]
        }
    ]
}]

getLeaves(v);
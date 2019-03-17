/**
 * 对比两棵二叉树是否一致
 */

let t1 = {
    val:1,
    leftNode:{
        val: 2,
        leftNode:{
            val: 4,
            leftNode:null,
            rightNode: null
        },
        rightNode:{
            val: 5,
            leftNode:null,
            rightNode: null
        }
    },
    rightNode:{
        val:3,
        leftNode:{
            val: 6,
            leftNode:null,
            rightNode: null
        },
        rightNode:{
            val: 7,
            leftNode:null,
            rightNode: null
        }
    }
}
let t2 = {
    val:1,
    leftNode:{
        val: 2,
        leftNode:{
            val: 4,
            leftNode:null,
            rightNode: null
        },
        rightNode:{
            val: 5,
            leftNode:null,
            rightNode: null
        }
    },
    rightNode:{
        val:3,
        leftNode:{
            val: 6,
            leftNode:null,
            rightNode: null
        },
        rightNode:{
            val: 7,
            leftNode:null,
            rightNode: null
        }
    }
}

var sameTree = function (t1,t2){
        //如果到树底得话，那么返回 true
        if(!t1 && !t2){
            return true;
        }

        //对比 左右节点结构
        if((t1 && !t2) || (!t1 && t2)){
            return false;
        }

        //对比 值
        if(t1.val !== t2.val){
            return false;
        }

        //左右两棵树都为 true 才为 true
        return sameTree(t1.leftNode, t2.leftNode) && sameTree(t1.rightNode, t2.rightNode)
        
}


var sameTree1 = function (t1,t2){

    //1. 先遍历完2颗树
    const traverse = (tree)=>{
        const r = [];
        const iteration = (node)=>{
            if(!node)return;
            r.push(node.val);
            iteration(node.leftNode);
            iteration(node.rightNode);
        }
        iteration(tree);
        return r;
    } 
    let t1List = traverse(t1);
    let t2List = traverse(t2);
    //2.然后对比数组
    if(t1List.length != t2List.length){
        return false;
    }

    for(let i=0, len = t1List.length; i<len; i++){
        let t1Val = t1List[i];
        let t2Val = t2List[i];
        if(t1Val !== t2Val)return false;
    }

    return true;

}
console.log(sameTree1(t1,t2))
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
console.log(sameTree(t1,t2))
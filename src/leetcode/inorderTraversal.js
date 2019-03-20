/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }
var root = {
    val: 1,
    left:{
        val:2,
        left:{
            val:4,
            left:null,
            right:null
        },
        right:{
            val:5,
            left:null,
            right:null
        }
    },
    right:{
        val:3,
        left:{
            val:6,
            left:null,
            right:null
        }
,
        right:{
            val:7,
            left:null,
            right:null
        }


    }
}

var inorderTraversal = function(root) {
    const f = (node)=>{
        if(!node)return;

        f(node.left);
        console.log(node.val);
        f(node.right);
    }
    f(root)
};
// inorderTraversal(root)


/**
 * 非递归的前序
 * @param {} root 
 */
var nonNecursive = function(root){
    
    let stack = [];


    while(root){
        if(!root.isVisited){
            stack.push(root)
            if(!root.isLog){
                console.log(root.val)
                root.isLog = true;
            }
        }

        if(root.left && !root.isLeft){
            root.isLeft = true; 
            root = root.left;
        }else if(root.right && ! root.isRight){
            root.isRight = true;
            root = root.right;
        }else{
            root.isVisited = true;
            stack.pop();
            root = stack[stack.length - 1]
        }
    }
}
nonNecursive(root)





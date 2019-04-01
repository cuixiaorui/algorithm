/**
 * 中序
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
class TreeNode{
    constructor(val){
        this.val = val;
        this._left = this._right = null;
    }

    get left(){
        return this._left;
    }

    set left(val){
        this._left = val;
    }

    get right(){
        return this._right;
    }

    set right(val){
        this._right = val;
    }
}

const tree1 = new TreeNode(1);
const tree2 = new TreeNode(2);
const tree3 = new TreeNode(3);
const tree4 = new TreeNode(4);
const tree5 = new TreeNode(5);
const tree6 = new TreeNode(6);
const tree7 = new TreeNode(7);

tree1.left = tree2;
tree1.right = tree3;

tree2.left = tree4;
tree2.right = tree5;

tree3.left = tree6;
tree3.right = tree7




/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    
    var r = [];
    const iteration = (node)=>{
          if (!node) return;

       
        iteration(node.left);
        r.push(node.val);
   
        iteration(node.right);
    }
    iteration(root)
    return r;
   
};


var inorderTraversal1 = function(root){
    //1. 有左向左，没左出栈，打印父节点 接着走右

    let stack = [];

    let node = root; 

    while(node || stack.length > 0){

        if(node){
            stack.push(node)
        } 
        
        let leftNode = node &&  node.left;
        while(leftNode){
            stack.push(leftNode)
            leftNode = leftNode.left;
        }

        console.log(stack[stack.length -1].val)
        //没左了
        let parentNode = stack.pop();

        node = parentNode.right;

    }
}
inorderTraversal1(tree1)
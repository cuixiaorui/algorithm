/**
 * 二叉树的后序遍历
 * 给定一个二叉树，返回它的 后序 遍历。
 * 
 * 示例:
 * 
 * 输入: [1,null,2,3]  
 *    1
 *     \
 *      2
 *     /
 *    3 
 * 
 * 输出: [3,2,1]
 * 
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 * 
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
var postorderTraversal = function(root) {
   
    
    const iteration = function(node){
        if(!node)return;
        iteration(node.left)
        iteration(node.right)
        console.log(node.val);
    }

    iteration(root);
};


var postorderTraversal1 = function(root){
    // 使用 两个栈来处理后序遍历 -》 1个栈处理节点的跳转   另外一个栈存储节点
    const stack1 = [];
    const stack2 = [];

    let node = root;
    while(node || stack1.length > 0){
        
        if(node){
            stack1.push(node);
            stack2.push(node);
        }
        //1 .一路向右
        let rightNode = node && node.right;
        while(rightNode){
            stack1.push(rightNode)
            stack2.push(rightNode)
            rightNode = rightNode.right;
        }

        //2. 右侧没有的时候，弹出栈顶节点，把当前节点指向栈顶节点的左侧节点
        node = stack1.pop().left;
    }

    while(stack2.length > 0){
        console.log(stack2.pop().val);
    }


}

postorderTraversal1(tree1)
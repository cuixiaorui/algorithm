/**
 * 二叉树的前序遍历
 * 
 * 
 * 给定一个二叉树，返回它的 前序 遍历。
 * 
 *  示例:
 * 
 * 输入: [1,null,2,3]  
 *    1
 *     \
 *      2
 *     /
 *    3 
 * 
 * 输出: [1,2,3]
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 * 
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
 * 递归 
 * @param {} root 
 */
var preorderTraversal = function(root) {
    if(!root)return;
    console.log(root.val);
    preorderTraversal(root.left);
    preorderTraversal(root.right);
};


/**
 * 迭代 
 * @param {} root 
 */
var preorderTraversal1 = function(root) {
    
    const stack = [];

    let node = root;
    // node 是为了第一次进循环
    // 栈不为空，说明还有逻辑要执行，同调用栈的原理
    while(node || stack.length > 0){
        if(node){
            console.log(node.val)
            stack.push(node);
        }
        let nextNode = node && node.left
        while(nextNode){
            console.log(nextNode.val);
            stack.push(nextNode);
            nextNode = nextNode.left;
        }
        // 重点；需要回到父元素的右节点
        node = stack.pop().right; 
    }

};

preorderTraversal1(tree1);
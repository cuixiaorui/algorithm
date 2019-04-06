/**
 * 二叉树的最大深度
 * 给定一个二叉树，找出其最大深度。
 * 
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例：
 * 给定二叉树 [3,9,20,null,null,15,7]，
 * 
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * 返回它的最大深度 3 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
class TreeNode {
    constructor(val) {
        this.val = val;
        this._left = this._right = null;
    }

    get left() {
        return this._left;
    }

    set left(val) {
        this._left = val;
    }

    get right() {
        return this._right;
    }

    set right(val) {
        this._right = val;
    }
}

const tree1 = new TreeNode(3);
const tree2 = new TreeNode(9);
const tree3 = new TreeNode(20);
const tree4 = new TreeNode(15);
const tree5 = new TreeNode(7);


tree1.left = tree2;
tree1.right = tree3;

tree3.left = tree4;
tree3.right = tree5;
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    // 自顶向下
    // 前序遍历
    // 使用条件
    // 你能确定一些参数，从该节点自身解决出发寻找答案吗？
    // 你可以使用这些参数和节点本身的值来决定什么应该是传递给它子节点的参数吗？
    if (!root) return 0;
    let maxDeep = 0;

    const f = function (node, deep) {
        if (!node) return;

        if (!node.left && !node.right) {
            // 叶子节点
            if (deep > maxDeep) {
                maxDeep = deep;
            }
        }
        f(node.left, deep + 1)
        f(node.right, deep + 1)
    }

    f(root, 1)
    return maxDeep;
};


var maxDepth1 = function(root){
    // 自底向上
    // 后序 -》 对比左右节点，取最大值
    // 对于树中的任意一个节点，如果你知道它子节点的答案，你能计算出该节点的答案吗？ 如果答案是肯定的，那么 “自底向上” 的递归可能是一个不错的解决方法。
    const f = function(node){
        // 叶子节点为0 
        if(!node)return 0;
        const leftDeep = f(node.left)
        const rightDeep = f(node.right)
        return Math.max(leftDeep,rightDeep) + 1
    }
    return f(root);
}


// maxDepth(tree1)
maxDepth1(tree1)
/**
 * 从中序与后序遍历序列构造二叉树
 * 根据一棵树的中序遍历与后序遍历构造二叉树。
 * 
 * 注意:
 * 你可以假设树中没有重复的元素。
 * 
 * 例如，给出
 * 
 * 中序遍历 inorder = [9,3,15,20,7]
 * 后序遍历 postorder = [9,15,7,20,3]
 * 
 * 返回如下的二叉树：
 * 
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * 
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * 基于中序和后序构建树 
 * @param {*} inorder 
 * @param {*} postorder 
 */
function buildTree(inorder,postorder){
    if(inorder.length === 0)return null;
    if(inorder.length === 1)return new TreeNode(inorder[0]);
    let root = new TreeNode(postorder.pop());
    let leftTreeNodeSum = inorder.indexOf(root.val)
    root.left = buildTree(inorder.slice(0,leftTreeNodeSum),postorder.slice(0,leftTreeNodeSum));
    root.right = buildTree(inorder.slice(leftTreeNodeSum+1),postorder.slice(leftTreeNodeSum))
    return root;
}

// console.log(r);
// var r = buildTree([2,1],[1,2]);
// var r = buildTree([1,2],[2,1]);

/**
 * 基于前序和中序构建树
 */
function buildTree1(preorder, inorder){
    if(preorder.length === 0)return null;
    if(preorder.length === 1)return new TreeNode(preorder[0]);
    var root = new TreeNode(preorder[0]);
    var leftTreeNodeSum = inorder.indexOf(root.val);
    root.left = buildTree1(preorder.slice(1,leftTreeNodeSum + 1),inorder.slice(0,leftTreeNodeSum));
    root.right = buildTree1(preorder.slice(leftTreeNodeSum + 1),inorder.slice(leftTreeNodeSum + 1));
    return root;
}

var r = buildTree1([3,9,20,15,7],[9,3,15,20,7]);
console.log(r);
//二叉树的层次遍历
// 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。
// 广度优先遍历（BFS）

// 例如:
// 给定二叉树: [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其层次遍历结果：

// [
//   [3],
//   [9,20],
//   [15,7]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root)return [];
    let queue = [];
    let r = [];
    queue.push(root);

    while(queue.length > 0){
        
        let layer = [];
        // 基于当前队列得长度遍历
        // 不可以直接写 i<queue.length 
        // 因为循环内是把元素直接添加到 queue 内得
        let len = queue.length;
        for(let i=0; i<len; i++){
            let node = queue.shift();
            layer.push(node);

            if(node.left){
                queue.push(node.left)
            }

            if(node.right){
                queue.push(node.right)
            }
        }
        
        r.push(layer)
    }
    return r;
};
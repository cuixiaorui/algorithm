/**
 *   对称二叉树
 * 给定一个二叉树，检查它是否是镜像对称的。
 * 
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 * 
 *     1
 *    / \
 *   2   2
 *  / \ / \
 * 3  4 4  3
 * 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
 * 
 *     1
 *    / \
 *   2   2
 *    \   \
 *    3    3
 * 说明:
 * 
 * 如果你可以运用递归和迭代两种方法解决这个问题，会很加分。
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

const tree1 = new TreeNode(1);
const tree2 = new TreeNode(2);
const tree3 = new TreeNode(2);
const tree4 = new TreeNode(3);
const tree5 = new TreeNode(4);
const tree6 = new TreeNode(4);
const tree7 = new TreeNode(3);


// tree1.left = tree2;
// tree1.right = tree3;

// tree2.left = tree4;
// tree2.right = tree5;

// tree3.left = tree6;
// tree3.right = tree7;

tree1.left = tree2;
tree1.right = tree3;

tree2.right = tree4;

tree3.right = tree7;

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root)return true;

    const f = (node1,node2)=>{
        if(!node1 && !node2)return true;

        if(node1 && node2 && node1.val === node2.val){
            var boo1 = f(node1.left,node2.right)
            var boo2 = f(node1.right,node2.left)
            return boo1 && boo2;
        }

        return false;
    }
    var r = f(root.left,root.right)
    console.log(r);
};


var isSymmetric1 = function(root){
    //迭代实现
    // 使用 BFS 解题
    // 每一层 -》 list 
    // 对比list    0 === list.length - 1 ; 1 === list.length - 2

    let queue = [];

    queue.push(root);

    let count = 0;
    while(queue.length > 0){
        let len = queue.length;
        const list = []; 
        count++
        for(let i=0; i<len; i++){
            let node = queue.shift();
            if(node){
                list[i] = node.val;
                queue.push(node.left);
                queue.push(node.right);
            }
        }
        if(list.length > 0){
            console.log(`count:${count} list:${list}`)
            // 对比 list
           if(list.length > 1){
            // 2个节点得时候在开始比对
               let mid = list.length / 2;
               let len = list.length - 1;
               for(let i=0; i<mid; i++){
                    if(list[i] !== list[len - i]){
                        return false;
                    }
               }
           } 
        }
    }

    return true;

}

var r = isSymmetric1(tree1);
console.log(r);
// 填充每个节点的下一个右侧节点指针
// 给定一个完美二叉树，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：
// 
// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。
// 
// 初始状态下，所有 next 指针都被设置为 NULL。


/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    // 使用 bfs 解题
    let queue = [];
    queue.push(root);
        
    while(queue.length > 0){
        let len = queue.length;
        for(let i=0; i<len; i++){
            let node = queue[i];
            node.next = i + 1 >= len? null : queue[i + 1]
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        queue = queue.slice(len);
    }
    console.log(root)
};



  function Node(val,left,right,next) {
     this.val = val;
     this.left = left;
     this.right = right;
     this.next = next;
  };


  var node1 = new Node(1);
  var node2 = new Node(2);
  var node3 = new Node(3);
  var node4 = new Node(4);
  var node5 = new Node(5);
  var node6 = new Node(6);
  var node7 = new Node(7);


  node1.left = node2;
  node1.right = node3;

  node2.left = node4;
  node2.right = node5;

  node3.left = node6;
  node3.right = node7;


  connect(node1);
 

/**
 *  二叉树的序列化与反序列化
 * 
 * 序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。
 * 
 * 请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。
 * 
 * 示例: 
 * 
 * 你可以将以下二叉树：
 * 
 *     1
 *    / \
 *   2   3
 *      / \
 *     4   5
 * 
 * 序列化为 "[1,2,3,null,null,4,5]"
 * 提示: 这与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode 序列化二叉树的格式。你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。
 * 
 * 说明: 不要使用类的成员 / 全局 / 静态变量来存储状态，你的序列化和反序列化算法应该是无状态的。
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

  function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }
  let t1 = new TreeNode(1);
  let t2 = new TreeNode(2);
  let t3 = new TreeNode(3);
  let t4 = new TreeNode(4);
  let t5 = new TreeNode(5);


  t1.left = t2;
  t1.right = t3;

  t3.left = t4;
  t3.right = t5;
/*
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(!root)return [];
    let stack = [];
    stack.push(root);
    let serializeStr = [] 
    while(stack.length > 0){
        let len = stack.length;

        for(let i=0; i<len; i++){
            let node = stack.shift();
            if(node){
                stack.push(node.left)
                stack.push(node.right)
            }
            serializeStr.push(node)
        }
    }

    let endIndex;
    let len = serializeStr.length;
    for(let i=len - 1; i>=0; i--){
        if(serializeStr[i]){
            endIndex = i;
            break;
        }
    }
    let str = serializeStr.slice(0,endIndex + 1).map(node => node? node.val:"null").join(",")
    return str?`[${str}]`:"[]"
};



/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(!data)return null;
    let treeList = data.slice(1,data.length - 1).split(",").map(s => s === "null"? null:Number(s))
    treeList.unshift(0)
    let hash = {};
    for (let i = 1, len = treeList.length; i < len; i++) {
        if (treeList[i]) {
            var node
            if(!hash[i]){
                node = new TreeNode(treeList[i])
                hash[i] = node;
            }else{
                node = hash[i]
            }
            
            if (treeList[i * 2]) {
                node.left = new TreeNode(treeList[i * 2]);
                hash[i * 2] = node.left; 
            }
            if (treeList[i * 2 + 1]){
                node.right = new TreeNode(treeList[i * 2 + 1]);
                hash[i * 2 + 1] = node.right;
            }
        }
    }
    return hash[1]?hash[1]:[]
};

var dr = deserialize('[null]')
console.log(dr)
var r = serialize([null])
console.log(r)


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
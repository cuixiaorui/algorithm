/**
 * 翻转链表
 */


function Node(val,next){
    this.val  = val; 
    this.prev = null;
    this.next = null;
}

Node.prototype.setNext = function (node){
    this.next = node;
}
Node.prototype.setPrev = function (node){
    this.prev = node;
}


function reversalLinked(node){
    // 1-2-3-4-5
    // 2-1-3-4-5   依次把node提到最前面，即完成链表的翻转
    // 记录第一个节点
    let first = node
    while(node){
        // 记录节点的下一个，不然等会就找不到了
        let iNode = node.next;
        //通过 node 节点往上找 找到最头的那个节点
        let currentNode = node;
        while(currentNode.prev){
            let prevNode = currentNode.prev;
            const currentNodeNext = currentNode.next;
            const prevNodePrev = prevNode.prev;

            currentNode.setPrev(prevNodePrev);
            currentNode.setNext(prevNode)

            prevNode.setPrev(currentNode);
            prevNode.setNext(currentNodeNext);

            if(currentNodeNext){
                currentNodeNext.setPrev(prevNode)
            }
        }
        // 更新node
        node = iNode;
    }
    return first;
}



// Linked -> 1, 2, 3, 4, 5
var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);

node1.setNext(node2)
node2.setNext(node3)
node3.setNext(node4)
node4.setNext(node5)


node2.setPrev(node1)
node3.setPrev(node2)
node4.setPrev(node1)
node5.setPrev(node4)


reversalLinked(node1)
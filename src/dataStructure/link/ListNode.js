function ListNode(val) {
  this.val = val;
  this.next = null;
}

// 把数组转换成对应的链表 linkList
function createLinkList(list) {
  let headNode = new ListNode();
  let currentNode = headNode;

  const isLast = (i) => i === list.length - 1;
  list.forEach((val, i) => {
    // 先给当前的 node 赋值
    currentNode.val = val;

    // 创建下一个node ，然后赋值next指针
    // 最后切换 currentNode 的指针
    // 如果是最后一个的话 那么就不需要处理了
    if (isLast(i)) return;
    const nextNode = new ListNode();
    currentNode.next = nextNode;
    currentNode = nextNode;
  });

  return headNode;
}

module.exports = {
  ListNode,
  createLinkList,
};

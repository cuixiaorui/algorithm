/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
module.exports = {
    ListNode,
    mergeTwoLists
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1 
 * @param {ListNode} l2 
 * @return {ListNode}
 */
function mergeTwoLists (l1, l2) {
    let l3;
    while (l1) {
        var lastNode;
        if (!l3) {
            l3 = new ListNode();
            lastNode = l3;
        } else {
            var node = new ListNode();
            var tempNode = l3;
            while (tempNode.next) {
                tempNode = tempNode.next;
            }
            tempNode.next = node;
            lastNode = tempNode.next;
        }

        if (l1.val <= l2.val) {
            lastNode.val = l1.val;
            lastNode.next = new ListNode(l2.val);
        } else if (l1.val > l2.val) {
            lastNode.val = l2.val;
            lastNode.next = new ListNode(l1.val);
        }
        l1 = l1.next;
        l2 = l2.next;
    }
    return l3;
};
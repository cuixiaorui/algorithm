/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (30.31%)
 * Total Accepted:    733.4K
 * Total Submissions: 2.4M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 * 
 * Example:
 * 
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var p = l1;
    var q = l2;
    //虚拟头节点
    var dummyHead = new ListNode(null);
    var curr = dummyHead;
    //进位记录值
    var carry = 0;
    //循环条件
    while(p || q){
        var x = p? p.val: 0;
        var y = q? q.val: 0;
        //这里需要加上之前的进位
        var sum = x + y + carry;
        // 取个位数的数字（取模）
        curr.next = new ListNode(sum % 10)
        curr = curr.next;
        p = p && p.next;
        q = q && q.next;
        //记录进位的值，在下次循环中需要加上
        carry = Math.floor(sum/ 10)
    }
    //处理最后一个节点会造成进位的情况
    if(carry >= 1){
        curr.next = new ListNode(carry);
    }
    return dummyHead.next;

};
function ListNode(val){
    this.val = val;
    this.next = null;
}
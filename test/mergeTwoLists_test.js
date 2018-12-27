var assert = require('assert');
var {ListNode,mergeTwoLists} = require('../src/dataStructure/link/mergeTwoLists');

describe("#mergeTwoLists()",()=>{
    it(`l1 = 1; l2 = 2; 应该输出 1 2`,()=>{
        var l1 = new ListNode(1);

        var l2 = new ListNode(2);

        var a = mergeTwoLists(l1,l2);
        assert(a.val === 1);
        assert(a.next.val === 2);
    })

    it(`l1 = 1,2,4; l2 = 1,3,4; 应该输出 1 1 2 3 4 4`,()=>{
        var l1 = new ListNode(1);
        l1.next = new ListNode(2);
        l1.next.next = new ListNode(4);

        var l2 = new ListNode(1);
        l2.next = new ListNode(3);
        l2.next.next = new ListNode(4);


        var l3 = mergeTwoLists(l1,l2);
        assert(l3.val === 1);
        assert(l3.next.val === 1);
        assert(l3.next.next.val === 2);
        assert(l3.next.next.next.val === 3);
        assert(l3.next.next.next.next.val === 4);
        assert(l3.next.next.next.next.next.val === 4);
    })
})

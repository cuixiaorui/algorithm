const { kthToLast } = require("./kthToLast");
const { createLinkList } = require("./ListNode");

// 在链表中返回倒数第 k 个节点的值
describe("kthToLast", () => {
  test("1,2,3,4,5，k 为 2，结果为 4  ", () => {
    // 获取倒数第 k 个只
    const head = createLinkList([1, 2, 3, 4, 5]);

    const k = 2;
    expect(kthToLast(head, k)).toBe(4);
  });

  test("1,2,3,4,5，k 为 3，结果为 3  ", () => {
    // 获取倒数第 k 个只
    const head = createLinkList([1, 2, 3, 4, 5]);

    const k = 3;
    expect(kthToLast(head, k)).toBe(3);
  });
});

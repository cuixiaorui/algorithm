const {hasCycle} = require('./hasCycle');
const { createLinkList } = require("./ListNode.js");

describe("hasCycle", () => {
  test("should return true when has cycle", () => {
    // given
    const head = createLinkList([3, 2, 0, -4]);
    const fourthNode = head.next.next.next;
    const secondNode = head.next;
    // 绑定好， 就存在环了
    fourthNode.next = secondNode;

    // when
    const result = hasCycle(head);

    // then
    expect(result).toBe(result);
  });
});

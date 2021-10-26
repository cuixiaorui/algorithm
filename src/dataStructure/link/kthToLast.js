// function kthToLast(head, k) {
//   // 1. 先求 len
//   let len = 0;
//   let temp = head;

//   while (temp) {
//     len++;
//     temp = temp.next;
//   }

//   const s = len - k;
//   temp = head;

//   for (let i = 0; i < s; i++) {
//     temp = temp.next;
//   }

//   return temp.val;
// }

function kthToLast(head, k) {
  let q = head; // 快指针
  let p = head; // 慢指针

  for (let i = 0; i < k; i++) {
    q = q.next;
  }

  while (q) {
    q = q.next;
    p = p.next;
  }

  return p.val
}

module.exports = {
  kthToLast,
};

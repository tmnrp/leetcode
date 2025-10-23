//  Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// [1, 4]
// [2, 3, 6, 7]
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  let result = null;

  while (list1?.val || list2?.val) {
    //
    if (list1?.val && list2?.val) {
      if (list1.val <= list2.val) {
        if (result === null) {
          const n = new ListNode();
          n.val = list2.val;
          n.next = null;
          result = new ListNode(list1.val, n);
          list1 = list1.next;
        }
      } else {
        result.val = list2.val;
        const n = new ListNode();
        n.val = list1.val;
        n.next = null;
        result.next = n;

        list2 = list2.next;
      }
    } else if (list1?.val && list2?.val === undefined) {
      if (result === null) {
        result = list1;
      } else {
        result.next = list1;
        list1 = null;
      }
    } else if (list1?.val === undefined && list2?.val) {
      if (result === null) {
        result = list2;
      } else {
        result.next = list2;
        list2 = null;
      }
    }
  }

  //
  return result;
}

// console.log("1", mergeTwoLists(null, null));
// console.log("2", mergeTwoLists({ val: 2, next: null }, null));
// console.log("3", mergeTwoLists(null, { val: 3, next: null }));
console.log(
  "5",
  mergeTwoLists(
    { val: 1, next: { val: 2, next: null } },
    { val: 3, next: { val: 4, next: null } },
  ),
);
// console.log(
//   "4",
//   mergeTwoLists(
//     { val: 1, next: { val: 2, next: { val: 4, next: null } } },
//     { val: 1, next: { val: 3, next: { val: 4, next: null } } },
//   ),
// );
// console.log(
//   "4",
//   mergeTwoLists(
//     { val: 1, next: { val: 4, next: null } },
//     {
//       val: 2,
//       next: { val: 3, next: { val: 5, next: { val: 6, next: null } } },
//     },
//   ),
// );
// console.log(
//   "5",
//   mergeTwoLists(
//     {
//       val: 2,
//       next: { val: 3, next: { val: 5, next: { val: 6, next: null } } },
//     },
//     { val: 1, next: { val: 4, next: null } },
//   ),
// );

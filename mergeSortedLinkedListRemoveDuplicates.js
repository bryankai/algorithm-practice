function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const mergeSortedLinkedList = (l1, l2) => {
  const result = new ListNode();
  let currResult = result;
  let currL1 = l1;
  let currL2 = l2;

  while (currL1 && currL2) {
    if (currL1.val <= currL2.val) {
      if (currL1.val !== currResult.val) {
        currResult.next = currL1;
        currResult = currResult.next;
      }
      currL1 = currL1.next;
    } else {
      // currL1.val>currL2.val
      if (currL2.val !== currResult.val) {
        currResult.next = currL2;
        currResult = currResult.next;
      }
      currL2 = currL2.next;
    }
  }
  if (!currL1) {
    currResult.next = currL2;
  }
  if (!currL2) {
    currResult.next = currL1;
  }
  return result.next;
};

// Test
const l1 = new ListNode(1, new ListNode(2, new ListNode(3)));
const l2 = new ListNode(2, new ListNode(5, new ListNode(6)));
const result = mergeSortedLinkedList(l1, l2);
//1->2->3->5->6
console.log(result);
// Only displays some of the nexted nodes
// ListNode {
//   val: 1,
//   next: ListNode { val: 2, next: ListNode { val: 3, next: [ListNode] } }
// }
console.log(result.next.next);
console.log(l1);
console.log(l2);
// ListNode {
//   val: 3,
//   next: ListNode { val: 5, next: ListNode { val: 6, next: null } }
// }

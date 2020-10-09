/*
206. Reverse Linked List

Reverse a singly linked list.
A linked list can be reversed either in iteratively or recursively.

Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

param {ListNode} head
return {ListNode}
*/

// approach1-iterative
var reverseList = function(head) {
  let prev = null;
  let cur = head;

  while (cur) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
};

// approach2-recursive
// we want to let the next node point to the previours one 
// 'disconnect' the original link
// var reverseList = function(head) {
//   if (!head || !head.next) return head;
//   let node = reverseList(head.next);
//   head.next.next = head;
//   head.next = null;
//   return node;
// };

// console.log(reverseList([1, 2, 3, 4, 5]));

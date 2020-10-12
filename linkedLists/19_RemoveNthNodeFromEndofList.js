/*
19. Remove Nth Node From End of List

Given the head of a linked list, remove the nth node from the end of the list and return its head.

DUMMY NODE - an auxiliary
1) to simplify corner cases
2) to remove the head of the list

Follow up: Could you do this in one pass?

Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

@param {ListNode} head
@param {number} n
@return {ListNode}
*/

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

// Approach 1: Two Pass
// Scan the source twice
var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;

  // 1st pass: responsible for label definition
  let first = head;
  let L = 0;
  while(first) {
    L++;
    first = first.next;
  }

  // 2nd pass: translate the instructions
  first = dummy;
  for (let i = n; i >= 0; i--) {
    first = first.next;
  }

  first.next = first.next.next;
  return dummy.next;
}

// Approach 2: One Pass
// scans entire source file only once
// var removeNthFromEnd = function(head, n) {}

console.log(removeNthFromEnd([1,2,3,4,5], 2));
console.log(removeNthFromEnd([1], 1));
console.log(removeNthFromEnd([1,2], 1));
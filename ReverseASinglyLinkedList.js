/*
Time Complexity: O(n), where n is the number of nodes in the linked list. Each node is visited exactly once.

Space Complexity: O(1). No additional space is used, only a few pointers.

*/

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseList(head) {
    let prev = null;
    let curr = head;
    
    while (curr !== null) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    
    return prev;
}

// Helper function to print the linked list
function printList(head) {
    let result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result);
}

// Example Usage:
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
printList(reverseList(head)); // Output: [5, 4, 3, 2, 1]

/* 
Time Complexity: O(n + m), where n is the number of nodes in l1 and m is the number of nodes in l2. Each node is visited once.

Space Complexity: O(1). No additional space is used beyond the input lists, as the merging is done in-place.
*/

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode();
    let tail = dummy;
    
    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }
    
    // Append the remaining elements
    if (l1 !== null) {
        tail.next = l1;
    } else if (l2 !== null) {
        tail.next = l2;
    }
    
    return dummy.next;
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
const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
printList(mergeTwoLists(list1, list2)); // Output: [1, 1, 2, 3, 4, 4]

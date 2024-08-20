# Linked List Operations

This repository contains implementations for common linked list operations in JavaScript. Below, you'll find the code for reversing a singly linked list and merging two sorted linked lists.

## Task 1: Reverse a Singly Linked List

### Problem Statement

Given the head of a singly linked list, reverse the list, and return the reversed list.

#### Time Complexity
- **O(n):** Each node is visited exactly once, where n is the number of nodes in the linked list.

#### Space Complexity
- **O(1):** No additional space is used, only a few pointers.


# Task 2: Merge Two Sorted Linked Lists
## Problem Statement
- You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

- Return the head of the merged linked list.

#### Time Complexity
- **O(n + m):** Each node in list1 and list2 is visited once, where n is the number of nodes in list1 and m is the number of nodes in list2.
#### Space Complexity
- **O(1):** No additional space is used beyond the input lists, as the merging is done in-place.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    
    /*
     * The approach is to move the value of next node
     * into the current node and remove the next node.
     * Since, it is mentioned in the problem statement
     * that given node won't be the last node i.e, 
     * tial of the list, we don't have to worry about
     * checking next node.
     */
    
    if(node === null) return;
    node.val = node.next.val;
    node.next = node.next.next;
};
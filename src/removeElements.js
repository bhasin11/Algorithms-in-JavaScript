/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    /*
     * The approach is to iterate through the linked list 
     * and keep track of the previous node. If the current
     * node has value given as input, then we can make
     * remove the current node from the list (By making
     * previous node's next point to current node's next).
     * Finally, we return the head of the modified list.
     */
    
    var previous = null, current = head;
    
    while(current !== null){
        if(current.val == val){
            if(previous === null) head = head.next;
            else previous.next = current.next;
        }
        else previous = current;
        current = current.next;
    }
    return head;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    /*
     * The approach is to use two pointers and move them
     * at different speeds. If the two meet ever, we can
     * return true, as there is no end to the given linked
     * list. But, if the faster pointer reaches end of list,
     * then there is no cycle in the list and we can return
     * false.
     */
    
    if(head === null || head.next === null) return false;
    
    var fast = head.next, slow = head;

    while(fast !== null && fast.next !== null){
        if(fast == slow) return true;
        fast = fast.next.next;
        slow = slow.next;
    }
    return false;
};
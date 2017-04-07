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
var isPalindromeList = function(head) {
    /*
     * The approach is to find the middle of the given
     * linked list, and at the same time keep reversing
     * first half of the linked list. Once we have found
     * the middle of the list, we can start checking the
     * reversed linked list and second half of the 
     * input linked list node-by-node (val), and if all
     * are equal we can return true, else false.
     */
    
    if(head === null) return true;
    
    var slow = null, fast = head,
             previousNode = null, 
             currentNode = head,
             nextNode = null;
            
    while(fast !== null && fast.next !== null){
        if(slow === null) slow = head;
        else slow = slow.next;
        fast = fast.next.next;
        
        nextNode = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
    }

    if(fast !== null) currentNode = currentNode.next;
    
    while(currentNode !== null && previousNode !== null){
        if(currentNode.val != previousNode.val) return false;
        currentNode = currentNode.next;
        previousNode = previousNode.next;
    }
    return true;
};
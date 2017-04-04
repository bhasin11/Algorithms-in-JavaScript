/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    
    if(head === null || head.next === null) return head;
    var temp = head, pre = null;
    
    while(temp !== null && temp.next !== null){
        if(temp.val === temp.next.val){
            if(pre === null)    head = temp.next;
            else    pre.next = temp.next;
        }
        else    pre = temp;
        
        temp = temp.next;
    }
    return head;
    
    /*
     * The approach is to check if head is equal to null.
     * Or, head.next is equal to null. In both cases we
     * can't have a duplicate, so we can return without
     * proceeding. Then, we recursively call the
     * deleteDuplicates() method with head.next as 
     * argument. Once, this function call returns, we can
     * check if the current value of head is equal to
     * next value in the list, if true we return head.next
     * else we can return head.
     */
    
    if(!head || !head.next) return head;
    head.next = deleteDuplicates(head.next);
    return head.val === head.next.val ? head.next : head;
    
};

/*
var deleteDuplicates = function(head) {
    
    // Second Approach : Iterative Solution
    
    if(!head || !head.next) return head;
    var temp = head, pre = null;
    
    while(temp !== null && temp.next !== null){
        if(temp.val === temp.next.val){
            if(pre === null)    head = temp.next;
            else    pre.next = temp.next;
        }
        else    pre = temp;
        
        temp = temp.next;
    }
    return head;
};
*/
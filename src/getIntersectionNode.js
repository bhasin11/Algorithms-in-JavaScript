/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
    /* 
     * The approach is to first find the difference in the lengths
     * of the two lists. We then iterate the extra initial nodes of
     * the longer list. Once done, we can now check if any two 
     * corresponding nodes are equal. If yes, we return that else 
     * if all iterations are over, means there is no intersection
     * node and we return null.
     */
    
    var temp1 = headA, temp2 = headB,
        len1 = 0, len2 = 0;
    
    while(temp1 !== null || temp2 !== null){
        if(temp1 !== null) {
            len1++;
            temp1 = temp1.next;
        }
        
        if(temp2 !== null) {
            len2++;
            temp2 = temp2.next;
        }
    }

    temp1 = headA;
    temp2 = headB;
    
    while(len1 > len2){
        temp1 = temp1.next;
        len1--;
    }
    
    while(len2 > len1){
        temp2 = temp2.next;
        len2--;
    }
    
    while(temp1 !== null && temp2 !== null){
        if(temp1 == temp2) return temp1;
        temp1 = temp1.next;
        temp2 = temp2.next;
    }
    return null;
};
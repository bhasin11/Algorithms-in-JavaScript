/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    
    /* The approach is to return true if both current 
     * nodes are null or both have the same value. We
     * recursively call left and right children of 
     * both the nodes, and check if the above consitions
     * are valid in all the sub-trees.
     */
    
    if(p === null && q === null) return true;
    if(p === null || q === null) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right) && p.val === q.val;
    
};
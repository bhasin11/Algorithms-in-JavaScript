/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    /* 
     * The approach is to recursively call our function with
     * left and right child of the current root, and subtract
     * the value of current root from the sum. If we reach a 
     * leaf node, we just have to check if current value of 
     * sum is equal to value of current node. If yes, we return
     * true. If we get even one true, we return true as our 
     * result. Else, false.
     */
    
    if(root === null) return false;
    if(root.left === null && root.right === null && sum === root.val) return true;
    
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};
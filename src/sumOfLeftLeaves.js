/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    
    /*
     * The approach is to check if the current node is not 
     * null. If not, we will check if there is a left node, 
     * which doesn't have left and right child. If we find 
     * such a left node, we add it's value to a variable. 
     * Next, we also try to recursively call left and right 
     * child of the current node. We add their returned value 
     * to the variable sum. Finally, we return the sum variable.
     */
    
    
    if(root === null) return 0;
    var sum = 0
    if(root.left !== null && root.left.left === null && 
        root.left.right === null) sum = root.left.val;
    
    sum += sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
    
    return sum;
};
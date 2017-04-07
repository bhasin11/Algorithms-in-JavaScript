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
var minDepth = function(root) {
    /*
     * The approach is to find the minimum distance to
     * leaf node between left and right child of current
     * root. If the root itself is null, we can return 0.
     * Else we will return the smaller of left and right
     * side distance.
     */
    
    if(root === null) return 0;

    var left = minDepth(root.left) + 1;
    var right = minDepth(root.right) + 1;
    
    if(left == 1) return right;
    if(right == 1) return left;
    
    return left < right ? left: right;
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    
    /*
     * The approach is to recursively call the 'invertTree'
     * function and invert the left and right child of the 
     * current root. Finally, return the root.
     */
    
    if(root === null) return null;
    
    var left = invertTree(root.left);
    root.left = invertTree(root.right);
    root.right = left;
    
    return root;
};
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
function getMinimumDifference(root, vals = { prev: undefined, min: Number.MAX_VALUE }) {
    
    /*
     * The approach is to do an in-order traversal, and keep track of the minimum difference
     * and the value of the previous node. Since, we are doing an in-oder traversal, the 
     * sequence will be automatically sorted.
     */
    
    if (!root)     return;

    getMinimumDifference(root.left, vals);

    if (vals.prev >= 0) {
        vals.min = Math.min(Math.abs(vals.prev - root.val), vals.min);
    }
    vals.prev = root.val;

    getMinimumDifference(root.right, vals);

    return vals.min;
}
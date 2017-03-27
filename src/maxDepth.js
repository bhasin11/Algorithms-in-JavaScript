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
var maxDepth = function(root) {

	/*
	 * The approach is to check if the root is null or not.
	 * If null, we will return 0 as there is no depth for this root.
	 * Else, we will call maxDepth() with 'root.left' and 'root.right'.
	 * We will save the return values of both the calls.
	 * Finally, we will compare both the values and will return 
	 * larger value of the two. We will also add '1' to the result
	 * before returning, to include the depth of the 'root' element.
	 */

    if(root == null) return 0;
    
    var left = maxDepth(root.left);
    var right = maxDepth(root.right);
    
    return left > right ? left + 1 : right + 1;
};
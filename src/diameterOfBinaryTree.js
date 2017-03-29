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
var max = 0;
var diameterOfBinaryTree = function(root) {
    
    /*
     * The appraoch is to maintain a global variable 'max' and
     * recursively call all nodes of the goven tree. For each,
     * call check if the sum of maximum length of left and 
     * maximum length of right is greater than max, if yes, 
     * replace max with their sum. We also return greater length
     * of left and right, so that parent of current root can 
     * compare.
     */
    
    max = 0;
    helper(root);
    return max;
};

function helper(root){
    if(root == null || root  == undefined) return 0;
    var a = helper(root.left);
    var b = helper(root.right);

    max = max > a+b ? max : a+b;
    a = a > b ? a : b;

    return a+1;
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    /*
     * For a given root 4 cases are possible - 
     *  1. Either the root is null. Which means there 
     *     is no ancestor node, so we return null.
     *  2. Or of the two given values, we have one on
     *     each side of the root, so we can return root.
     *  3. Or both values lie on right side of the 
     *     current root. So, we recursively call our
     *     function with right child of root and the 
     *     two given values.
     *  4. Or both values lie on left side of the 
     *     current root. So, we recursively call our
     *     function with left child of root and the 
     *     two given values.
     */     
    
        if(root === null) return root;
        if( (p.val >= root.val && q.val <= root.val) || 
            (q.val >= root.val && p.val <= root.val) ) return root;
        
        else if(p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right, p, q);
        else return lowestCommonAncestor(root.left, p, q);
};
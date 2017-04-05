/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    
    /*
     * The approach is to keep appending the values of a 
     * node to a string, and call the helper function 
     * recursively. Once we find a leaf node, which doesn't 
     * have both left and right childs, add this string to 
     * the array. Finally, we can return the array which
     * will have strings representing all the fields.
     */
    
    var list = [];
        
    if(root === null) return list;
    
    helper(root, ""+root.val, list);
    
    return list;
};

function helper(root, str, list){
    if(root.left === null && root.right === null)    list.push(str);
    
    if(root.left !== null) helper(root.left, str+"->"+root.left.val, list);
    if(root.right !== null) helper(root.right, str+"->"+root.right.val, list);
}
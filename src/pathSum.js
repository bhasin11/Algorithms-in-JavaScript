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
 * @return {number}
 */
var pathSum = function(root, sum) {
        /*
         * The approach is to store values in a hash map and 
         * check if the current sum of all nodes we have
         * traversed, matches a value in the map such that
         * sum of the two is equal to the target valie. If 
         * possible, we add the value of such a key to a variable
         * and recursively call left and right child of this
         * node, so that we can traverse the whole tree.
         * Finally, each function call returns a count value, which
         * which is added to the return value of the previous call.
         * Finally, sum of all values is returned. 
         */
    
        var hm = new Map();
        
        if(root === null) return 0;
        hm.set(0, 1);
        
        return helper(root, sum, 0, hm);
    };
    
    function helper(root, target, sum, hm){
        
        if(root === null) return 0;
        sum += root.val;
        
        var count = hm.has(sum - target) ? hm.get(sum - target) : 0;
        hm.set(sum, hm.has(sum) ? hm.get(sum) + 1 : 1);
        
        count += helper(root.left, target, sum, hm) + helper(root.right, target, sum, hm);
        
        if(hm.get(sum) == 1)    hm.delete(sum);
        else    hm.set(sum, hm.get(sum) - 1);
        
        return count;
    }
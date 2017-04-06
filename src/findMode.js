/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    /*
     * The approach is to use a hash map and store the 
     * count of each value. We recursively call our 
     * helper function, which returns the maximum value 
     * of occurance of an element. We eventually return
     * maximum value to our main function. Now, we have
     * to find such keys in our hash map, which have 
     * occured in the tree equal to mode value. We add
     * such keys into an array list. Once done, we can
     * return an array of all those values.
     */
        
    var hm = new Map();
    
    var max = helper(root, hm);
    
    var list = [];
    
    
    
    return list;
};

function helper(root, hm){
    if(root === null) return 0;
    var temp1=0, temp2=0;
    
    temp1 = helper(root.left, hm);
    if(hm.has(root.val))    hm.set(root.val, hm.get(root.val)+1);
    else hm.put(root.val, 1);
    
    temp1 = temp1 > hm.get(root.val) ? temp1 : hm.get(root.val);
    temp2 = helper(root.right, hm);
    temp1 = temp1 > temp2 ? temp1 : temp2;

    return temp1;
}
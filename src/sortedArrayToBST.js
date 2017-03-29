/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    
    /* 
     * The apprach is to divide array in half and 
     * then make the middle element of the array as
     * root. Then, do the same for left and right
     * parts of the array from middle. Make these 
     * parts left and right child of the current
     * root. Repeat the process uptil we reach a
     * single element. Finally, return the root.
     */
    
    return helper(nums, 0, nums.length-1);
};

function helper(nums, start, end){
    if(start<=end){
        var middle = Math.floor((start + end)/2);
        var root = new TreeNode(nums[middle]);
        root.left = helper(nums, start, middle-1);
        root.right = helper(nums, middle+1, end);
        return root;
    }
    return null;
}
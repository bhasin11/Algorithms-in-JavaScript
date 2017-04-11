/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    /*
     * The approach is to reverse the whole
     * array and then reverse from the kth
     * index.
     */
    
    if(nums === null || nums.length === 0) return;
    
    k%=nums.length;
    
    helper(nums, 0, nums.length-1);
    helper(nums, 0, k-1);
    helper(nums, k, nums.length-1);
};

function helper(nums, start, end){
    while(start<end){
        var temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}
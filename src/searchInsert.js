/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    /*
     * The approach is to use a binary search to find
     * the target value in the given array or find
     * position of such a value, which will be closest
     * greater value than target value.
     */
    
    var start = 0, end = nums.length - 1, middle = 0;
    
    while(start <= end){
        middle = Math.floor(start + (end - start)/2);
        if(nums[middle] === target) return middle;
        if(nums[middle] > target) end = middle - 1;
        else start = middle + 1;
    }
    return start;
};


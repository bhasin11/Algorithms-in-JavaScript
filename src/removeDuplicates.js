/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    /*
     * The approach is to compare the current element
     * with the previous one and if they are not equal
     * move the current variable to the current value
     * of the counter. Finally, we can return the 
     * counter variable.
     */
     
    if(nums === null || nums.length === 0) return 0;
    if(nums.length == 1) return 1;
    var count = 1;
    
    for(var i=1;i<nums.length;i++){
        if(nums[i] != nums[i-1])
            nums[count++] = nums[i];
    }
    return count;
};
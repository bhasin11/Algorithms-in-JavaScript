/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(nums === null || nums === undefined || nums.length === 0) return;
    var ctr=0;
    for(var i=0;i<nums.length;i++){
        if(nums[i] !== 0){
            nums[ctr++] = nums[i];
        }
    }
    for(i=ctr;i<nums.length;i++){
        if(nums[i] !== 0){
            nums[i] = 0;
        }
    }
};

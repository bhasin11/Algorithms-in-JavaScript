/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    /*
     * The approach is to save the sum of values
     * of an array from begining uptil the current
     * index into the current index. So, we will
     * get an array where each value will represent 
     * sum of values of the array uptil itself. For
     * any give start and end index, now we just
     * have to return the difference of values for
     * those two indexes.
     */
     this.nums = nums;
     for(var i=1;i<nums.length;i++){
        nums[i] += nums[i-1];
     }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    if(i === 0) return this.nums[j];
    return this.nums[j] - this.nums[i-1];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */
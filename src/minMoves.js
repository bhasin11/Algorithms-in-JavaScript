/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    
    /*
     * The approach is to find the minimum value of the array.
     * Then subtract it from all other values. Add each difference 
     * to a variable. Finally, the value of this variable will be
     * minimum moves required.
     */
    
    var count = 0, min = Number.MAX_VALUE;
    
    for(var i=0;i<nums.length;i++){
        min = nums[i] < min ? nums[i] : min;
    }
    
    for(i=0;i<nums.length;i++){
        count += (nums[i] - min);
    }
    return count;
};
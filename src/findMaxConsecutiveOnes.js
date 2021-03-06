/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    
    /*
     * The approach is to travrse the given array and
     * check if current value of the array is 1.
     * If yes, we increment the value of 'current'
     * value by 1.
     * Else, we make value of 'current' to 0.
     * For each iteration, we also compare the value of
     * 'max' and 'current', and store the larger value
     * in 'max'.
     * Finally, we return the value of 'max'.
     */
    var current = 0, max = 0;
    
    for(var i=0;i<nums.length;i++){
        if(nums[i] == 1)    current++;
        else    current = 0;

        max = max > current ? max : current;
    }
    return max;
};

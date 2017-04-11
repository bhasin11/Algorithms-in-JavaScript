/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    /*
     * The approach is to use current value and go
     * to index (equal to that value) and make value
     * at that index change sign. So, next time if we
     * come to that value and we find, negative value
     * we can add that value to our output list.
     */
    
    var result = [];
    if(nums.length === 0) return result;
    
    for(var i=0;i<nums.length;i++){
        var value = Math.abs(nums[i]) - 1;
        
        if(nums[value]<0) result.push(value + 1);
        nums[value] *= -1;
    }
    return result;
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var n = nums.length,
        res = new Array(n),
        right = 1;
        
    res[0] = 1;
    
    for (var i = 1; i < n; i++) {
        res[i] = res[i - 1] * nums[i - 1];
    }

    for (var i = n - 1; i >= 0; i--) {
        res[i] *= right;
        right *= nums[i];
    }
    return res;
};
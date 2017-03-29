/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    /*
     * The approach is to XOR values of the array and all
     * indexes of an array together. We also should consider
     * to XOR the length of the input array as well. Once we
     * iterate through the entire array elements, we will 
     * only be left with the missing value.
     */
     
    var missing = nums.length;
    
    for(var i=0;i<nums.length;i++){
        missing ^= i;
        missing ^= nums[i];
    }
    return missing;
};

/*
var missing = nums.length == 1 ? 1 : nums.length*(nums.length+1)/2;

for(var i=0;i<nums.length;i++){
    missing -= nums[i];
}
return missing;
*/
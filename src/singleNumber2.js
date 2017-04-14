/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    /*
     * The approach is to find the rightmost set bit, 
     * and then divide numbers into two groups. For 
     * each check if the set bit is there in that number
     * too. This will seperate the numbers into two parts
     * and eventually each will represent a number that we
     * require.
     */
    
    var output = new Array(2);
    output[0] = 0;
    output[1] = 0;
    if(nums.length === 0) return output;
    
    var temp = nums[0];
    
    for(var i=1;i<nums.length;i++)
        temp^=nums[i];
    
    temp &= -temp;
    
    for(i=0;i<nums.length;i++){
        if( (temp & nums[i]) !== 0)    output[0]^=nums[i];
        else    output[1]^=nums[i];
    }
    
    return output;
};
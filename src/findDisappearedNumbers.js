/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    
    /*
     * The basic approach is to iterate through the input array and 
     * mark elements as negative. In this way all the numbers that we 
     * have seen will be marked as negative. In the second iteration, 
     * if we encounter positive value, it implies we have never seen 
     * that index before, so just add it to the 'result' array.
     * Finally, we return the 'result' array.
     */
    
    var result = [];
    
    for(var i=0;i<nums.length;i++){
        var temp = Math.abs(nums[i])-1;
        if(nums[temp] > 0) nums[temp] = -nums[temp];
    }
    for(i=0;i<nums.length;i++)
        if(nums[i] > 0) result.push(i+1);
    
    return result;
};
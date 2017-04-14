/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    /*
     * The approach is to keep equaling two values
     * of the array. For that we can sort the array 
     * first and then can compare two elements from
     * start and end, and add their difference. We
     * can continue until the two pointers meet.
     */
    if(nums.length === 0) return 0;
    
    var start = 0, end = nums.length-1, sum = 0;
    nums.sort(function(a, b){
        return a-b;
    });
    
    while(start<end){
        sum += nums[end--]-nums[start++];
    }
    return sum;
};
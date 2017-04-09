/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    // The approach is to keep track of top 3 numbers of the array.
        
    var first = Number.MIN_VALUE, second = Number.MIN_VALUE, 
        third = Number.MIN_VALUE, count = 0, 
        flag = true;

    if(nums === null || nums.length === 0) return 0;
    
    for(var i=0;i<nums.length;i++){
        if(nums[i] != Number.MIN_VALUE && 
            (nums[i] == first || nums[i] == second)) continue;
        
        if(nums[i]>first){
            third = second;
            second = first;
            first = nums[i];
            count++;
        }
        
        else if(nums[i]>second){
            third = second;
            second = nums[i];
            count++;
        }
        else if(nums[i]>=third){
            if(nums[i] == Number.MIN_VALUE && flag) {
                flag = false;
                count++;
            }
            else if(nums[i] != Number.MIN_VALUE) count++;
            third = nums[i];
        }
    }
    return count >= 3  ? third : first;
};
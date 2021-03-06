/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    /*
     * The approach is to iterate through the given
     * array, and move all those values which are
     * not equal to given val to the begining of 
     * the array. We will maintain a counter variable
     * which will add a new element to the left of
     * array and will increment by 1 each time.
     * Finally, we will return this variable which
     * will represent number of non-val variables.
     */
     
    if(nums == null || nums.length == 0) return 0;
    
    var counter = 0;
    
    for(var i=0;i<nums.length;i++){
        if(nums[i] != val)
            nums[counter++] = nums[i];
    }
    return counter;
};

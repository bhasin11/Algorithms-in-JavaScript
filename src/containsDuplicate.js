/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    /*
     * The approach is to create a new Set of all
     * values of the array and then compare length
     * of array and size of set. If the size of set
     * is smaller return true, else return false.
     */
    
    return nums.length > (new Set(nums)).size;
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    /*
     * The approach is to iterate through elements of
     * the given loop, and use a hash map and check
     * if there is a key, which is equal to difference
     * of target and current array element, and at the 
     * same time difference of the two indexes is not
     * more than given 'k'. If yes, we can return the
     * two indexes in an array.
     */
    
    if(nums === null || nums.length === 0) return false;
    
    var hm = new Map();
    
    for(var i=0;i<nums.length;i++){
        if(hm.has(nums[i])){
            var value = hm.get(nums[i]);
            if(i-value <= k) return true;
            else hm.set(nums[i], i);
        }
        else hm.set(nums[i], i);
    }
    return false;
};
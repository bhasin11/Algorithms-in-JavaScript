/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    /*
     * The approach is to iterate through elements of
     * the given loop, and use a hash map and check
     * if there is a key, which is equal to difference
     * of target and current array element. If yes,
     * we can return the two indexes in an array.
     */
    
    var result = new Array(2);
    var map = new Map();

    if(nums === null || nums.length < 2) return result;
    
    for(var i=0;i<nums.length;i++){
        if(map.has(target - nums[i])){
            result[0] = map.get(target - nums[i]);
            result[1] = i;
            return result;
        }
        map.set(nums[i], i);
    }
    return result;
};
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
    /*
     * The approach is to use two pointers, one starting from
     * left side of the array and other from the end. Add the
     * array values of both pointers and check
     *      > if sum is equal to target, return an array with
     *        both values.
     *      > else if sum is greater than target, decrement
     *        right pointer by 1.
     *      > else increment left pointer by 1.
     * Keep iterating, until left pointer is lesser than 
     * right pointer. Since, it is mentioned that there is 
     * always one solution, we will always get a result.
     */
    
    
    var left = 0, right = numbers.length-1;
    
    while(left < right){
        if(numbers[left] + numbers[right] == target){
            var result = [];
            result.push(left + 1);
            result.push(right + 1);
            return result;
        }
        if(numbers[left] + numbers[right] > target) right--;
        else left++;
    }
};
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    
    /*
     * The approach is to keep moving result variable
     * onr bit to right, and add 1 to result variable
     * if the current rightmost bit of given number is
     * 1. Then we can right shift given number by 1.
     * We have to continue this process 32 time to
     * get a 32-bit reversed value.
     */
    
    var result = 0, count = 32;

    while (count--) {
        result *= 2;
        result += n & 1;
        n = n >> 1;
    }
    
    return result;
};
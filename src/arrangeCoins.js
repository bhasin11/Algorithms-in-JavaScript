/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    /*
     * The approach is to keep subtracting the 
     * current step count from the given number,
     * and increment the value of counter for 
     * each iteration. Finally, return the value 
     * of the counter.
     */
    
    var count = 0, step = 1;
    
    while(n >= step){
        count++;
        n -= step;
        step++;
    }
    return count;
};
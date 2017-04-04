/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    /*
     * The approach is to keep track of the last 
     * two steps. Our current value, will be equal
     * to sum of previous two steps.
     */
        
    if(n <= 0) return 0;
    
    var oneaway = 1, twoaway = 0;
    
    for(var i=0;i<n;i++){
        var temp = oneaway;
        oneaway += twoaway;
        twoaway = temp;
    }
    return oneaway;
};
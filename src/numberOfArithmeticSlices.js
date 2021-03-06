/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
    /*
     * The approach is to check the difference of
     * consecutive values, and if the difference is
     * same. If yes, we can add 1 to our count varible.
     * Else, we can make it 0. 
     */
    
    if(A.length < 3) return 0;
    
    var sum = 0, count = 0;
    
    for(var i=2;i<A.length;i++){
        if(A[i]-A[i-1] == A[i-1]-A[i-2]) count++;
        else count = 0;
        
        sum += count;
    }
    return sum;
};
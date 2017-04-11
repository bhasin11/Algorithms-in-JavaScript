/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    /*
     * The approach is to check if the reversed number 
     * doesn't overflow, so we have to check after rotating 
     * the number in each iteration.
     */
    
    var result = 0, reversedInt = 0;
    var sign = x > 0 ? 1 : -1;
    x = Math.abs(x);
    
    while(x>0) {
        result = x%10;
        x = Math.floor(x/10);
        
        //Should no larger than Math.floor(Number.MAX_VALUE/10)
        if(reversedInt >= 214748365 || 
            reversedInt <= -214748365)    return 0;
        
        reversedInt = reversedInt*10 + result;
    }
    
    return reversedInt*sign
};
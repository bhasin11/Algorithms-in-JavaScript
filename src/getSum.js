/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    
    /*
     * The approach is to AND 'a' and 'b'. Save the 
     * result to a variable 'carry'. Now, XOR 'a' and 
     * 'b', and save the result to 'a'. Now, the carry
     * has to be added back to the original values, so
     * we set 'b' as left shifted value of carry by '1'.
     * We continue the above steps until 'b' is equal to
     * zero. Finally, we return the value of 'a', whose 
     * value is now equal to the sum of both inputs.
     */
    
    if(a === 0) return b;
    if(b === 0) return a;
        
    while(b !== 0){
        var carry = a&b;
        a = a^b;
        b = carry<<1;
    }
    return a;
};
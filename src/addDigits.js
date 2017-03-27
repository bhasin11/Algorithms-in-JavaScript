/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    
    /* The approach is to find the modulo of the input
     * and then check if the modulo is 0, return 9.
     * This can be understood from examples like 36,
     * 54 etc. Else return the result of modulo of the
     * input with 9. There is another corner case which
     * coincides with the first if, here we have to check 
     * if the number is not 0, and if yes we should return
     * 0 instead of 9.
     */
    
    
    if(num === 0) return 0;
    if(num%9 === 0) return 9;
    return num%9;
};
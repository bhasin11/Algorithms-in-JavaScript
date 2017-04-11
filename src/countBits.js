/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    /*
     * The approach is that all even numbers have the same
     * number of bits as their half values have. But, for
     * the odd numbers we have an additional one (the right
     * most bit). Following this we can calculate the number
     * of bits of each number starting from 0 upto 'num'.
     */
    
    var output = new Array(num + 1);
    output[0] = 0; // otherwise we will get NaN for all values in the array
    
    for(var i=0;i<=num;i++){
        output[i] = output[Math.floor(i/2)] + (1 & i);
    }
    return output;
};
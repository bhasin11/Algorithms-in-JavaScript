/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    
    /* The approach is to traverse from 1 until 'n' using a for-loop.
     * We check if the current value is a multiple of 3 and 5 both, or
     * We check if the current value is a multiple of 3, or
     * We check if the current value is a multiple of 5, else
     * We Add the current value as a String to the 'result' array.
     * Finally, we return the array.
     */
    var result = [];
    
    for(var i=1;i<=n;i++){
        if(i%3 == 0 && i%5 == 0)    result.push("FizzBuzz");
        else if(i%3 == 0)    result.push("Fizz");
        else if(i%5 == 0)    result.push("Buzz");
        else    result.push(""+i);
    }
    return result;
};

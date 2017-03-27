/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    
    /*
     * The approach is to move left from the end of 
     * the string and evaluate the ASCII value of 
     * each character. While moving left, we also 
     * multiply the char value to power of 26. This 
     * is similar to decimal numbers are multiplied 
     * by 10 on moving left. We then add the product 
     * to a sum variable. We repeat the process until 
     * we reach the beginning of the array, and then
     * return the sum variable.
     */
    
    var i = s.length-1, j = 0, sum = 0;
    
    while(i>=0){
        var value = s.charCodeAt(i--)-64;
        value *= Math.pow(26, j++); 
        sum += value;
    }
    return sum;
};
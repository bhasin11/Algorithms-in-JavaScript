/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    /*
     * The approach is to find the length of the number 
     * where the nth digit is from. Then, find the actual 
     * number where the nth digit is from. And finally, 
     * find the nth digit and return it.
     */
    
    var count = 1, sum = 1, fast = 9;
    
    while(n > fast*count){
        n -= fast*count;
        count += 1;
        fast *= 10;
        sum *= 10;
    }
    
    var numb = sum + Math.floor((n-1)/count);
    var num = numb.toString();
    return parseInt(num.charAt((n - 1) % count));
};
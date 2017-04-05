/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    /*
     * The approach is to use a binary search to
     * get closer to square root of input number.
     * If we find square root of the number, we 
     * return true. Else return false
     */
    
    if(num <= 0) return false;
    
    var start = 0, end = num, middle = 0,
        sqr = 0.0, temp = num;
    
    while(start <= end){
        middle = Math.floor(start + (end-start)/2);
        sqr = middle*middle;
        if(sqr == temp) return true;
        else if(sqr > temp) end = middle - 1;
        else start = middle + 1;
    }
    return false;
};
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    
    /*
     * The approach is to find the sum of squares
     * of each digit of a number, and then check
     * if that is equal to 1 => return true, or
     * if that is already in the set => return false,
     * or else add it to set.
     */
    
    var set = new Set();
    var temp = n, second = 0;
    
    while(true){
        while(temp > 0){
            second += (temp%10)*(temp%10);
            temp= Math.floor(temp/10);
        }
        if(second == 1) return true;
        if(set.has(second)) return false;
        else set.add(second);
        temp = second;
        second = 0;
    }
};
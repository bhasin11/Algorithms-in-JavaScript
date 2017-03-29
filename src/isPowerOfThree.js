/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    
    // Check with the highest possible power of 3!!
    
    if(n<=0) return false;
    return 1162261467%n == 0;
};

/*
var isPowerOfThree = function(n) {

    // Second Aproach
    return n>0 && (n==1 || (n%3==0 && isPowerOfThree(n/3)));
};

*/

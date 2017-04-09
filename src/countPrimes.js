/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    /*
     * The approach is to move from 2 to n,
     * and check if the current number is 
     * factor of n, if yes, we can make sure
     * not to count this number and all the 
     * multiples of this number less than n.
     */
     
    if(n<3) return 0;
    
    var count = 0,
        flags = new Array(n+1);
    
    for(var i=2;i<n;i++){
        if(!flags[i]){
            count++;
            var val = i, j = 1;
            while(val*j < n){
                flags[val*j] = true;
                j++;
            }
        }
    }
    return count;
};
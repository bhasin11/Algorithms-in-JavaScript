/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    
    /*
     * The approach is to sort both input arrays,
     * then check if the current value of child is
     * less than or equal to the current value of
     * cookie. If yes, move to next child and
     * increment count by 1. In each iteration, we
     * also move the pointer to cookie array by 1.
     * Finally, we return the count variable.
     */
    
    g.sort(function(a,b) {
        return a-b;
    });
    s.sort(function(a,b) {
        return a-b;
    });
    
    var count = 0, i=0, j=0;
    while(i < g.length && j < s.length){
        if(g[i] <= s[j]){
            i++;
            count++;
        }
        j++;
    }
    return count;
};
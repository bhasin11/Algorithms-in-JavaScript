/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    
    /* 
     * The approach is to use a temporary array and store
     * frequency of each letter in that array. Then add 
     * all the odd counts and finally subtract from the 
     * length of the input string.
     */
    
    var counts = {};
    for (var i = 0; i < s.length; i++) {
        counts[s[i]] = (counts[s[i]] || 0) + 1;
    }
    var odds = 0;
    for (var key in counts) {
        odds += counts[key] % 2;
    }
    console.log(!!odds);
    return s.length - odds + !!odds;
};
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    /*
     * The approach is to create substrings as candidates,
     * and check if they can be repeatedly appended by 
     * themselves to form the input string. To make the 
     * algorithm faster, in each iteration we can check 
     * if the length of the original string is a multiple 
     * of candidate string and can only proceed if that
     * is true. If in any of the iterations we find a
     * substring which can be appended any number of times
     * to make the input string we return true, else
     * we return false.
     */
    
    if(s === null || s.length === 0) return false;
    
    var candidate = "", times = 0;
    
    for(var i=1;i<=s.length/2;i++){
        if(s.length%i !== 0) continue;

        candidate = s.substring(0, i);
        times = s.length/i;
        var str = "";
        
        while(times-- > 0)    str = str + candidate;
        
        if(s === str) return true;
    }
    return false;
};
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    /*
     * The approach is to find the needle in the string,
     * by checking one character at a time. If we reach
     * till the length of needle string, means we have
     * found needle, else we start searching again from
     * one character right from the initial search.
     */
     
    for(var i=0;;i++){
        for(var j=0;;j++){
            if(j == needle.length) return i;
            if((i+j) == haystack.length) return -1;
            if(haystack.charAt(i+j) != needle.charAt(j)) break; 
        }
    }
};
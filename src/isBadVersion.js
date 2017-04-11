/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        /*
         * The approach is to use binary search and 
         * find left-most occurance of the bad version.
         */
        
        var start = 1, end = n, middle = 0;
        
        while(start<end){
            middle = Math.floor(start + (end-start)/2);
            
            if(!isBadVersion(middle)) start = middle+1;
            else end = middle;
        }
        return end;
    };
};
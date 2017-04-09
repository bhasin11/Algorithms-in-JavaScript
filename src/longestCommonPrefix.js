/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    /*
         * The approach is to make the first string of the
         * input array as candidate, and then try if the string
         * is a prefix of next strings. If not, reduce the
         * candidate string by one character from the end and 
         * compare again.
         */
        
        if(strs === null || strs.length === 0) return "";
        
        var i = 1;
        var candidate = strs[0];
        
        while(i < strs.length){
            while(strs[i].indexOf(candidate) !== 0){
                candidate = candidate.substring(0, candidate.length - 1);
            }
            i++;
        }
        return candidate;
};

/*

var longestCommonPrefix = function(strs) {
    
    // Second Approach: Slower

    if(strs === null || strs.length === 0) return "";
    var output = "";
    
    for(var i=0;i<strs[0].length;i++){
        var ch = strs[0].charAt(i);
        
        for(var j=1;j<strs.length;j++){
            if(i>=strs[j].length) return output;
            if(strs[j].charAt(i) != ch) return output;
        }
        output += "" + ch;
    }
    return output;
};

*/
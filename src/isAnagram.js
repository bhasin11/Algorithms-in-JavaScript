/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    /*
     * The approach is to iterate through the string s,
     * and check if the current character is present in
     * string t, if yes, we remove that character from
     * string t, else we return false. Finally, we 
     * return true, if the current length of string t
     * is equal to 0.
     */
    
    for(var i=0;i<s.length;i++){
        if(t.indexOf(s.charAt(i)) !== -1){
            t = t.replace(s.charAt(i),'');
        }
        else return false;
    }
    return t.length === 0;
};
/*
    // Second Approach
    //return s.split('').sort().toString() === t.split('').sort().toString()
*/
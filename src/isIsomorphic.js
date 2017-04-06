/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    /*
     * The approach is to use character of one string
     * as an index and character of other string as value
     * to that index in a character array. If we find an
     * index which is not zero and has a different value 
     * than the correspondingg character in other string,
     * we return false. Else, if all iterations are done,
     * we return true.
     */
     
    if(s === null || t === null ||
        s.length != t.length ) return false;
    
    var arr = new Array(256);
    var ch = new Array(256);

    for(var i=0;i<s.length;i++){
        if(!arr[s.charAt(i)] && !ch[t.charAt(i)]){
            arr[s.charAt(i)] = 1;
            ch[t.charAt(i)] = s.charAt(i);
        }
        else if(ch[t.charAt(i)] != s.charAt(i)) return false;
    }
    return true;
};
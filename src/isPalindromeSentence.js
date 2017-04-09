/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindromeSentence = function(s) {
    /*
     * The approach is to use two pointers and make each stop
     * if they point to a alphanumeric character. If they both
     * point, check if the characters are equal and return false
     * if not. Else continue.
     */
    
    if(s === null || s.length === 0) return true;
    
    s = s.toLowerCase();
    var flag1 = false, flag2 = false,
        i = 0, j = s.length - 1;
    
    while(i<j){
        if( !(s.charCodeAt(i) >=97 && s.charCodeAt(i) <=122) && !(s.charCodeAt(i) >=48 && s.charCodeAt(i) <=57) ){
            i++;
        }
        else flag1 = true;
        
        if( !(s.charCodeAt(j) >=97 && s.charCodeAt(j) <=122) && !(s.charCodeAt(j) >=48 && s.charCodeAt(j) <=57) ){
            j--;
        }
        else flag2 = true;
        
        if(flag1 && flag2){
            if(s.charAt(i) != s.charAt(j)) return false;
            i++;
            j--;
            flag1 = false;
            flag2 = false;
        }
    }
    return true;
};

/*

var isPalindromeSentence = function(s) {
    // Second Approach: Slower
    
    if(s === null || s.length === 0) return true;
    
    s = s.toLowerCase();
    
    var str = "abcdefghijklmnopqrstuvwxyz0123456789",
        i = 0, j = s.length - 1;
    
    while(i<j){
        if(str.indexOf(s.charAt(i)) == -1)    i++;

        if(str.indexOf(s.charAt(j)) == -1)    j--;

        if(str.indexOf(s.charAt(i)) !== -1 && str.indexOf(s.charAt(j)) !== -1 ){
            if(s.charAt(i++) != s.charAt(j--)) return false;
        }
    }
    return true;
};

*/
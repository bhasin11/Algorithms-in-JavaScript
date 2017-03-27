/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    
    /*
     * The approach is to use 'map' function of Arrays, and
     * find ASCII value of all the characters of String 's'.
     * Then, use a reduce mehtod and add all the ASCII values.
     * Do the same for String 't'. Once done, the difference
     * between two sums will be the ASCII value of the new 
     * character. Finally, we can return the new character.
     */
    
    if(s.length == 0) return t.charAt(0);

    var sum1 = s.split('').map(e => e.charCodeAt(0)).reduce((a, b) => a + b);
    var sum2 = t.split('').map(e => e.charCodeAt(0)).reduce((a, b) => a + b);
    
    return String.fromCharCode(sum2 - sum1);
};

/*
	// Second Approach
    // The approach is to find the ASCII value of each character of both
    // the strings. Add the ASCII values of each character of String 't' 
    // to a temporary variable and subtract the ASCII values of each
    // character of String 's' from the temporary variable. Finally,
    // return the character with ASCII value of the temp variable. 
     
    var temp = t.charCodeAt(t.length - 1);
    
    for(var i=0;i<s.length;i++)    temp += t.charCodeAt(i) - s.charCodeAt(i);
    
    return String.fromCharCode(temp);
*/

/*
	// First Approach
    // The approach is to XOR all characters of both the strings.
    // The value left will be the ASCII code of the new character.
    
    var temp = t.charCodeAt(t.length - 1);
    
    for(var i=0;i<s.length;i++){
        temp ^= t.charCodeAt(i);
        temp ^= s.charCodeAt(i);
    }

    return String.fromCharCode(temp);
*/
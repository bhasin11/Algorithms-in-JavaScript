/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    /* 
     * To solve, we use a two pointer approach, one begins from
     * start of the string and other from the end of the string.
     * We move (left one increments, right one decrements) the 
     * two pointers until they both point to a vowel. We then
     * interchange characters of both pointers and proceed. We
     * terminate the loop when left and right pointers meet.
     * Finally, we return the new string.
     */
    
    if(s === null || s.length === 0) return s;
    var vowels = "aeiouAEIOU";
    var chars = s.split('');
    var start = 0, end = s.length - 1;
    
    while(start<end){
        if(vowels.indexOf(chars[start]) === -1)    start++;
        
        if(vowels.indexOf(chars[end]) === -1)    end--;
        
        if(vowels.indexOf(chars[start]) !== -1 && vowels.indexOf(chars[end]) !== -1){
            var temp = chars[start];
            chars[start++] = chars[end];
            chars[end--] = temp;
        }
    }
    return chars.join('');
};


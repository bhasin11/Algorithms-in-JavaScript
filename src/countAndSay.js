/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    /*
     * The approach is to keep a track of number of 
     * counts of current character, and once we reach
     * end of string or encounter another character,
     * we append count and then character to current 
     * string. We continue till end of string, and
     * recursively follow the process until we reach
     * the count 'n'. We then return the string.
     */
    
    var s = "1";
    for(var i=1;i<n;i++){
        s = helper(s);
    }
    return s;
};
    
function helper(s){
    var sb = "", curr = s.charAt(0),
        count = 1, i = 1;
    
    while(i < s.length){
        console.log('line 28');
        if(curr == s.charAt(i))    count++;
        else{
            sb = sb + "" + count + "" + curr;
            count = 1;
            curr = s.charAt(i);
        }
        i++;
    }
    sb = sb + "" + count + "" + curr;
    return sb;
}

/*
var countAndSay = function(n) {
    var str = '1';
    for (var i=1; i < n; i++) {
        var strArray = str.split('');
        str ='';
        var count = 1;
        // Loop through current nth level line
        for (var j=0; j < strArray.length; j++) {
            // Next digit is different
            if (strArray[j] !== strArray[j+1]) {
                // Go to next non-matching digit
                str += count + strArray[j];
                count = 1;
            }
            else {
                count++;
            }
        }
    }
    return str;
};
*/

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    /*
     * The approach is to make the remainder 
     * value of the number (as a character)
     * and add it to output string. Keep
     * adding, until number becomes 0.
     */
     
    var result = "";

    while(n>0){
        n--;
        result = String.fromCharCode(65 + n % 26) + result;
        n = Math.floor(n/26);
    }

    return result;
};
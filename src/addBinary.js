/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    /*
     * The approach is to use two pointers from
     * end of the strings, and add the corresponding 
     * values of each string. Append their sum 
     * without overflow in the output string, and 
     * maintain the overflow for next iteration. 
     * Finally, we can return the output string.
     */
    
    if(a.length === 0) return b;
    if(b.length === 0) return a;
    
    var i = a.length - 1, 
        j = b.length - 1,
        carry = 0,
        sb = "";
    
    while(i>=0 || j>=0){
        console.log(a.charAt(i));
        if(i>=0) carry += a.charAt(i--);
        if(j>=0) carry += b.charAt(j--);
        sb = "" + carry%2 + sb;
        carry = Math.floor(carry/2);
    }
    console.log(sb);
    console.log(carry);
    if(carry !== 0) sb = "1" + sb;
    return sb;
};
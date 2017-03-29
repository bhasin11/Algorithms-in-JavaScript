/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    
    /*
     * The approach is to move from end to begining of strings and
     * add correspinding characters of both strings and check if 
     * there is any carry. If there is a carry, save that for next 
     * iteration. Append the sum%10 of both characters to the 
     * result string. If one string terminates, we can still add
     * character of single string to our result.
     */
    
    var a=0, carry = 0, i = num1.length-1, j = num2.length-1;
    var result = "";
    while(i>=0 || j>=0){
        a=0;
        if(i>=0) a = num1.charCodeAt(i--) - 48;
        if(j>=0) a += num2.charCodeAt(j--) - 48;
        console.log(a);
        result = "" + (Math.floor((a+carry)%10)) + result;
        carry = Math.floor((carry+a)/10);
    }
    if(carry != 0) result = "" + carry + "" + result;
    return result;
};
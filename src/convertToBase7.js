/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    
    /* 
     * The approach is to keep dividing the input
     * by 7 and appending the result in the begining 
     * of the string until the number becomes 0.
     * We also have to keep record if the number was 
     * negative or not. Finally, we can return the 
     * reesulting string.
     */
    
    var sign = num >= 0 ? 1 : -1;
    var result = "";
    num = Math.abs(num);
    while(num > 0){
        result = "" + (num%7) + result;
        num = Math.floor(num/7);
    }
    if(result == "") return "0";
    
    return sign == 1 ? result : "-"+result;
};
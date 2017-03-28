/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    
    /*
     * The approach is to use two nested loops. One loop will iterate 
     * through minutes(0-59) and other wil iterate through hours(0-11). 
     * We will calculate number of 1 bits in binary representation of
     * both the numbers. Once done, we will check if the sum of both
     * values is equal to given number. If yes, we will push these 
     * numbers in the form of formatted string to the result array.
     * Loop through both the arrays, and finally return the result
     * array.
     */
     
    
    var result = [];
    for(var i = 0;i<12;i++){
        var outer = i.toString(2).split('1').length - 1;
        for(var j=0;j<60;j++){
            var inner = j.toString(2).split('1').length - 1;
            
            if((outer+inner) === num)    result.push(i+":"+ ((j<10) ? "0"+j : j));
        }
    }
    return result;
};
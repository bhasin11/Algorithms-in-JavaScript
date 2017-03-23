

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    var sum=0,temp;
    while(num){
        temp=num%10;
        sum+=sum+temp>=10?temp-9:temp;    
        num=parseInt(num/10);
    }
    return sum;
};
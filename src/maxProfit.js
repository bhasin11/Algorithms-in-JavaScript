/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    /* 
     * The approach is to keep track of the minimum stock
     * value as we iterate through the array. In each 
     * iteration we also check if the difference of 
     * current value and minimum stock is greater than
     * max value, if yes, we replace max with it.
     * Finally, we return the max value.
     */
    
    var min = Number.MAX_VALUE, max = 0;
    
    for(var i=0;i<prices.length;i++){
        if(min > prices[i]) min = prices[i];
        
        max = max > (prices[i]-min) ? max : (prices[i]-min);
    }
    return max;
};
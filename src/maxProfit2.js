/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    /*
     * The approach is to compare all array elements with
     * minimum value so far, and add if current value is
     * more than current minimum value. Since, after selling 
     * a stock, we have to replace minimum value with 
     * current array element, and at the same time, if current
     * array value is lesser than current minimum, we still
     * got to replace current minimum, so we update the value
     * of minimum value in all iterations.
     */
    
    var min = Number.MAX_VALUE, max = 0, profit = 0;
    
    for(var i=0;i<prices.length;i++){
        if(min < prices[i]) profit += (prices[i] - min);
        min = prices[i];
    }
    return profit;
};
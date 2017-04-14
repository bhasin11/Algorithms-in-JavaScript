/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    /*
     * The approach is to add the duration for each attack and
     * if the difference between current attack and previous
     * one is less than given 'duration', then we have to
     * reduce the difference from the total attack sum as well.
     */
    
    if(timeSeries.length === 0) return 0;
    
    var total = duration;
    
    for(var i=1;i<timeSeries.length;i++){
        if(timeSeries[i]-timeSeries[i-1] < duration)
            total-=(timeSeries[i-1]+duration-timeSeries[i]);
        
        total+=duration;
    }
    return total;
};
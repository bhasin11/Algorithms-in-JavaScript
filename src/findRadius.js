/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    /* 
     * The approach is based on two pointers, the idea is 
     * to find the nearest heater for each house, by comparing 
     * the next heater with the current heater. So, we can 
     * return the maximum distance.
     */
     
    houses.sort(function(a, b){
        return a-b;
    });
    heaters.sort(function(a, b){
        return a-b;
    });
    
    var i = 0, res = 0;
    
    for (var k=0;k<houses.length;k++) {
        while (i < heaters.length - 1 && heaters[i] + heaters[i + 1] <= houses[k] * 2) {
            i++;
        }
        res = Math.max(res, Math.abs(heaters[i] - houses[k]));
    }
    return res;
};
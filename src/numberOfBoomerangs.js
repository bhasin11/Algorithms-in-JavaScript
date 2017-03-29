/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    
    /*
     * The approach is to find how many points have the same 
     * distance from a given point. If we find more than one, 
     * we can surely add them to our output count varible. To
     * calculate distance we have used another function, and
     * to keep track of the distances from the current point,
     * we create a new Map object for each outer iteration.
     * Once we are done with the iterations, we return the
     * count variable.
     */
     
    var count = 0;
    
    for(var i=0;i<points.length;i++){
        var map = new Map();
        for(var j=0;j<points.length;j++){
            if(i === j) continue;
            
            var d = getDistance(points[i], points[j]);
            
            if(map.get(d)) map.set(d, map.get(d) + 1);
            else map.set(d, 1);
        }
        
        map.forEach(function(m){
            count += m*(m-1);
        });        
    }
    return count;
};

function getDistance(a, b){
    var p = a[0] - b[0];
    var q = a[1] - b[1];
    
    return p*p + q*q;
}
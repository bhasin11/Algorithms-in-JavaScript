/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    
    /*
     * The approach is to traverse 'grid' from top-to-bottom and left-to-right.
     * If we find 1, we increment 'island' variable by 1, and
     * check if one cell right (if any) is 1, and 
     * check if one cell below (if any) is 1.
     * If we find a 1 in a cell, we increment 'neighbour' variable by 1.
     * Then, we multiply 4 to 'island' and 2 to 'neighbour'.
     * Finally, we return difference of island*4 and neighbour*2.
     */
    var island = 0, neighbour = 0;
    
    for(var i=0;i<grid.length;i++){
        for(var j=0;j<grid[i].length;j++){
            if(grid[i][j] == 1){
                island++;
                if( (i!=grid.length-1 && grid[i+1][j] == 1) )    neighbour++;
                if(j!=grid[i].length-1 && grid[i][j+1] == 1) neighbour++;
            }
        }
    }
    return 4*island - 2*neighbour;
};

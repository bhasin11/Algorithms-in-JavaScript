/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    /*
     * The approach is to iterate through the two-dimensional
     * array, and check if the current character is 'X'. If yes,
     * we can increment the count if
     *     1. if element on right is not 'X' or 
     *        there is no element on right, AND,
     *     2. if element below is not 'X' or 
     *        there is no element below
     */ 
    
    if(board.length === 0 || board[0].length === 0) return 0;
    
    var count = 0;
    
    for(var i=0;i<board.length;i++){
        for(var j=0;j<board[i].length;j++){
            if(board[i][j] == 'X'){
                if(i==board.length-1 || board[i+1][j] !='X' )
                    if(j == board[i].length-1 || board[i][j+1] !='X' )
                        count++;
            }
        }
    }
    return count;
};
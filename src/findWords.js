/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    
    /*
     * The approach is to create an abject which has different value for letters of each row.
     * We then traverse through each word using a for-each loop.
     * We then use a for loop and check if all letters of current word fall in the same row.
     * If yes, we add current word to our 'result' array else we move to next iteration.
     * Finally, we return our 'result' array.
     */

    var map = {q:1,w:1,e:1,r:1,t:1,y:1,u:1,i:1,o:1,p:1,a:2,s:2,d:2,f:2,g:2,h:2,j:2,k:2,l:2,z:3,x:3,c:3,v:3,b:3,n:3,m:3};
    var result = [];
    words.forEach((item) => {
        var temp = map[item[0].toLowerCase()];
        for(var i=1;i<item.length;i++){
            if(temp != map[item[i].toLowerCase()]) return;
        }
        result.push(item);
    });
    return result;
};

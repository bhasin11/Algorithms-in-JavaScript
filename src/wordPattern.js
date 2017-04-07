/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    /* 
     * The approach is to go through the pattern letters and 
     * words in parallel and compare the indexes where they 
     * last appeared. If the indexes are equal, continue,
     * else return false.
     */
    
    var words = str.split(" ");
    var index = new Map();
    var index2 = new Map();
    
    if (words.length != pattern.length)   return false;

    for (var i=0; i<words.length;i++){
        
        var a = index.get(pattern.charAt(i));
        var b = index2.get(words[i]);
        
        if(a == undefined && b == undefined){
            index.set(pattern.charAt(i), i);
            index2.set(words[i], i);
        }
        else{
            if(index.get(pattern.charAt(i)) == index2.get(words[i])) continue;
            return false;
        }
    }
    return true;
};
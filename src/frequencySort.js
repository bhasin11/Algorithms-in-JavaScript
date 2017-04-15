/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    /*
     * The approach is to use a hash map and store the
     * frequecy of each character of the string. Second,
     * we try to store each character in a list at
     * an index equal to the frequncy of that character
     * in the string. Finally, we iterate from the end
     * to start of the string and append each character 
     * in the list to the string. Note: There can be 
     * more than one character for a given frequency, we
     * have to consider that case as well.
     */
    
    if(s.length<3) return s;
    
    var hm = new Map();
    
    for(var i=0;i<s.length;i++){
        if(hm.has(s.charAt(i))){
            var value = hm.get(s.charAt(i));
            hm.set(s.charAt(i), value + 1);
        }
        else hm.set(s.charAt(i), 1);
    }
    
    var lists = new Array(s.length+1);
    var keys = hm.keys();
    temp = keys.next().value;
    
    while(temp){
        
        if(lists[hm.get(temp)] === undefined) 
            lists[hm.get(temp)] = [];


        lists[hm.get(temp)].push(temp);
        temp = keys.next().value;
    }
    
    var sb = "";
    
    for(var i=lists.length-1;i>=0;i--){
        if(lists[i]){
            for(var j=lists[i].length-1;j>=0;j--){
                var value = hm.get(lists[i][j]);
                while(value-->0)
                    sb = sb + lists[i][j];
            }
        }
    }
    return sb;
};
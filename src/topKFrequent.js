/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    /*
     * The approach is to use a hash map and store the
     * frequecy of each character of the string. Second,
     * we try to store each character in a list at
     * an index equal to the frequncy of that character
     * in the string. Finally, we iterate from the end
     * to start of the string and add each character 
     * in the list uptil 'k' times. Note: There can be 
     * more than one character for a given frequency, we
     * have to consider that case as well.
     */
    
    var list = [];
    var hm = new Map();
    
    if(nums.length === 0) return list;
    
    nums.forEach(function(num){
        if(hm.has(num)) hm.set(num, hm.get(num)+1);
        else hm.set(num, 1);
    });
    
    var arr = new Array(nums.length);
    
    var keys = hm.keys();
    temp = keys.next().value;
    
    
    while(temp){
        if(arr[hm.get(temp)-1] === undefined) 
            arr[hm.get(temp)-1] = [];
        
        arr[hm.get(temp)-1].push(temp);
        temp = keys.next().value;
    }
    
    for(var i=arr.length-1;i>=0;i--){
        if(arr[i]){
            var temp = arr[i];
            
            for(var j=temp.length-1;j>=0;j--){
                if(list.length < k){
                    list.push(temp[j]);
                }
            }
            
            if(list.length == k) break;
        }
    }
    return list;
};
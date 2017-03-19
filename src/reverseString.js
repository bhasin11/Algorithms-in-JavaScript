/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    
    /*
     * The approach is to traverse the input String from end to beginning,
     * and keep adding each character in the 'result' variable.
     * Once the iterations are complete, return the 'result' string.
     */
    var result = "";
    for(var i=s.length-1;i>=0;i--)    result += s.charAt(i);
    
    return result;
};

/*    
    // Second Approach: Using a Stack
    
    var result = "";
    var stack = [];
    for(var i=0;i<s.length;i++)    stack.push(s.charAt(i));
    
    while(stack.length != 0)   result += stack.pop();
    
    return result;
};
*/

/*
    // Third Approach: Swapping characters (Relatively Slower)
    var arr = s.split('');
    var left = 0, right = s.length;
    
    while(left<right){
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr.join('');
};
*/

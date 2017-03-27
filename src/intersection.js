/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    
    /*
     * The approach is to sort both the arrays first.
     * Then, we will use two pointers one for each
     * array. If the values pointed ny both pointers 
     * is equal we will increment both of them. But, 
     * before adding the value to the result array,
     * we will also check if the same value has been
     * added before or not. We don't want to add
     * similar values to the result array. Finally,
     * we will return the result array.
     */
    
    var result = [];
    nums1.sort(function(a,b){
        return a-b;
    });
    nums2.sort(function(a,b){
        return a-b;
    });
    
    var i = 0, j = 0;
    
    while(i < nums1.length && j < nums2.length){
        if(nums1[i] === nums2[j]){
            if(result[result.length-1] !== nums1[i]) result.push(nums1[i]);
            i++;
            j++;
        }
        else if(nums1[i] > nums2[j]) j++;
        else i++;
    }
    return result;
};
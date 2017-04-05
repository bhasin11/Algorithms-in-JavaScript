/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    /*
     * The approach is that for every house k, there are two 
     * options: either to rob it (include this house: i) or 
     * not rob it (exclude this house: e).
     *
     * Include this house:
     * yes = temp + nums[i] (money of this house + money robbed 
     * excluding the previous house)
     *
     * Exclude this house:
     * no = no > yes ? no : yes (max of money robbed including the previous 
     * house or money robbed excluding the previous house).
     */
     
    if(nums === null || nums.length === 0) return 0;
    
    var no = 0, yes = 0;
    
    for(var i=0;i<nums.length;i++){
        var temp = no;
        no = no > yes ? no : yes;
        yes = temp + nums[i];
    }
    return no > yes ? no : yes;
};
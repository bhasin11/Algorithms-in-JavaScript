/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {

    /*  The approach is to find the leftmost 1 (in binary) of num.
     *  Then create a number which has all 1's till that position of 1.
     *  Eg) Suppose num in binary is 1000, 
     *      then we have to make i = 1111.
     *  Finally, XOR of num and i will give us complement of num.
     */

    var temp = num, i=0;
    while(temp>0){
        temp>>=1;
        i=i<<1;
        i++;
    }
    return i^num;
};

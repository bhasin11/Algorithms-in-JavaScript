/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    /* The approach is to add the face values of all Roman
     * characters. But, we also have to make sure that face 
     * value is not used in some other sense in the given
     * sequence. So, we check if any of the combinations
     * exist. If they do, we subtract their integer value
     * from our sum variable. Finally, we return the sum.
     */
    
    var sum = 0, c = s.split('');
    if(s.indexOf("IV")!=-1)     sum-=2;
    if(s.indexOf("IX")!=-1)     sum-=2;
    if(s.indexOf("XL")!=-1)     sum-=20;
    if(s.indexOf("XC")!=-1)     sum-=20;
    if(s.indexOf("CD")!=-1)     sum-=200;
    if(s.indexOf("CM")!=-1)     sum-=200;
    
    for(var count=0;count<s.length;count++){
       if(c[count]=='M') sum+=1000;
       if(c[count]=='D') sum+=500;
       if(c[count]=='C') sum+=100;
       if(c[count]=='L') sum+=50;
       if(c[count]=='X') sum+=10;
       if(c[count]=='V') sum+=5;
       if(c[count]=='I') sum+=1;
    }
    return sum;
};
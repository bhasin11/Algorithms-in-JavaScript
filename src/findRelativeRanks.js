/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
  var sortedNums = nums.slice(0).sort(function(a , b){
      return b - a;
  });
  // Create a map to the sorted nums
  var sortedNumsMapping = {};
  sortedNums.forEach(function(num, index){
      sortedNumsMapping[num] = index + 1 + ''; 
  });

  return nums.map(function(num, index) {
    if(sortedNumsMapping[num] === '1') return "Gold Medal";
    else if(sortedNumsMapping[num] === '2' ) return "Silver Medal";
    else if(sortedNumsMapping[num] === '3' ) return "Bronze Medal";
    else return (sortedNumsMapping[num]);
  });

};
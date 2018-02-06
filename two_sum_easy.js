// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


// var nums = [1,2,3,4,5,6,7,8,9,10,11,4];
// var target = 8;
var twoSum = function(nums, target) {
    var usedIndices = [];
    for (var i = 0; i<nums.length; i++){
        var secPart = target - nums[i];
        for (var j = 0; j<nums.length; j++) {
            if(i!=j 
               && secPart == nums[j] 
               && usedIndices.indexOf(i) == -1 
               && usedIndices.indexOf(j) == -1 
              ){
                usedIndices.push(i);
                usedIndices.push(j);
            }
        }
    }
    return usedIndices;
};
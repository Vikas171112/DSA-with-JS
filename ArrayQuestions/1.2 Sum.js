// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

function twoSum(nums, target) {
  nums.sort((a, b) => a - b);
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    let sum = nums[i] + nums[j];

    if (sum === target) {
      return [i, j];
    } else if (sum > target) {
      j--;
    } else {
      i++;
    }
  }
  return undefined;
}
//bcause of sorting in the first step the complexity is o(n log(n))
let myArr = [2, 11, 7, 15];
let target = 9;
console.log(twoSum(myArr, target));

//optimised approach using mapping
function twosumOptimised(nums, target) {
  const numsIndex = {};
  let n = nums.length;
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numsIndex[complement] !== undefined) {
      return [numsIndex[complement], i];
    }
    numsIndex[nums[i]] = i;
  }
  return undefined;
}
let myArr1 = [2, 11, 7, 15];
let target1 = 9;
console.log(twosumOptimised(myArr, target));
//in this approach we have to traverse the array once only so time complexity remains O(n)

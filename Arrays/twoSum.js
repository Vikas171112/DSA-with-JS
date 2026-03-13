function twoSum(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; i < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

let result = twoSum([2, 7, 11, 15], 9);
console.log(result);

function twoSumOptimised(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (map[complement] !== undefined) {
      return [map[complement], i];
    }

    map[nums[i]] = i;
  }
}
let result1 = twoSumOptimised([2, 7, 11, 15], 9);
console.log(result1);

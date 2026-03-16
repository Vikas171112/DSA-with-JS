function twosum2(nums, target) {
  let map = {};
  for (let i = 0; i <= nums.length - 1; i++) {
    let complement = target - nums[i];
    if (map[complement] !== undefined) {
      return [map[complement], i + 1];
    }
    map[nums[i]] = i + 1;
  }
}
console.log(twoSum2Pointers([2, 7, 11, 15], 9));

//Using Two Pointers

function twoSum2Pointers(nums, target) {
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    if (nums[i] + nums[j] === target) {
      return [i + 1, j + 1];
    } else if (nums[i] + nums[j] > target) {
      j--;
    } else {
      i++;
    }
  }
}

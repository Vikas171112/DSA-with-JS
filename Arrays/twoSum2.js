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
console.log(twosum2([2, 7, 11, 15], 9));

function removeDuplicates(nums) {
  const n = nums.length;
  let j = 1;
  if (nums.length === 1) {
    return 1;
  }
  for (let i = 1; i < n; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
}
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));

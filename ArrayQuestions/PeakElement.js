/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  if (nums.length === 1) return 0;
  if (nums[0] > nums[1]) return 0;
  if (nums[nums.length - 1] > nums[nums.length - 2]) return nums.length - 1;

  let l = 1,
    r = nums.length - 2;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
      return mid;
    } else if (nums[mid - 1] > nums[mid]) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return -1;
};

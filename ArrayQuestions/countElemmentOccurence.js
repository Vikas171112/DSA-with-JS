function lowerBound(nums, target) {
  let low = 0;
  let high = nums.length;
  while (low < high) {
    let mid = low + Math.floor((high - low) / 2);
    if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
}

function countOccurrence(nums, target) {
  let left = lowerBound(nums, target);
  let right = lowerBound(nums, target + 1);
  return right - left;
}
let nums = [1, 2, 2, 2, 3, 4, 5];
console.log(countOccurrence(nums, 2)); // Output: 3
console.log(countOccurrence(nums, 3)); // Output: 1
console.log(countOccurrence(nums, 6)); // Output: 0

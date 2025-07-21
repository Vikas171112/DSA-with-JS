// 34. Find First and Last Position of Element in Sorted Array

// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]

function lowerBound(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let res = arr.length;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] >= target) {
      res = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return res;
}
function upperBound(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let res = arr.length;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] > target) {
      res = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return res;
}
function searchRange(nums, target) {
  const start = lowerBound(nums, target);
  const end = upperBound(nums, target) - 1;
  if (start === nums.length || nums[start] !== target) {
    return [-1, -1];
  }
  return [start, end];
}
const nums1 = [5, 7, 7, 8, 8, 10];
const target1 = 8;
const target2 = 6;
console.log(searchRange(nums1, target1));
console.log(searchRange(nums1, target2));

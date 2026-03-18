//Using Two Pointers
function threeSum(arr) {
  let result = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i - 1] === arr[i]) continue;

    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      let sum = arr[left] + arr[right] + arr[i];
      if (sum === 0) {
        result.push(arr[i], arr[left], arr[right]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right++;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}

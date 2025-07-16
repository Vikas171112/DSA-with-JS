function fourSum(arr, target) {
  arr.sort((a, b) => a - b);
  let n = arr.length;
  let result = [];

  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }

    for (let j = i + 1; j < n - 2; j++) {
      if (j > i + 1 && arr[j] === arr[j - 1]) {
        continue;
      }

      const subTarget = target - arr[i] - arr[j];

      let left = j + 1;
      let right = n - 1;
      et;
      while (left < right) {
        const currentSum = arr[left] + arr[right];

        if (currentSum === subTarget) {
          result.push([arr[i], arr[j], arr[left], arr[right]]);

          while (left < right && arr[left] === arr[left + 1]) {
            left++;
          }

          while (left < right && arr[right] === arr[right - 1]) {
            right--;
          }

          left++;
          right--;
        } else if (currentSum > subTarget) {
          right--;
        } else {
          left++;
        }
      }
    }
  }
  return result;
}
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));

function squaresofSortedArray(nums) {
  let n = nums.length;
  let left = 0;
  let right = n - 1;
  let pos = n - 1;
  let result = new Array(n);

  while (left <= right) {
    let leftSquare = nums[left] * nums[left];
    let rightSquare = nums[right] * nums[right];
    if (leftSquare > rightSquare) {
      result[pos] = leftSquare;
      left++;
    } else {
      result[pos] = rightSquare;
      right--;
    }
    pos--;
  }
  return result;
}

console.log(squaresofSortedArray([-4, -1, 0, 3, 9]));

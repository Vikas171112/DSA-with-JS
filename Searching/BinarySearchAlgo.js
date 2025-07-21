function binarySearch(arr, value) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  while (i <= j) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] === value) {
      return mid;
    } else if (arr[mid] > value) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

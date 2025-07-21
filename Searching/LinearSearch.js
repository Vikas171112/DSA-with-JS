function LinearSearch(arr, val) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

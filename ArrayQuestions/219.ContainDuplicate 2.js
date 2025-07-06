//arr is given .Check if the array has two different indices with the same value at that index and the difference between indexex is greater that the given k

function containDuplicate2(arr, k) {
  let countMap = {};
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (countMap[current] !== undefined) {
      if (i - countMap[current] <= k) {
        return true;
      }
    }
    countMap[current] = i;
  }
  return false;
}

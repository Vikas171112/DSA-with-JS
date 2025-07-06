function mergeSortedArray(arr1, m, arr2, n) {
  let m = arr1.length;
  let n = arr2.length;
  let result = new Array(m + n);
  let k = m + n - 1;
  let i = m - 1;
  let j = n - 1;
  while (i >= 0 && j >= 0) {
    if (arr1[i] > arr2[j]) {
      result[k] = arr1[i];
      i--;
    } else {
      result[k] = arr2[j];
      j--;
    }
    k--;
  }
  while (i >= 0) {
    result[k] = arr1[i];
    i--;
    k--;
  }
  while (j >= 0) {
    result[k] = arr2[j];
    j--;
    k--;
  }
  return result;
}

let arr1 = [2, 3, 4];
let arr2 = [5, 6, 7];
console.log(mergeSortedArray(arr1, arr2));

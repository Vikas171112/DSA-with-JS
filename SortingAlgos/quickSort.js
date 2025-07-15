function quickSort(arr, low, high) {
  if (low < high) {
    let pindex = partitionFinder(arr, low, high);
    quickSort(arr, pindex + 1, high);
    quickSort(arr, low, pindex - 1);
  }
  return arr;
}

function partitionFinder(arr, low, high) {
  let pivot = arr[low];
  let i = low;
  let j = high;
  while (i < j) {
    while (arr[i] <= pivot && i < j) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i < j) {
      swap(arr, i, j);
    }
  }
  swap(arr, low, j);
  return j;
}
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
let arr = [5, 8, 4, 3, 9, 5, 6];
console.log(quickSort(arr, 0, arr.length - 1));
console.log(arr);

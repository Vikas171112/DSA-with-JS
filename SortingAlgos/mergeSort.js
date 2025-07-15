function merge(arr, low, mid, high) {
  let left = low;
  let right = mid + 1;
  const result = [];


  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      result.push(arr[left]);
      left++;
    } else {
      result.push(arr[right]);
      right++;
    }
  }


  while (left <= mid) {
    result.push(arr[left]);
    left++;
  }

  while (right <= high) {
    result.push(arr[right]);
    right++;
  }


  for (let i = 0; i < result.length; i++) {
    arr[low + i] = result[i];
3  }
}

function mergeSort(arr, low, high) {
  if (low >= high) return; // Base case

  let mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
}

// Example Usage
let arr = [5, 3, 8, 6, 2, 7, 4, 1];
mergeSort(arr, 0, arr.length - 1);
console.log("Sorted array:", arr);

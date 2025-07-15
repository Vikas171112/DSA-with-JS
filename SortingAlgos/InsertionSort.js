function insertionSort(arr) {
  const n = arr.length;
  let j;
  for (let i = 0; i < n; i++) {
    let element = arr[i];
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > element) {
        arr[j + 1] = arr[j];
      }
    }
    arr[j + 1] = element;
  }
}
const arr = [64, 25, 12, 22, 11];
console.log("Before sorting:", arr);
insertionSort(arr);
console.log("After sorting:", arr);

function swapNumbers(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let didSwap = 0;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        swapNumbers(arr, j, j + 1);
        didSwap = 1;
      }
    }
    if (didSwap === 0) {
      break;
    }
  }
}
const arr = [111, 2222, 3333, 45544];
console.log("Before sorting:", arr);
bubbleSort(arr);
console.log("After sorting:", arr);

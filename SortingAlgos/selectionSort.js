//Start with assuming that the first elemrnt of the array  is minimum with i pointer .
//Checking with the j pointer that if  its ia really minimum .If not  place the minindex with the j pointer

function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      swapNumbers(arr, i, minIndex);
    }
  }
}

function swapNumbers(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
const arr = [64, 25, 12, 22, 11];
selectionSort(arr);
console.log("Sorted array:", arr);

//Given an array (arr)of integers .Find all the elements that occur more than once in a given array
function duplicateElementsArray(arr) {
  let countMap = {};
  let result = [];
  let rIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (countMap[current] === undefined) {
      countMap[current] = 1;
    } else {
      countMap[current] = countMap[current] + 1;
      if (countMap[current] === 2) {
        result[rIndex] = current;
        rIndex++;
      }
    }
  }
  return result;
}
let arr1 = [1, 1, 2, 2, 1, 3, 3, 4, 5];
console.log(duplicateElementsArray(arr1));

//ou are given a non-negative integer array nums. In one operation, you must:

// Choose a positive integer x such that x is less than or equal to the smallest non-zero element in nums.
// Subtract x from every positive element in nums.
// Return the minimum number of operations to make every element in nums equal to 0.
//-----------------------*****BruteFOrce*****--------------------------------
function makeArrayZero(arr) {
  let count = 0;
  let n = arr.length;

  while (true) {
    let minElement = Infinity;
    for (let i = 0; i < n; i++) {
      if (arr[i] < minElement && arr[i] > 0) {
        minElement = arr[i];
      }
    }
    if (minElement === Infinity) {
      break;
    }
    count++;
    for (let i = 0; i < n; i++) {
      if (arr[i] > 0) {
        arr[i] -= minElement;
      }
    }
  }
  return count;
}
let nums1 = [1, 5, 0, 3, 5];
// console.log(`Input: ${nums1}`);
// console.log(`Operations: ${makeArrayZero(nums1)}`); // Expected: 3
// console.log(`Array after operations: ${nums1}`);
//*********************Optimal Approach******* */
//key===Every uniqueElemt is the count of numbers to be subtrracted
function makeArrayZeroOptimal(arr) {
  let seenNums = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && seenNums[i] === undefined) {
      seenNums[arr[i]] = true;
    }
  }
  return Object.keys(seenNums).length;
}
console.log(`Input: ${nums1}`);
console.log(`Operations: ${makeArrayZeroOptimal(nums1)}`);

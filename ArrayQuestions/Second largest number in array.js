// Given an array of positive integers arr[] of size n, the task is to find second largest distinct element in the array.

// Note: If the second largest element does not exist, return -1.

// Examples:

// Input: arr[] = [12, 35, 1, 10, 34, 1]
// Output: 34
// Explanation: The largest element of the array is 35 and the second largest element is 34.

// Input: arr[] = [10, 5, 10]
// Output: 5

//**************Brute Force*************************** */----------------------------------------
function secondLargest(arr) {
  if (!arr || arr.length < 2) {
    return -1;
  }

  arr.sort((a, b) => a - b);

  const n = arr.length;
  let largest = arr[n - 1];

  // 3. Iterate from the second-to-last element backwards
  //    to find the first element that is not equal to the largest.
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] !== largest) {
      // Found a distinct element that is smaller than the largest
      return arr[i];
    }
  }

  // 4. If the loop completes, it means all elements were the same
  //    (e.g., [5, 5, 5]) or there was only one distinct element.
  return -1;
}

//*****************************************************************_________________________________----------------Optimised Approach */
function secondLargestoptimised(arr) {
  if (!arr || arr.length < 2) {
    return -1;
  }
  let largest = -1;
  let secondLargest = -1;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let curentNum = arr[i];
    if (curentNum > largest) {
      secondLargest = largest;
      largest = curentNum;
    } else if (curentNum > secondLargest && curentNum !== largest) {
      secondLargest = curentNum;
    }
  }
  if (secondLargest === -1) {
    return -1;
  }
  return secondLargest;
}

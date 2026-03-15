// Brute Force Approach
function reverseString(s) {
  let result = "";

  for (let i = s.length - 1; i >= 0; i--) {
    result += s[i];
  }

  return result;
}

console.log(reverseString("Hello"));

// Optimized Approach (Two Pointers)
function reverseStringOptimized(s) {
  let arr = s.split(""); // convert string to array

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }

  return arr.join("");
}

console.log(reverseStringOptimized("Hello"));

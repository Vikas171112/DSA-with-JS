// //Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.
// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// Constraints:

// 1 <= s.length <= 105
// s[i] is a printable ascii character.

function reverseString(s) {
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;

    i++;
    j--;
  }
}

const s1 = ["h", "e", "l", "l", "o"];
reverseString(s1);
console.log(s1);

const s2 = ["H", "a", "n", "n", "a", "h"];
reverseString(s2);
console.log(s2);
//time complexity will remail linear ie. o(n) as i and j will move til n/2 of the array

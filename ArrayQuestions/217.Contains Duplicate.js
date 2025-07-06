function containsDuplicate(arr) {
  let n = arr.length;
  const seenNumbers = {};
  for (let i = 0; i < n; i++) {
    const currentNumber = arr[i];
    if (seenNumbers[currentNumber] !== undefined) {
      return true;
    }
    seenNumbers[currentNumber] = 1;
  }
  return false;
}

const nums = [1, 2, 3];
console.log(containsDuplicate(nums));

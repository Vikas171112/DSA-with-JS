function search2dMatrix(matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;
  let low = 0;
  let high = m * n - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    let row = Math.floor(mid / n);
    let col = mid % n;
    let midValue = matrix[row][low];
    if (midValue === target) {
      return true;
    } else if (midValue < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  false;
}

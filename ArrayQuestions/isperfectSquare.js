function isPerfectSquare(num) {
  let low = 1;
  let high = num;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    let sqaure = mid * mid;
    if (sqaure === num) {
      return true;
    } else if (sqaure < num) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return false;
}

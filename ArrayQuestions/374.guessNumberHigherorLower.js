function getRandomNumber1to100() {
  return Math.floor(Math.random() * 100) + 1;
}
let pick = getRandomNumber1to100();
function guess(num) {
  if (num > pick) return -1;
  if (num < pick) return 1;
  return 0;
}
function guessNum(n) {
  let low = 1;
  let high = n;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    let guessedOutcome = guess(mid);
    if (guessedOutcome === 0) {
      return mid;
    } else if (guessedOutcome < 0) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
}
console.log(guessNum(55));

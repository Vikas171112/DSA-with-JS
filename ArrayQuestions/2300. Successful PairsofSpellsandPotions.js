function successfulPairs(spells, potions, success) {
  let result = [];
  potions.sort((a, b) => a - b);
  let m = potions.length;

  for (const spell of spells) {
    let low = 0;
    let high = m - 1;
    let answer = m;
    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);
      if (spell * potions[mid] >= success) {
        ans = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    result.push(m - answer);
  }
  return result;
}

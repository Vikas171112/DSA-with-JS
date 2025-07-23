function hoursKokoTakingwithallPossibleSpeed(arr, mid, h) {
  let totalHours = 0;
  for (let i = 0; i < arr.length; i++) {
    totalHours += Math.ceil(arr[i] / mid);
  }
  return totalHours <= h;
}

function minEatingSpeed(piles, h) {
  let low = 1;
  let high = Math.max(...piles);
  let ans = high; // Initially max speed
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    // Debug: print current search state
    console.log(`Checking speed: ${mid}, low: ${low}, high: ${high}`);

    if (hoursKokoTakingwithallPossibleSpeed(piles, mid, h)) {
      ans = mid;
      console.log(`Speed ${mid} is sufficient, trying slower speeds`);
      high = mid - 1;
    } else {
      console.log(`Speed ${mid} is too slow, trying faster speeds`);
      low = mid + 1;
    }
  }
  console.log(`Minimum speed Koko needs: ${ans}`);
  return ans;
}

minEatingSpeed([3, 6, 7, 11], 8);

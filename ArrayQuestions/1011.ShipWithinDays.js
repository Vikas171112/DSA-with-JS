function noOfDays(capacity, weights) {
  let days = 1;
  let load = 0;
  for (let i = 0; i < weights.length; i++) {
    load += weights[i];
    if (capacity < load) {
      days++;
      load = weights[i];
    }
  }
  return days;
}
function searchSpace(weights) {
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += weights[i];
  }
  return sum;
}

function shipWithinDays(weights, days) {
  let low = Math.max(...weights);
  let high = searchSpace(weights);
  let ans = high;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let requiredDays = noOfDays(mid, weights);

    if (requiredDays <= days) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}
js;
console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); // Expected: 15
console.log(shipWithinDays([3, 2, 2, 4, 1, 4], 3)); // Expected: 6
console.log(shipWithinDays([1, 2, 3, 1, 1], 4)); // Expected: 3

//GIVEN AN ARRAY fIND ALL THE UNIQUE TRIPLETS THAT SUM UP TO ZERO.
//A+B+C=0 ie.A+B=-C
var threeSum = function (nums) {
  let result = [];
  nums.sort((a, b) => a - b);
  let n = nums.length;
  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let j = i + 1;
    let k = n - 1;
    let target = -nums[i];
    while (j < k) {
      let sum = nums[j] + nums[k];
      if (sum === target) {
        result.push([nums[i], nums[j], nums[k]]);
        while (j < k && nums[j] === nums[j + 1]) j++;
        while (j < k && nums[k] === nums[k - 1]) k--;

        j++;
        k--;
      } else if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
  }
  return result;
};
let nums = [-1, 0, 1, 2, -1, -4];
console.log(JSON.stringify(threeSum(nums)));

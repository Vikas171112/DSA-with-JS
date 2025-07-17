function intersectionOfArrays2(nums1, nums2) {
  let countMap = {};
  for (let i = 0; i < nums1.length; i++) {
    let currentNum = nums1[i];
    if (countMap[currentNum]) {
      countMap[currentNum] += 1;
    } else {
      countMap[currentNum] = 1;
    }
  }
  const result = [];
  for (let i = 0; i < nums2.length; i++) {
    let currentNum = nums2[i];
    if (countMap[currentNum]) {
      result.push(currentNum);
      countMap[currentNum]--;
    }
  }
  return result;
}

function intersectionOfArrays(arr1, arr2) {
  let countMap = {};
  for (let i = 0; i < arr1.length; i++) {
    let currentNum = arr1[i];
    countMap[currentNum] = true;
  }
  const result = [];
  for (let i = 0; i < arr2.length; i++) {
    let currentNum = arr2[i];
    if (countMap[currentNum]) {
      result.push(currentNum);
      delete countMap[currentNum];
    }
  }
  return result;
}

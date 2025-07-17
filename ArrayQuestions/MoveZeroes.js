function MoveZeroestoEnd(arr) {
  let i = 0; //Pinter for las non-zero element
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== 0) {
      arr[i] = arr[j];
      i++;
    }
  }
  for (let k = i; k < arr.length; k++) {
    arr[k] = 0;
  }
  return arr;
}

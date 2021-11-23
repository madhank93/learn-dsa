function isSumOfTwoValuesZero(arr: number[]) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(isSumOfTwoValuesZero([-1, 2, 1, -4, 4].sort()));
//isSumOfTwoValuesZero([-2, 3, 11, 31, 100, -1000].sort());

function reverseArrayOfStrings(arr: string[]): string[] {
  if (arr.length === 1) return arr;
  let res: string[] = reverseArrayOfStrings(arr.slice(1));
  res.push(arr[0]);
  return res;
}

console.log(reverseArrayOfStrings(["h", "e", "l", "l", "0"]));
console.log(reverseArrayOfStrings(["d", "o", "g"]));

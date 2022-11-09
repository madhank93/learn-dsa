function getFirstRecurringCharacter(num: number[]) {
  const occurrence: Map<number, number> = new Map();

  for (let char = 0; char < num.length; char++) {
    if (occurrence.has(num[char])) {
      return num[char];
    } else {
      occurrence.set(num[char], 1);
    }
  }
  return undefined;
}

console.log(getFirstRecurringCharacter([1, 2, 3, 4]));

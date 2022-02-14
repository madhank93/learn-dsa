function capitalizeFirst(array: string[]): string[] {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].slice(1)];
  }
  console.log(`Slice: ${array.slice(0, -1)}`);
  const res = capitalizeFirst(array.slice(0, -1));
  console.log(res);
  const string =
    array.slice(array.length - 1)[0][0].toUpperCase() +
    array.slice(array.length - 1)[0].slice(1);
  res.push(string);
  return res;
}

console.log(capitalizeFirst(["dog", "tom", "ram", "man"]));

### What is Recursion ?

A process (a function in our case) that calls itself.

### Essential part of a recursive function

- Base Case
- Different input

### What is the base case ?

The condition where the recursion ends.

### How does it works ?

Invoke the same function with a different input until you reach your base case.

```typescript
function factorial(num: number): number {
  // base case
  if (num <= 1) return 1;
  // calling the same function with different inputs
  else return num * factorial(num - 1);
}

console.log(factorial(5)); //=> 120
```

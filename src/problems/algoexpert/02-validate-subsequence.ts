/**
  Given two non-empty arrays of integers, write a function that determines whether the second array is 
  a subsequence of the first one.

  A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that 
  are in the same order as they appear in the array. For instance, the numbers.

  Sample input:
  array  = [5, 1, 22, 25, 6, -1, 8, 10]
  sequence = [1, 6, -1, 10]

  Sample Output:
  true
 */

function isValidSubsequence(array: number[], sequence: number[]) {
    let seqIndex = 0;
    for (const value of array) {
        if (seqIndex === sequence.length) {
            break;
        }
        if(value === sequence[seqIndex]) {
            seqIndex++;
        }
    }
    return seqIndex === sequence.length
  }

  if (import.meta.vitest) {
    const { it, expect } = import.meta.vitest;
    it('Verify given `array` has valid `sub-sequence`', () => {
      expect(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])).toBeTruthy()
      expect(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, 6])).toBeFalsy()
      expect(isValidSubsequence([5, 1, 22, 6, 6, -1, 8, 10], [1, 6, -1, 10])).toBeTruthy()
      expect(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10])).toBeTruthy()
    });
  }
  
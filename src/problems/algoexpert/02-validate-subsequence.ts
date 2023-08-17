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
  
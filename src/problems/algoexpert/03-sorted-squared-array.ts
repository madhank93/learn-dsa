/**
 *   
  Write a function that takes in a non-empty array of integers that are sorted
  in ascending order and returns a new array of the same length with the squares
  of the original integers also sorted in ascending order.

  Sample input:
  array = [1, 2, 3, 5, 6, 8, 9]

  Sample output:
  [1, 4, 9, 25, 36, 64, 81]

 */

export function sortedSquaredArrayUnOptimized(array: number[]) {
    return array.map(val => val * val).sort((a,b) => a -b)
}

if (import.meta.vitest) {
    const { it, expect } = import.meta.vitest;
    it('Verify sorted squared array', () => {
      expect(sortedSquaredArrayUnOptimized([1, 2, 3, 5, 6, 8, 9])).to.eql([1, 4, 9, 25, 36, 64, 81]);
      expect(sortedSquaredArrayUnOptimized([-10, -5, 0, 5, 10])).to.eql([0, 25, 25, 100, 100]);
      expect(sortedSquaredArrayUnOptimized([-1, -1, 2, 3, 3, 3, 4])).to.eql([1, 1, 4, 9, 9, 9, 16]);
    });
  }

export function sortedSquaredArrayOptimized(array: number[]) {
    const sortedArray = new Array(array.length);

    let startPtr = 0;
    let endPtr = array.length-1;

    for(let arrVal = array.length -1 ; arrVal >=0 ; arrVal-- ) {

        const startValue = Math.abs(array[startPtr]) ** 2;
        const endValue = Math.abs(array[endPtr]) ** 2;

        if(startValue > endValue) {
            sortedArray[arrVal] = startValue;
            startPtr++;
        } else {
            sortedArray[arrVal] = endValue;
            endPtr--;
        }
    }
    return sortedArray;
}

if (import.meta.vitest) {
    const { it, expect } = import.meta.vitest;
    it('Verify sorted squared array', () => {
      expect(sortedSquaredArrayOptimized([1, 2, 3, 5, 6, 8, 9])).to.eql([1, 4, 9, 25, 36, 64, 81]);
      expect(sortedSquaredArrayOptimized([-10, -5, 0, 5, 10])).to.eql([0, 25, 25, 100, 100]);
      expect(sortedSquaredArrayOptimized([-1, -1, 2, 3, 3, 3, 4])).to.eql([1, 1, 4, 9, 9, 9, 16]);
    });
  }

### What is a Searching Algorithm ?

Searching Algorithms are designed to check or retrieve an element from any data structure where it is stored.

Based on the type of search operation, these algorithms are generally classified into two categories.

- **Sequential search:**
  The list or array of elements is traversed sequentially while checking every component of the set. **Example** - Linear Search.

- **Interval search:**
  The interval search includes algorithms that are explicitly designed for searching in sorted data structures. In terms of efficiency, these algorithms are far better than linear search algorithms. **Example** - Binary search.

### Linear Search

Linear search is used on a collections of items. It is a sequential searching algorithm where we start from one end and check every element of the list until the desired element is found.

#### Complexity:

- **Best** : O(1)
- **Average** : O(n)
- **Worst** : O(n)
- **Space** : O(1)

### Binary Search

Binary search works on sorted arrays. Binary search begins by comparing an element in the middle of the array with the target value. If the target value matches the element, its position in the array is returned. If the target value is less than the element, the search continues in the lower half of the array. If the target value is greater than the element, the search continues in the upper half of the array. By doing this, the algorithm eliminates the half in which the target value cannot lie in each iteration.

#### Complexity

- **Best** : O(1)
- **Average** : O(log n)
- **Worst** : O(log n)
- **Space** : O(1)

Image courtesy - (https://blog.penjee.com/)

![Linear vs Binary search](../../../docs/img/searching-algo/binary-and-linear-search-animations.gif)

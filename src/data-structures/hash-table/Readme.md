![hash-table-no-collision](../../../docs/img/hash-table/hash-table.png)

## Hash table

A hash table is one of the main data structure that stores **_key-value_** pairs. The key is passed on to a hash function that performs arithmetic operations to transform keys into array indices. The result (commonly known as hash value or hash) is the index of the key-value pair in the hash table.

We can use an array to implement it, by interpreting the **_key_** as an array index so that we can store the associated **_value_** in that position. However, in cases where the keys are large and cannot be used directly as an index, that is when hashing is used.

### Hash function

It is a function that can transform any given **_key_** to an integer value in the range [0, N-1], where N is the capacity of the bucket array for the hash table. Which can be used as an **_index_** for Hash table.

### More info

- [Basics of Hash tables](https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial/)
- [Hash tables - Algorithms Princeton](https://algs4.cs.princeton.edu/34hash/)
- [Hashing](https://www.cpp.edu/~ftang/courses/CS240/lectures/hashing.htm)

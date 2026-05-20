# Finding Complexity of an Algorithm

## Finding Time Complexity:

1. Find the total number of operations done by the algorithm in worst case, best case or average case as a function of the input size.
2. Find the corresponding upper bound (for worst case), lower bound (for best case) and tight bound (for average case) which is the algorithm's time complexity for the respective cases.

> **Note:** It is assumed that each operation in an algorithm takes a constant amount of time in CPU. Thus, the total number of operations is proportional to the actual runtime of the algorithm and the bound on the total number of operations gives the correct bound on runtime as well. <br> Finding the total number of operations in an algorithm is much easier than finding the exact runtime as it does not depend on the hardware configuration on which the algorithm is run.

## Finding Space Complexity:

1. Find the total allocated space during the runtime of the algorithm as a function of input size, in best case, worst case or average case.
2. Find the corresponding lower bound (for best case), upper bound (for worst case) or tight bound (for average case) of the function which is the algorithm's space complexity for respective cases.

> **Note:** It is assumed that each variable takes a constant amount of space in runtime memory (RAM) (in reality, the size depends on the variable's type). Thus, the total allocated space during runtime is proportional to the actual memory consumption of the algorithm and the bound on the total allocated space gives correct bound on actual runtime memory consumption as well. <br> Finding such a bound is much easier than finding the exact space taken by the algorithm during runtime as it does not depend on aly implementation details (like the programming language specifications)
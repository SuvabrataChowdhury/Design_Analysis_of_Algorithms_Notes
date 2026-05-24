# Complexity Analysis

It can be seen that the [Heap Sort algorithm](./README.md#heap-sort-algorithm) first builds the max heap with [HeapifyMax](../../operations/README.md#heapify-operation) and then repeatedly calls the [DeleteFromMaxHeap](../../operations/README.md#delete-operation) for each elements of the array (say $n$).

The worst case [time-complexity of HeapifyMax](../../operations/complexity-analysis.md) is,

$$
\mathcal{O}(n)
$$

The worst case [time-complexity of DeleteFromMaxHeap](../../operations/complexity-analysis.md) is,

$$
\mathcal{O}(\log_2{n})
$$

## Worst Case Time Complexity
As DeleteFromMaxHeap is called $n$ times for heap-sort, the time complexity of lines 2-4 is, 

$$
\mathcal{O}(n \cdot \log_2{n})
$$

Also, the algorithm needs to first heapify the given array first. Therefore, the worst-case time complexity of heap-sort is,

$$
\begin{align*}
    &\mathcal{O}(n) + \mathcal{O}(n \cdot \log_2{n}) \\\\
    &= \mathcal{O}(n + n \cdot \log_2{n}) \\\\
    &= \boxed{\mathcal{O}(n \cdot \log_2{n})} \quad \text{[As } n \le n \cdot \log_2{n} \text{ for large } n \text{]}
\end{align*}
$$

> **Note:** Heap sort has same time complexity in all cases as the iteration's complexity determines the whole algorithm's complexity and even though DeleteFromMaxHeap has different complexities in different cases, due to the iteration over all elements, DeleteFromMaxHeap falls into it's average case which is $\mathcal{O}(log_2{n})$
# Application: Heap Sort

Heap can be used to track maximum (or minimum) items in a given list as the root item is always the maximum (or minimum) item. By performing deletions, heap can be used to find the k^th minimum/ maximum item as well.

One of the major application of heap is found in sorting.

## Sorting procedure

The sorting procedure with a heap can be defined as,

1. Create a max heap out of given array.
2. Delete from the heap and place it at the end of the array.
3. Repeat steps 1 and 2, by decreasing the size of the array, until there's no elements left in the heap.

As the array itself can be modified into a heap through heapify, this sorting can be done in place without allocating additional memory.

## Heap Sort algorithm

```pseudocode
\begin{algorithm}
    \caption{Heap Sort}
    \begin{algorithmic}
        \input{arr, the array to be sorted}
        \output{sorted arr}

        \state $heap \gets$ \call{HeapifyMax}{arr}
        \for{$i \gets arr.length$ \textbf{to} $2,$ \textbf{steps} $\gets -1$}
            \state $arr[i] \gets $ \call{DeleteFromMaxHeap}{arr}
        \endfor

        \return arr
    \end{algorithmic}
\end{algorithm}
```

<!-- TODO: working example visualization -->
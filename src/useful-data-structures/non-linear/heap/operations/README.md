# Operations of heap

1. $insert(heap,i)$: Insert $i$ into the given heap following its property.
2. $delete(heap)$: Delete root item from given heap and restore its property due to deletion.
3. $heapify(arr)$: Transform $arr$ to a heap following a property.


Max heap is considered to be the heap's property from now on. The algorithms for each of these properties are given next.

## Insert operation

```pseudocode
\begin{algorithm}
    \begin{algorithmic}
        \procedure{InsertMaxHeap}{$heap$, $item$}
            \state $heap.size \gets heap.size + 1$
            \state $heap.items \gets heap.items \cup item$
            \state $index \gets heap.size$
            \while{$\frac{index}{2} \gt 0$}
                \if{$heap.items[\frac{index}{2}] \lt heap.items[index]$}
                    \state swap $heap.items[\frac{index}{2}]$ with $heap.items[index]$
                    \state $index \gets \frac{index}{2}$
                \endif
            \endwhile
        \endprocedure
    \end{algorithmic}
\end{algorithm}
```

## Adjust Operation

It is an internal/private operation which makes the sub-tree rooted at given $node$ to become a max heap.

```pseudocode
\begin{algorithm}
    \begin{algorithmic}
        \procedure{Adjust}{$arr$, $node$}
            \state $left \gets$ \call{leftChild}{$arr, node$}
            \state $right \gets$ \call{rightChild}{$arr, node$}
            \state $maxChild \gets$ \call{max}{$arr[left], arr[right]$}
            \if{$arr[node] \lt arr[maxChild]$}
                \state swap $arr[node]$ with $arr[maxChild]$
                \state \call{Adjust}{$arr, maxChild$}
            \endif
        \endprocedure
    \end{algorithmic}
\end{algorithm}
```

## Heapify Operation

```pseudocode
\begin{algorithm}
    \begin{algorithmic}
        \procedure{HeapifyMax}{$arr$}
            \state $arr.heapSize \gets arr.length$
            \for{$i \gets \lfloor \frac{arr.length}{2} \rfloor \textbf{ to } 1; \textbf{steps} \gets -1$}
                \state \call{adjust}{$arr,i$}
            \endfor
        \endprocedure
    \end{algorithmic}
\end{algorithm}
```

## Delete Operation

```pseudocode
\begin{algorithm}
    \begin{algorithmic}
        \procedure{DeleteFromMaxHeap}{$heap$}
           \state $result \gets heap.items[1]$
           \state $heap.items[1] \gets heap.items[heap.size]$
           \state $heap.size \gets heap.size - 1$
           \state \call{adjust}{heap,1}
           \return result
        \endprocedure
    \end{algorithmic}
\end{algorithm}
```

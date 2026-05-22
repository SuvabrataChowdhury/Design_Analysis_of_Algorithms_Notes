# Complexity Analysis

In worst case, $Adjust$ bubbles down the given node from root to leaf which traverses the entire height of the tree resulting in $\mathcal{O}(\log_2{n})$ time complexity in worst case where $n$ is the number of nodes in the tree.

$DeleteFromMaxHeap$ calls $Adjust$ after some constant time operations. Therefore, its worst case time complexity is also $\mathcal{O}(\log_2{n})$.

$Insert$ attaches item at the end of the heap and bubbles it up to restore the heap property. Hence, in the worst-case it also take $\mathcal{O}(\log_2{n})$ time.

$HeapifyMax$ calls $Adjust$ for $\frac{n}{2}$ time. Therefore, it's worst-case time complexity is
$$
\begin{align*}
    &\mathcal{O}\left(\frac{n}{2}\right) \cdot \mathcal{O}(\log_2{n}) \\\\
    &= \mathcal{O} \left( \frac{n \log_2{n}}{2} \right) \\\\
    &= \boxed{\mathcal{O}(n \log_2{n})}
\end{align*}
$$

The given algorithm takes $\mathcal{O}(1)$ space [As $Adjust$ can be converted into an interactive form without a call stack replacement, it's iterative space complexity is considered. The recursive variant takes $\mathcal{O}(\log_2{n})$ space].

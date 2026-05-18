# Examples

## Problem Statement

Find the worst case time complexity for the following algorithms,

```pseudocode
\begin{algorithm}
    \caption{Find Sum}
    \begin{algorithmic}
        \input{$A$, $n$}
        \require{$A$ to be an array containing numbers \textbf{and} $n$ to be the length of $A$}
        \state $sum \gets 0.0$
        \for{$i \gets 0$ \to $n-1$}
            \state $sum \gets sum + A[i]$
        \endfor

        \return $sum$
    \end{algorithmic}
\end{algorithm}


\begin{algorithm}
    \caption{Add Matrices}
    \begin{algorithmic}
        \input{$A$, $B$, $m$, $n$}
        \require{$A$ and $B$ to be matrices i.e., an array containing arrays another arrays of integers. $m$ and $n$ to be the length of $A$ and $B$}
        \output{$C$}
        \ensure{$C$ to have the dimensionality of $m \times n$}

        \state \textbf{Declare} $C$ to be a matrix of size $m \times n$
        \for{$i \gets 0$ \to $m-1$}
            \for{$j \gets 0$ \to $n-1$}
                \state $C[i,j] \gets A[i,j] + B[i,j]$
            \endfor
        \endfor

        \return $C$
    \end{algorithmic}
\end{algorithm}

\begin{algorithm}
    \caption{Test algorithm}
    \begin{algorithmic}
        \input{$n$}
        \require{$n$ to be an integer}
        \state $sum \gets 0$
        \for{$i \gets 1$ \to $n^3$}
            \for{$j \gets 1$ \to $i$}
                \state $sum \gets sum + 1$
            \endfor
        \endfor
        \return $sum$
    \end{algorithmic}
\end{algorithm}
```

## Time Complexity of [Find Sum](#problem-statement)

**Computation Table:**

|Statement Number|$\frac{\text{Operation}}{\text{Execution}}$|Frequency|Total operation for statement|
|---|---|---|---|
|1|$1$|$1$|$1$|
|2|$1$|$n+1$|$n+1$|
|3|$1$|$n$|$n$|
|4|$0$|$0$|$0$|
|5|$1$|$1$|$1$|

<br>

$$
\begin{align*}
    \therefore T(n) = \text{Total Op} &= \sum \text{Total operation for statement} \\\\
    &= 2n + 3 \\\\
    &= \mathcal{O}(n)
\end{align*}
$$

## 


## Time Complexity of [Add Matrices](#problem-statement)

**Computation Table:**

|Statement Number|$\frac{\text{Operation}}{\text{Execution}}$|Frequency|Total operation for statement|
|---|---|---|---|
|1|$1$|$1$|$1$|
|2|$1$|$m+1$|$m+1$|
|3|$1$|$m(n+1)$|$m(n+1)$|
|4|$1$|$mn$|$mn$|
|5|$0$|$0$|$0$|
|6|$0$|$0$|$0$|
|7|$1$|$1$|$1$|

<br>

$$
\begin{align*}
    \therefore T(n) = \text{Total Op} &= \sum \text{Total operation for statement} \\\\
    &= (m+1) + m(n+1) + mn + 2 \\\\
    &= 2mn + 2m + 2 \\\\
    &= \mathcal{O}(mn)
\end{align*}
$$

> **Note:** Although, here the complexity is represented in terms of two quantities $m$ and $n$, in the limiting case, when given matrices are really big, the given matrices tend to a square matrix i.e., in the limiting case $m=n$. Thus, this algorithm for adding tow matrices has **Quadratic Complexity**.


## Time Complexity of [Test Algorithm](#problem-statement)

**Computation Table:**

|Statement Number|$\frac{\text{Operation}}{\text{Execution}}$|Frequency|Total operation for statement|
|---|---|---|---|
|1|$1$|$1$|$1$|
|2|$1$|$n^3+1$|$n^3+1$|
|3|$1$|$2 + 3 + \cdots + (n^3+1)$|$\frac{(n^3+1)(n^3+2)}{2} - 1$|
|4|$1$|$1+2+\cdots+n^3$|$\frac{n^3(n^2+1)}{2}$|
|5|$0$|$0$|$0$|
|6|$0$|$0$|$0$|
|7|$1$|$1$|$1$|

<br>

$$
\begin{align*}
    \therefore T(n) = \text{Total Op} &= \sum \text{Total operation for statement} \\\\
    &= 1 + (n^3 + 1) + \left[ \frac{(n^3+1)(n^3+2)}{2} - 1 \right] + \left[ \frac{n^3(n^2+1)}{2} \right] + 1 \\\\
    &= 2 + n^3 + \frac{(n^3+1)(n^3+2)}{2} + \frac{n^3(n^2+1)}{2} \\\\
    &= \frac{2n^6+6n^3+6}{2} \\\\
    &= n^6 + 3n^3 + 3 \\\\
    &= \mathcal{O}(n^6)
\end{align*}
$$ 

> **Note:** An algorithm's time complexity dos not always correspond to the number of nested loops it has.

The above method for finding an algorithm's time complexity based on number of operation per step is called **step-count method**. It is only used for iterative algorithms' complexity calculation. Recursive algorithms and their complexity calculation is done via recurrence relations.

<!-- TODO: Add recursive algorithm time complexity calculation here as well and update the last sentence. -->
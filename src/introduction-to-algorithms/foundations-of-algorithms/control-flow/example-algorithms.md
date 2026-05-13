# Example Algorithms

## Algorithm to find sum of given $n$ numbers

```pseudocode
\begin{algorithm}
    \caption{Find Sum}
    \begin{algorithmic}
        \input{$A$, $n$}
        \require{$A$ to be an array containing numbers \textbf{and} $n$ to be the length of $A$}
        \state $sum \gets 0.0$
        \for{$i \gets 0$ \to $n$}
            \state $sum \gets sum + A[i]$
        \endfor

        \return $sum$
    \end{algorithmic}
\end{algorithm}
```
## Algorithm to check if given number is prime or not

```pseudocode
\begin{algorithm}
    \caption{Is Prime}
    \begin{algorithmic}
        \input{$num$}
        \require{$num$ to be an \textbf{integer} and $num \ge 1$}
        \for{$i \gets 2$ \to $\sqrt{num}$}
            \if{$num\%i = 0$}
                \return \false
            \endif
            \state $sum \gets sum + A[i]$
        \endfor

        \return \true
    \end{algorithmic}
\end{algorithm}
```


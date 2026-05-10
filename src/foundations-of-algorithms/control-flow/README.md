# Control flow of an Algorithm

As seen in earlier chapters, Algorithms are read from top towards bottom and the instructions on each step are followed accordingly. This flow of reading instructions is called **Control Flow** and it always goes from top towards bottom.

All the previously described algorithms follow this same order of flow and without it the algorithm will not make any sense.

This default control flow is too restrictive. For example, lets take the following example of finding sum of all the elements of an array,

```pseudocode
\begin{algorithm}
    \caption{Bad Sum of Array elements}
    \begin{algorithmic}
        \input $arr$, the array of 10 items
        \output $sum$ of all 10 items
        \state $sum \gets arr[0] + arr[1] + arr[2] + \cdots + arr[9]$
        \state \return $sum$
    \end{algorithmic}
\end{algorithm}
```

This does returns the sum of all $10$ elements within the array but it has a major flaw as what if in future we are to add more than $10$ items?. This algorithm is not capable of doing this. It would be good to have a generic algorithm which could **iterate** over the array elements.

Consider one more problem, given an integer and we are to return "Fizz" if it's a multiple of $3$ or "Buzz" if it's a multiple of $5$ or "FizzBuzz" if it's a multiple of $3$ and $5$.

It is impossible to solve this problem with the default control flow.

This is why there exists instructions like **Conditional**, **Iterative** and **Procedure Call** to make this default control flow **Jump** to another instruction which makes this algorithmic notation **Turing Complete**.
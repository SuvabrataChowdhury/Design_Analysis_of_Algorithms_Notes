# Iterative Statements

Iterative statements are used to repeatedly run a set of statements until a condition is met. Generally a counter (called **loop counter**) is used to track the number of iterations and used as the **Termination Condition**.

Different types of loops are described below.

## For Loop:

**Syntax:**

```pseudocode
\begin{algorithm}
    \begin{algorithmic}
        \for{<control variable> $\gets$ <start val> \to <end val>, \textbf{steps} $\gets$ 2 }
            \state <statement 1>
            \state <statement 2>
            \state $\cdots$
            \state <statement n>
        \endfor
    \end{algorithmic}
\end{algorithm}
```

If step is omitted then the step amount is assumed to be 1.

## While Loop

**Syntax:**


```pseudocode
\begin{algorithm}
    \begin{algorithmic}
        \while{<condition>}
            \state <statement 1>
            \state <statement 2>
            \state $\cdots$
            \state <statement n>
        \endwhile
    \end{algorithmic}
\end{algorithm}
```

## Repeat-until Loop

Here, the condition is checked at the end. Hence it's also called exit control loop.



```pseudocode
\begin{algorithm}
    \begin{algorithmic}
        \repeat
            \state <statement 1>
            \state <statement 2>
            \state $\cdots$
            \state <statement n>
        \until{<condition>}
    \end{algorithmic}
\end{algorithm}
```

## Examples

Write algorithms which count from $a$ to $b$ in steps of $c$ using For, while and repeat-until loops.

```pseudocode
\begin{algorithm}
    \caption{Generic For}
    \begin{algorithmic}
        \input{$a$, $b$, $c$}
        \require{$a$, $b$, $c$ are integers}
        \for{$i \gets a$ \to $b$, \textbf{steps} $\gets$ $c$}
            \state write $i$
        \endfor
    \end{algorithmic}
\end{algorithm}

\begin{algorithm}
    \caption{Generic While}
    \begin{algorithmic}
        \input{$a$, $b$, $c$}
        \require{$a$, $b$, $c$ are integers}
        \while{$(a-b) \cdot c \lt 0 $}
            \state write $a$
            \state $a \gets a + c$
        \endwhile
    \end{algorithmic}
\end{algorithm}

\begin{algorithm}
    \caption{Generic Repeat-until}
    \begin{algorithmic}
        \input{$a$, $b$, $c$}
        \require{$a$, $b$, $c$ are integers}
        \if{$a \le b$}
            \repeat
                \state Write $a$
                \state $a \gets a + c$
            \until{$(a-b) \cdot c \lt 0 $}
        \endif
    \end{algorithmic}
\end{algorithm}
```
    
> **Note** the conditional statement at line 1 for Generic Repeat-until. Due to the exit-control nature of Repeat-until, it always executes **at least once** which will be incorrect in case of $a \ge b$. That's why the **If condition** is given for this case to ensure the flow does not reach repeat until block.
# Conditional Statements

Conditional statements are used to run a particular set of instructions based on specific condition. These are also called **Branching Statements/Instructions**.

Each **Condition** is nothing but a Boolean i.e, it will have a value of either **True** or **False**. So, the condition being true implies that the condition has a value **True**. 

## If

Given a condition being true, if a set of statements is to be executed then use **If** statements.

**Syntax:**

```pseudocode
\begin{algorithm}
    \begin{algorithmic}
    \if{<condition>}
        \state <statement $1$>
        \state <statement $2$>
        \state $\cdots$
        \state <statement $n$>
    \endif
    \end{algorithmic}
\end{algorithm}
```

It can be intuitively read as,

> **If** condition is true **then** do these.

## If - Else

Given a condition being true, if a set of statements is to be executed and on the condition being false another set of statements is to be executed then **If - Else** statements can be used.

**Syntax:**

```pseudocode
\begin{algorithm}
    \begin{algorithmic}
    \if{<condition>}
        \state <statement $1$>
        \state <statement $2$>
        \state $\cdots$
        \state <statement $n$>
    \else
        \state <statement $n+1$>
        \state <statement $n+2$>
        \state $\cdots$
        \state <statement $n+m$>
    \endif
    \end{algorithmic}
\end{algorithm}
```

It can be intuitively read as,

> **If** condition is true **then** do these; **Else** do these.

## If - Else If - Else

Given a condition being true, if a set of statements is to be executed, on a different condition being true another set of statements is to be executed and on all of those conditions being false another set of statements is to be executed then **If - Else If - Else** statements can be used.

**Syntax:**

```pseudocode
\begin{algorithm}
    \begin{algorithmic}
    \if{<condition 1>}
        \state <statement set $1$
    \elseif{<condition 2>}
        \state <statement set $2$>
\state $\cdots$
    \elseif{<condition n-1>}
        \state <statement set $n-1$>
    \else
        \state <statement set $n$>
    \endif
    \end{algorithmic}
\end{algorithm}
```

It can be intuitively read as,

>**If** condition $1$ is true **then** do these; **Else If** condition $2$ is true **then** do these; $\cdots$ ; **Else If** condition $n-1$ is true **then** do these; **Else** do these.

 
<!-- TODO: check if Case is required -->
<!-- ## Case -->

## Examples

**Fizz-Buzz:**

Lets take the problem discussed in [Control flow of an Algorithm](./index.html),

Given an integer, we are to return "Fizz" if it's a multiple of $3$ or "Buzz" if it's a multiple of "5" or "FizzBuzz" if it's a multiple of $3$ and $5$. If the integer satisfies none of the condition the return the number as is.

We can use the $mod$ operator on the input. Recall from [Arithmetic Operators](../operators-and-operands.md), that a modulus operator (denoted by $mod$ or $\\%$) of the form $x \\% y $ returns the remainder when $x$ is divided by $y$. If the remainder is $0$ then $x$ is divisible by $y$ and $x$ will be an integer multiple of $y$. With this we write the algorithm as follows,

```pseudocode
\begin{algorithm}
    \caption{Fizz-Buzz}
    \begin{algorithmic}
        \input $n$
        \require $n$ is an integer
        \output "Fizz", "Buzz" or "Fizz-Buzz" if $n$ is a multiple of either $3$, $5$ or $3$ and $5$ respectively. If $n$ does not satisfy none of the conditions then return $n$ as is.

        \if{$n \% 3 = 0$ \and $n \% 5 = 0$ }
            \return "Fizz-Buzz"
        \elseif{$n \% 3 = 0$}
            \return "Fizz"
        \elseif{$n \% 5 = 0$}
            \return "Buzz"
        \else
            \return $n$
        \endif
    \end{algorithmic}
\end{algorithm}
```

Though this algorithm is correct, it contains a lot of **If** statements and conditions. We can remove the else block entirely by using the **Exit First** strategy. Consider the following algorithm.


```pseudocode
\begin{algorithm}
    \caption{Fizz-Buzz v2}
    \begin{algorithmic}
        \input $n$
        \require $n$ is an integer
        \output "Fizz", "Buzz" or "Fizz-Buzz" if $n$ is a multiple of either $3$, $5$ or $3$ and $5$ respectively. If $n$ does not satisfy none of the conditions then return $n$ as is.

        \if{$n \% 15 = 0$ }
            \return "Fizz-Buzz"
        \endif

        \if{$n \% 3 = 0$}
            \return "Fizz"
        \endif

        \if{$n \% 5 = 0$}
            \return "Buzz"
        \endif
        
        \return $n$
    \end{algorithmic}
\end{algorithm}
```

This new algorithm is significantly better as,
- It has less number of checks. $n \\% 15 = 0$, $n \\% 3 = 0$ and $n \\% 5 = 0$ instead of $n \\% 3 = 0$ twice and $n \\% 5 = 0$ twice.
- Less blocks of instructions. 3 if blocks instead of 4 if-elseif-else blocks.

These won't cause much of an issue when tracing the algorithm by hand but when it's implemented in a computer comparison like this matters. We will explore more such comparisons in **Performance Analysis of Algorithms** part of the text.
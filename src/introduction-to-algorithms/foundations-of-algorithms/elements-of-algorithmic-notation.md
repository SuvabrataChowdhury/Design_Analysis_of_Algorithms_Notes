# Elements of Algorithmic Notation

As seen earlier, the actual instructions of an Algorithm follows certain structure. There are certain words or symbols that are algorithm specific, like $\gets$, the assignment operator and some are supplied by the programmer like $temp$, $num1$, $num2$ etc to **identify** some storage locations.

We define some terminologies which will be frequently used in this text.

## Useful Terminologies

- **Keyword:** A keyword is a reserved word which is intended for the algorithm.
- **Identifier:** An identifier is a name given to a quantity. The Identifier should not be a keyword.
- **Variable:** A quantity whose value can change during the execution of an Algorithm.
- **Constant:** A quantity whose value can never change during the execution of an Algorithm.
- **Data Type:** Data-type refers to the type of data a variable or constant holds. Though it is rarely explicitly mentioned in the algorithm but mostly it is inferred from the context.
- **Operator:** Symbols which operates on quantities.

## Examples

Consider the following algorithm,
```pseudocode
\begin{algorithm}
    \caption{Circle Area}
    \begin{algorithmic}
        \input $r$, the radius of the circle whose area is to be calculated.
        \ensure $r$ is non-negative.
        \output Area of the circle of radius $r$.

        \state $PI \gets 3.14159$
        \state $ area \gets PI \cdot r \cdot r$
        \return area
    \end{algorithmic}
\end{algorithm}
```

> **Note:** Constants as convention is written in all caps.

In this example we can Identify the followings,

|Type of Element| Elements in example|
|---|---|
|Keyword|$Input$, $Ensure$, $Output$, $return$|
|Identifier|$PI$, $area$, $r$|
|Variable|$area$, $r$|
|Constant|$PI$|
|Data Type|Reals for all $r$, $PI$ and $area$|
|Operator|$\gets$, $\cdot$|

The algorithm can also be written in smaller steps as the value of $\pi$ is a known constant
```pseudocode
\begin{algorithm}
    \caption{Circle Area v2}
    \begin{algorithmic}
        \input $r$, the radius of the circle whose area is to be calculated.
        \ensure $r$ is non-negative.
        \output Area of the circle of radius $r$.

        \return $\pi \cdot r^2$
    \end{algorithmic}
\end{algorithm}
```

Observe that the return statement is a mathematical expression i.e., $\pi \cdot r^2$, which is acceptable in Algorithmic notations.

> **Note:** Algorithmic Notations should mostly focus on readability but readable statements often becomes too verbose so most of the time mathematical expressions and set notations are used to keep statements short and readable.

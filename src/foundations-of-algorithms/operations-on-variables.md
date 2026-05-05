# Operations on variables

1. **Assignment:** The value of one variable or a constant or an expression can be assigned to another variable.
    
    The syntax is,
    $$
    \text{<variable\>} \gets \text{<value\>}
    $$
    > Here, `value` needs to be type compatible with `variable`.

2. **Arithmetic:** Just like in maths, arithmetic operations like addition (+), subtraction (-), multiplication (*), division (/), exponentiation (^) and modular division (%) can be done with the values of the variables whose types are numeric i.e., integers or reals.

    The syntax is,

    $$
    \text{<result\>} \gets \text{<val1\>} \circ \text{<val2\>}
    $$

    where $\circ \in$ `{+, -, *, ^, %}`.

    Similar to maths, operations and variables can be combined into an expression and brackets can be used to specify custom order of execution (follow [BODMAS rule](https://en.wikipedia.org/wiki/Order_of_operations)).

3. **Logical:** Logical operators produce boolean outputs by operating on boolean values. These operators are,
    |Type|Name|Symbol|
    |---|---|---|
    | Logical | and | `&&` |
    || or | `\|\|` |
    || not | `!` |
    |Bit-wise| and | `&` |
    || or | `\|` |
    || not | `!` |

    Bit-wise operators are to be used with their symbols so that it is distinguishable from Logical operators.
4. **Relational:** These are used to compare the values of numeric (sometimes string) variables. The operators are,
    |Name|Symbol|
    |---|---|
    |Equals| $=$ |
    |Not-equals| $\ne$ |
    |Less than| $\lt$ |
    |Less than equals| $\le$ |
    |Greater than| $\gt$ |
    |Greater than equals| $\ge$ |
5. **Arrays:** Arrays are the simplest type of data structures where data are stored in contagious memory locations. It specifies a collection of similar types of data.

    Array elements are accessed using their indices, like, `arr[i]`, will fetch `i`<sup>th</sup> element in the array.

    Multidimensional array elements are accessed using their coordinates separated by comma like, `arr[i1, i2, i3, ... , in]` will fetch item stored at $(i_1, i_2, i_3, \cdots, i_n)$.

6. **Procedure Calls:** An procedure can call another procedure or itself (called recursion) from anywhere within its scope with suitable arguments. When a call to another procedure happens, the calling procedure's working remains paused and it is only resumed after the called procedure finishes all of its tasks.

    **Example:**

    ```pseudocode
    \begin{algorithm}
        \caption{Procedure Call}
        \begin{algorithmic}
            \PROCEDURE{foo}{}
                \STATE \CALL{bar}{}
            \ENDPROCEDURE

            \STATE

            \PROCEDURE{bar}{}
                \STATE Write "Hello World"
            \ENDPROCEDURE
        \end{algorithmic}
    \end{algorithm}
    ```
# Operators and Operands

**Operators** are one of the fundamental ways to manipulate data. In algorithms and computer programs, **Operators** are instructions which does some computation on a given data. The data on which an operator operates is called **Operand**.

## Arity of an operator

Arity of an operator refers to the number of operand the operator takes. An **n-ary** operator operates on **n** operands.

## Symbols table

Throughout this text, as a shorthand notation, many logical symbols will be used. It is important to understand the meanings of such symbols.

|Symbol|Meaning|
|:---:|:---:|
|$:=$|is defined as|
|$\gets$|is assigned to|
|$=$|Equals|
|$\ne$|Not Equals|
|$\gt$|Greater Than|
|$\ge$|Greater Than and Equals|
|$\lt$|Less Than|
|$\le$|Less Than and Equals|
|$\cup$|Union|
|$\cap$|Intersection|
|$\land$|And|
|$\lor$|Or|
|$\lnot$|Not|
|$\in$|In|
|$\mathbb{R}$|Set Containing all Real numbers|
|$\mathbb{R}^+$|Set Containing all Positive Real numbers|
|$\mathbb{R}^-$|Set Containing all Negative Real numbers|
|$\mathbb{Z}$|Set Containing all Integers|
|$\mathbb{Z}^+$|Set Containing all positive Integers|
|$\mathbb{Z}^-$|Set Containing all negative Integers|

<!-- TODO: Elaborate the types of operators-->
## Types of Operators

|Operator|Applicable Operands|Generic Form|Examples|
|---|---|---|---|
|Assignment| Any data-type | $x \gets y$, where $x$ is an identifier and $y$ is the value of any data type.|
|Arithmetic| All numeric type| $x \circ y$, where $x,y \in \mathbb{R}$ and $\circ \in$ `{+, -, *, /, ^}`|
|Logical| Boolean type | $x \circ y$, where $x,y \in \\{True, False\\}$ and $\circ \in \\{ \land, \lor, \lnot \\}$|
|Relational| Any numeric type | $x \circ y$, where $x,y \in \mathbb{R}$ and $\circ \in \\{ =, \ne, \gt, \ge, \lt, \le \\}$
|Set| Set types | $x \circ y$, where $x,y$ are sets and $\circ \in \\{ \cup, \cap, - \\}$|

<!-- 
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
    ``` -->
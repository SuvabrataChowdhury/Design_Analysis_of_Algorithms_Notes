# Structure of Algorithms

Having defined what an algorithm is and its essential properties, we now look at how to express one precisely. Algorithmic notation can be considered as a language — it has its own keywords (such as `Input`, `Ensure`, `State`) and structural rules for how instructions are ordered and numbered. The examples below introduce this notation and show how it relates to the properties defined in the previous chapter.

## Example algorithms

**Example 1:**

Lets start with an algorithm that writes `Hello World` to understand it's generic structure.

```pseudocode
\begin{algorithm}
    \caption{Write}
    \begin{algorithmic}
        \state Write "Hello World"
    \end{algorithmic}
\end{algorithm}
```

Now if we follow the instruction we will be instructed to write the string `Hello World`. From this example alone the following can be seen,
- The text `Algorithm 1` to denote that it is an algorithm. The numbering is given for referring purpose and is usually optional.
- The algorithm has a name `Write`. It will be used to refer to the algorithm.
- It has a numbered line containing the instruction. The number is used mostly to identify at which instruction we are currently at while the algorithm is executing. 
- The instruction itself.

**Example 2:**

Many times, it is required to store quantities or data in some place for future reusability to solve a problem. To take an example consider an algorithm which swaps given two numbers.

```pseudocode
\begin{algorithm}
    \caption{Swap}
    \begin{algorithmic}
        \input $num1$ and $num2$, the numbers to swap.
        \ensure Content of $num1$ and $num2$ are swapped.
        \state $temp \gets num1$
        \state $num1 \gets num2$
        \state $num2 \gets temp$
    \end{algorithmic}
\end{algorithm}
```

Here, $num1$ and $num2$ are externally supplied to **Algorithm 2** — a direct instance of the **Input** property from the previous chapter.

If we follow the instructions line by line, one by one, we see at the end of line 3, contents of $num1$ ends up in $num2$ and vice-versa. Tracing each variable at each step makes this clear. Assuming $num1 = a$ and $num2 = b$ initially:

| Step | $temp$ | $num1$ | $num2$ |
|---|---|---|---|
| Initial | — | $a$ | $b$ |
| After line 1: $temp \gets num1$ | $a$ | $a$ | $b$ |
| After line 2: $num1 \gets num2$ | $a$ | $b$ | $b$ |
| After line 3: $num2 \gets temp$ | $a$ | $b$ | $a$ |

This also shows why $temp$ is necessary: without it, executing $num1 \gets num2$ first would overwrite $a$, making it impossible to assign the original value of $num1$ into $num2$.

$num1$, $num2$ and $temp$ are named storage locations to store data and are called **variables**. The names themselves, like $num1$, are called **identifiers**.

From **Algorithm 2** the following observations can be made,
- The same algorithm heading fields.
- The labeled **Input** and **Ensure** lines. These are not instructions as evident from the non-numbered lines but gives more context to the reader. **Input** describes what quantities are to be supplied from the outside. **Ensure** describes what is the effect of the algorithm.
- Lines like $temp \gets num1$. The symbol $\gets$ is an operator, more specifically it's an assignment operator. It assigns the value of the right hand side quantity to the left hand side quantity. Will have more discussion on operators in subsequent chapters.

> **Note:** Different authors and textbooks follow different algorithmic notations. Though the specific keywords and symbols may vary, the core constructs they express are the same. These building blocks also appear in all general-purpose programming languages such as C, Java, and Python.

## Generic Anatomy

Having seen the [examples](#example-algorithms), lets define the generic structure of algorithms that are followed throughout this book,

1. **Header:** The header section is used to identify the algorithm. It has the form of,
$$
\text{Algorithm \<optional number\> \<algorithm name\>}
$$

2. **Body:** The body section contains
    - **Algorithm Conditions:**  There are two types of condition checks that an algorithm can mention,
        - **Precondition:** Checks or assertions that has to be true **before** the algorithm begins it's execution. So, the algorithm always assumes these checks are done and does execution accordingly. If the input doesn't meet this condition, the algorithm isn't guaranteed to work.

            Some of the commonly used preconditions are,
            - $\text{Input}$: The quantities that are externally supplied to the algorithm.
            - $\text{Require}$: The condition that the Inputs must satisfy.
        - **Postcondition:** Checks or assertions that is guaranteed to be true **after** the algorithm completes it's execution, provided the precondition was met initially. 

            Some of the commonly used postconditions are,
            - $\text{Output}$: The quantities that the algorithm produces.
            - $\text{Ensure}$: The condition that the algorithm guarantees to be true on the output. If output is not present then the algorithm has some explicit side-effect and the ensure block describes it instead — corresponding to the **Output** property established earlier: an algorithm that returns nothing must have an observable side-effect. For example, Algorithm 2 (Swap) produces no output value, so its Ensure block describes the side effect instead.

        <!-- TODO: Add citations with relevant plugins. For both preconditions and postconditions add this reference: chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://www.cs.cmu.edu/~aldrich/courses/15-819O-13sp/resources/hoare-logic.pdf-->

    - **Algorithm Instructions:** The actual lines that tell what to do based on the **Preconditions**. For the **Definiteness** property to hold, each instruction must be clear and unambiguous. Instructions can be sequential (one after another), conditional (do something only if a condition holds), or iterative (repeat something). After following all the instructions the Algorithm ends with satisfying the **Postconditions**. Often these instructions are also called **Statements** and in this text we use it interchangeably.

In this text we follow these mentioned conventions.

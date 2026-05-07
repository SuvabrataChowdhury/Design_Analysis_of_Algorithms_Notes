# Common Data Types

As discussed [earlier](./elements-of-algorithmic-notation.md#useful-terminologies), data types are rarely explicitly mentioned within algorithms. From context, the data type of a variable or constant is inferred It's important to understand what data types are and in which contexts which data type is suitable.

## Primitive Data Type

A **Primitive Data Type** is a single-valued data type which cannot be decomposed into any other data type.

**Different Primitive Data Types:**

|Data Type|Description|Defined Operations|
|---|---|---|
|Integer|Any number without a decimal point in it is referred to as integer| Any arithmetic and relational operations |
|Real|Any number with a decimal point in it is a real number| Any arithmetic operations and relational operations|
|Character|Any single symbol representable by encoding (typically ASCII or Unicode) is called a character. Characters are written within single quotes ('')| Relational operations on ASCII ordering |
|Boolean|A quantity with only two values ($True$ and $False$) is called a boolean| Boolean operations i.e., $and (\land)$, $or (\lor)$, $not (\lnot)$ |

> **Note:** Operators and Operands are discussed in the next chapter

## Composite Data Type
A **Composite Data Type** is composed of multiple [Primitive Data Types](#primitive-data-type) or some other composite data types.

A Composite Data Type is almost always explicitly stated in algorithms, as otherwise, it will be difficult to interpret it.

**Different Composite Data Types**

|**Data Type**|**Description**|
|---|---|
|Array| An ordered sequence of similar types of data, often used for representing a collection. From implementation perspective, it stores its elements in contiguous memory locations. <br><br> $i^\text{th}$ element is accessed with $arr[i]$, given $arr$ is the name or **identifier** for the array. If the array is multi-dimensional, then the element at $(i_1, i_2, i_3, \cdots, i_n)$ is accessed as $arr[i_1, i_2, i_3, \cdots, i_n]$. |
|String|A collection of characters is called String. Though it is almost always represented as an array of characters in memory, Strings come up in practice so much that it has it's own name and notation. <br><br> Strings are written within double-quotes (""). A character at $i^\text{th}$ index can be accessed just like accessing an element from an array.|
|Set|An unordered collection of same or different type of data is referred to as set. Each element within a set is always unique. <br><br> Mathematical Set theory notations are used when dealing with Sets (explained in next chapter).|
|Structure or Record|A **Record** is a collection of different type of data, often used to represent real-world data with different kinds of properties. Each element of a **Structure** is often referred to as a property or field. <br><br> To access the property $name$ from the structure named $student$ '$.$' notation is used like, $student.name$|

**Example 1:**

```pseudocode
\begin{algorithm}
    \caption{Student Record}
    \begin{algorithmic}
    \output A Student named "John Doe" with id 1 and CGPA 8.76.
    \state $Student :=$ $\textbf{record}$ \{
        \state $\textbf{ Integer}$ $id$,
        \state $\textbf{  Real}$ $cgpa$,
        \state $\textbf{  String}$ $name$
    \state \}
    \state
    \state $\textbf{Declare}$ $student$ as $Student$
    \state
    \state $student.id \gets 1$
    \state $student.cgpa \gets 8.76$
    \state $student.name \gets "John Doe"$
    \state
    \return $student$
    \end{algorithmic}
\end{algorithm}
```

Let's explain the algorithm line-by-line,

|Line(s)|Explanation|
|---|---|
|1-5| The identifier $Student$ **is defined as** a **record** of Integer-valued $id$, Real-valued $cgpa$ and String name. The symbol $:=$ is read as **"is defined as"**.|
|7|The **variable** $student$ is **declared** to be of type $Student$.|
|9-11|The fields of $student$ are populated with the assignment operator ($\gets$).|
|13|The $student$ is returned from the algorithm|

> **Note:** The data type $Student$ is written with capital $S$, whereas the variable $student$ is written with small $s$. This is a convention to distinguish between data types and variables.

<!-- ## Abstract Data Type
An **Abstract Data Type (ADT)** is a data type which can have a predefined number of values and predefined operations.

It is a general description of a Data Type. **Any data type is an Abstract Data Type**. The reason it is **Abstract** is because the user of the data type is abstracted from the implementation of the operations and only observes the effect of the operation i.e., what it does. -->
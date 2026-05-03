# Identifiers and Data-types

## Some formal definitions

In [examples](#example-algorithms) section we encountered some terminologies that frequently comes up while describing algorithms. Lets formally define the terms,

- **Identifier:** An identifier is a name given to a memory or storage location. This creates a readable reference to the storage location.

    There are generally two types of identifiers,
    - **Variable:** An identifier whose value can change during the execution of an Algorithm.
    - **Constant:** An identifier whose value can never change during the execution of an Algorithm.
- **Data Type:** Data-type refers to the type of data an identifier holds. Though it is rarely explicitly mentioned in the algorithm but mostly it is inferred from the context.

    The followings are commonly used data-types,

    - **Numeric:** Stores any number related data. It can be used in any arithmetic operations just like in maths. There are two types of numeric types which are,
        - **Integer:** Number without a decimal point.
        - **Real:** Number with a decimal point.
    - **Boolean:** Stores a two-valued quantity. The values are $\text{True}$ and $\text{False}$.
    - **Character:** Stores a single alpha-numeric character.

## Statement

A statement is the fundamental unit of execution within an algorithm. Statement consists of basic instruction.

Complex instructions are sometime written in plain english

An algorithm is written with the following constructs. These are almost similar to the `C` programming language syntax but are more readable.
1. **Comments:** Comments are not instructions. Ignore them while following the algorithm. The are there to make the algorithm more readable. Comments start with `//` and must continue till end of line.
2. **Blocks:** Statements or instructions are enclosed within `{...}`. Each instruction is delimited by `;`.
3. **Identifiers:** Identifiers are used to identify items like variables, constants, data structures etc. An identifier must begin with a letter.
4. **Datatype:** Data-type of a variable is never explicitly defined. The datatype can be inferred from the context in which variables are used. The scope of the variable (local or global) can be inferred from its context.
    
    We assume simple datatype are integer, reals (floats and doubles), boolean and char. Compound datatypes can be formed with records, the structure is,
    ```pseudocode
    <structure_name> := record {
        <data type 1> <data 1>;
        <data type 2> <data 2>;
        ...
        <data type n> <data n>
    }
    ```

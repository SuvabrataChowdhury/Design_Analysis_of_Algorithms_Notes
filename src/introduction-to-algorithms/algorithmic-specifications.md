# Algorithmic Specifications

An algorithm is written with the following constructs. These are almost similar to the `C` programming language syntax but are more readable.
1. **Comments:** Comments are not instructions. Ignore them while following the algorithm. The are there to make the algorithm more readable. Comments start with `//` and must continue till end of line.
2. **Blocks:** Statements or instructions are enclosed within `{...}`. Each instruction is delimited by `;`.
3. **Identifiers:** Identifiers are used to identify items like variables, constants, data structures etc. An identifier must begin with a letter.
4. **Datatype:** Data-type of a variable is never explicitly defined. The datatype can be inferred from the context in which variables are used. The scope of the variable (local or global) can be inferred from its context.
    
    We assume simple datatype are integer, reals (floats and doubles), boolean and char. Compound datatypes can be formed with records, the structure is,
    ```
    <structure_name> := record {
        <data type 1> <data 1>;
        <data type 2> <data 2>;
        ...
        <data type n> <data n>
    }
    ```

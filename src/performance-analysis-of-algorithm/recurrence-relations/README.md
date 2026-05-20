# Recurrence Relations

A recurrence relation is a functional equation defined in terms of itself.

As it's a functional equation, the solution to a recurrence relation involves finding the closed form expression of the function.

Formally, a recurrence relation is an equation of the form,

$$
    c_0(n) \cdot a_n + c_1(n) \cdot a_{n-1} + \cdots + c_k(n) \cdot a_{n-k} = f(n)
$$

for $n \ge k$, where $c_0(n)$, $c_1(n)$, $\cdots$, $c_k(n)$ and $f(n)$ are functions of $n$ and the solution involves finding the closed form expression for $a_n$.

> **Note:** $a_n$ is also a function of $n$ but it is not explicitly stated unlike $c_0(n)$, $c_1(n)$, $\cdots$, $c_k(n)$ and $f(n)$. $a_n$ can also be written as $a(n)$

The recurrence relation of the given form is of degree $k$.

## Examples

1. **Sum of First** $n$ **natural numbers**:

$$
    s_n = n + s_{n-1}
$$

2. **Arithmetic progression with common difference** $d$: 

$$
    a_n = a_{n-1} +d
$$

3. **Geometric progression with common ratio** $r$:

$$
    p_n = r \cdot p_{n-1}
$$

4. **Fibonacci Sequence**

$$
    f_n = f_{n-1} + f_{n-2}; \quad f_0 = 1, f_1 = 1
$$

5. $a_n - 3 \cdot a_{n-1} + 2 \cdot a_{n-1} = 0$
5. $a_n - 3 \cdot a_{n-1} + 2 \cdot a_{n-1} = n^2 + 1$
5. $a_n^2 + (a_{n-1})^2 = 0$

If the highest degree of the functional terms is $1$ then the recurrence relation is called a **linear recurrence relation** (follows the given form), else it is a **non-linear recurrence relation**.

If $f(n)=0$ then it is a **homogeneous recurrence relation** else it is called **inhomogeneous recurrence relation**.

> **Note:** In the study of algorithms mostly linear homogeneous recurrence relations of degree $1$ is encountered.

## Solving Recurrence Relations:

Recurrence Relations can be solved using 4 different methods which are,
1. Substitution Method (also called iteration),
2. Generating Functions,
3. Characteristic Roots,
4. Undetermined Coefficients

Out of all these only the substitution method is listed as it is the most frequently used method for solving recurrence relations encountered in the study algorithms (rather in this text).
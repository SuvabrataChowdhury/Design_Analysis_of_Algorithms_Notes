# Substitution Method

In this method the recurrence relation for $a_n$ is **substituted** repeatedly to solve for a general expression for $a_n$ in terms of $n$. We desire that this expression involves no other terms of the sequence except those given by the boundary conditions (base cases).

Linear homogeneous recurrence relations of degree $1$ can easily be solved using substitution method.

## General Procedure

Solve, $a_n = c \cdot a_{n-1} + f(n)$ for $n \ge 1$ where $c$ is constant.

$$
    \begin{align*}
        a_n &= c \cdot a_{n-1} + f(n) \\\\
            &= c \cdot [ c \cdot a_{n-2} + f(n)] + f(n) \\\\
            &= c^2 \cdot a_{n-2} + c \cdot f(n-1) + f(n) \\\\
            &= c^2 \cdot [c \cdot a_{n-3} + f(n-2)] + [f(n) + c \cdot f(n-1)] \\\\
            &= c^3 \cdot a_{n-3} + c^2 \cdot f(n-2) + c \cdot f(n-1) + f(n) \\\\
            &\cdots \\\\
            &= c^n \cdot a_{n-n} + c^{n-1} \cdot f(1) + c^{n-2} \cdot f(2) + \cdots + c \cdot f(n) \\\\
            &= c^n \cdot a_0 + \sum_{k=1}^n c^{n-k} f(k)
    \end{align*}
$$

$$
    \boxed{\therefore \quad a_n = c^n \cdot a_0 + \sum_{k=1}^n c^{n-k} f(k)}
$$
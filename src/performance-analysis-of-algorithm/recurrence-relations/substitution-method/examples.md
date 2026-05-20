# Examples

## Solve $s_n = s_{n-1} + n; s_0 = 0$

$$
    \begin{align*}
        s_n &= s_{n-1} + n \\\\
            &= s_{n-2} + (n-1) + n \\\\
            &= s_{n-3} + (n-2) + (n-1) + n \\\\
            & \cdots \\\\
            &= s_{n-n} + 1 + 2 + \cdots + n \\\\
            &= s_0 + \sum_{i=1}^n i \\\\
            &= \sum_{i=1}^n i \\\\
            &= \boxed{\frac{n \cdot (n-1)}{2}}
    \end{align*}
$$

## Solve, $a_n = a_{n-1} + d$

$$
    \begin{align*}
        a_n &= a_{n-1} + d \\\\
            &= a_{n-2} + 2d \\\\
            &= a_{n-3} + 3n \\\\
            &\cdots \\\\
            &= a_{n-n} + n \cdot d \\\\
            &= \boxed{a_0 + n \cdot d}
    \end{align*}
$$

## Solve, $p_n = r \cdot p_{n-1}$

$$
    \begin{align*}
        p_n &= r \cdot p_{n-1} \\\\
            &= r \cdot (r \cdot p_{n-2}) \\\\
            &= r^2 \cdot p_{n-2} \\\\
            &\cdots \\\\
            &= r^n \cdot p_{n-n} \\\\
            &= \boxed{r^n \cdot p_0}
    \end{align*}
$$
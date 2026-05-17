# Little 'Omega' $(\omega)$

A function $f(n)$ is said to be $\omega(g(n))$ if and only if there exists two positive constants $c$ and $n_0$ such that,

$$
c \cdot |g(n)| \lt |f(n)|, \quad \forall n \ge n_0
$$

If the above condition holds true for two functions $f$ and $g$, then,

$$
f(n) = \omega(g(n))
$$

It is read as, $f(n)$ is $\omega(g(n))$. This means that $f(n) \in \omega(g(n))$ as there can be several functions other than $f$ which satisfies the Little 'Oh' condition.

## Limiting Definition

A function $f(n)$ is said to be Little 'Omega' of another function, $g(n)$ if and only if,

$$
\begin{align*}
    \lim_{n \to \infty } \frac{f(x)}{g(x)} &= \infty \\\\
    \implies \lim_{n \to \infty} \frac{g(x)}{f(x)} &= 0
\end{align*}
$$

As, the input size n grows bigger and bigger, larger than any number imaginable, if the ratio $\frac{f(x)}{g(x)}$ gets closer and closer to $0$ the $f(n) = \omega(g(n))$.

This definition is similar to [Big 'Omega'](../big-notations/big-omega.md) except that in the limiting case for Big 'Oh' the ratio $\frac{f(x)}{g(x)}$ can converge to $1$ as well due to the $\le$ condition in it's definition.

<!-- TODO: Add example of a function which is big oh of another function but not little oh of the same function. Sigmoid function can be used-->
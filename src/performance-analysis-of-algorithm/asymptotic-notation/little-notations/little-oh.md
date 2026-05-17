# Little 'Oh' $(\mathcal{o})$

A function $f(n)$ is said to be $\mathcal{o}(g(n))$ if and only if there exists two positive constants $c$ and $n_0$ such that,

$$
|f(n)| \lt c \cdot |g(n)|, \quad \forall n \ge n_0
$$

If the above condition holds for two functions $f$ and $g$, then,

$$
f(n) = \mathcal{o}(g(n))
$$

It is read as, $f(n)$ is $\mathcal{o}(g(n))$. This means that $f(n) \in \mathcal{o}(g(n))$ as there can be several functions other than $f$ which satisfies the Little 'Oh' condition.

## Limiting Definition

A function $f(n)$ is said to be Little 'Oh' of another function, $g(n)$ if and only if,

$$
\lim_{n \to \infty } \frac{f(x)}{g(x)} = 0
$$

As, the input size n grows bigger and bigger, larger than any number imaginable, if the ratio $\frac{f(x)}{g(x)}$ gets closer and closer to $0$ the $f(n) = \mathcal{o}(g(n))$.

This definition is similar to [Big 'Oh'](../big-notations/big-oh.md) except that in the limiting case for Big 'Oh' the ratio $\frac{f(x)}{g(x)}$ can converge to $1$ as well due to the $\le$ condition in it's definition.

<!-- TODO: Add example of a function which is big oh of another function but not little oh of the same function. Sigmoid function can be used-->
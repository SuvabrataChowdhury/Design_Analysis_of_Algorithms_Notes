# Finding Correct Bounds of Functions

Let the given function be $f(n)$. The order of growth of different generic functions are ,

$$
1 \lt \log{n} \lt n \lt n \cdot \log{n} \lt n^2 \lt n^3 \lt \cdots \lt n^k \lt 2^n \lt n! \lt n^n
$$

## Steps for finding the upper bound of $f(n)$ [in Big 'Oh'($\mathcal{O}$)]

1. Find the highest order term in $f(n)$. Use the above precedence as a reference.
2. The upper bound of $f(n)$ is Big 'Oh' of the highest order term excluding constant coefficient.

## Steps for finding the upper bound of $f(n)$ [in Big 'Omega'($\Omega$)]

1. Find the lowest order term in $f(n)$. Use the above precedence as a reference.
2. The lower bound of $f(n)$ is Big 'Omega' of the lowest order term excluding constant coefficient.

> **Note:** The upper bound of a function $f$ is the smallest order function that bounds $f$ from above. The lower bound of a function $f$ is the largest order function that bounds $f$ from below.

## Steps for finding the tight bound of $f(n)$ [in Big 'Theta' ($\Theta$)]

1. Find the upper and lower bound of $f(n)$.
2. If both bounds are same functions then the tight bound of $f(n)$ is Big Theta of the function in one of the bounds. Both bounds has to be a constant multiple of the same function as per the definition.

> **Note:** The tight bound always exists but it is not easy to find.

## Proof of correctness of steps for finding tight bound

Prove that, if $f(n) = \mathcal{O}(g(n))$ and $f(n) = \Omega(g(n))$ then $f(n) = \Theta(g(n))$.

**Proof:** 

Given that,

$$
\begin{align}
    f(n) &= \mathcal{O}(g(n)) \notag \\\\
    \implies |f(n)| &\le c_1 \cdot |g(n)|, \quad \forall n \ge n_1 \tag{1}
\end{align}
$$

Given that,

$$
\begin{align}
    f(n) &= \Omega(g(n)) \notag \\\\
    \implies |f(n)| &\le c_1 \cdot |g(n)|, \quad \forall n \ge n_1 \tag{2}
\end{align}
$$

Using $(1)$ and $(2)$ we can say that,

$$
c_2 \cdot |g(n)| \le |f(n)| \le c_1 \cdot |g(n)|, \quad \forall n \ge n_3 \quad \text{where, } n_3 = max(n_1, n_2)
$$

$$
\implies f(x) = \Theta(g(n)) \quad \blacksquare
$$

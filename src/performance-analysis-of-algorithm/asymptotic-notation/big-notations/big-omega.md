# Big 'Omega' $(\Omega)$

A function $f(n)$ is said to be order (Big-omega) of another function $g(n)$ if and only if there exists two positive constants $c$ and $n_0$ such that,

$$
c \cdot |g(n)| \le |f(n)|, \quad \forall n \ge n_0
$$

If the above condition holds for two functions $f$ and $g$ then,

$$
f(n) = \Omega(g(n))
$$

It is read as, $f(n)$ is **Big Omega** of $g(n)$ which means that $f(n) \in \Omega(g(n))$ as there can be several functions other than $f$ which satisfies the Big-Omega condition for $g$.

## Example

<div data-ggb-id="uwxnupm7"></div>

Here, from the definition of Big 'Omega' we can say that $f(n) = \Omega(g(n))$ as after the point $P_5$, $f(n)$ is always bounded from below by $g(n)$. Therefore, if an algorithm's time is represented using $f(n)$ [which can never happen] then it will not be lower than $g(n)$ after $P_5$, i.e., $g$ is $f$'s **lower bound**.

As **Big 'Omega'** contains functions whose lower bound is another function, this notation is also called **Asymptotic Lower Bound** notation.
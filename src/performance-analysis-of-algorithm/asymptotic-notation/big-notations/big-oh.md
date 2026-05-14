# Big 'Oh' $(\mathcal{O})$

A function $f(n)$ is said to be order (Big 'Oh') of another function $g(n)$ if and only if there exists two positive constants $c$ and $n_0$ such that,
$$
|f(x)| \le c \cdot |g(n)|, \quad \forall n \ge n_0
$$

If the above condition holds for two functions $f$ and $g$ then,

$$
|f(n)| = \mathcal{O}(g(n)) 
$$

It is read as $f(n)$ is $\mathcal{O}(g(n))$. This means that, $f(n) \in \mathcal{O}(g(n))$ as there can be several other functions other than $f$ which satisfies the Big 'Oh' condition for $g$

## Example

<div data-ggb-id="rktby5df"></div>

Here, from the definition of Big 'Oh', we can say that $f(n) = \mathcal{O}(g(n))$ as after the point $P_5$, $f(n)$ is always bounded from above by f(n) [which can never happen in reality as $f$ is not a monotonically increasing function] then it will never exceed $g(n)$ after point $P_5$ i.e., $g$ is $f$'s **maximum upper bound**.

As Big 'Oh' contains functions whose upper bound is another function, this notation is also called **Asymptotic Upper Bound** notation.
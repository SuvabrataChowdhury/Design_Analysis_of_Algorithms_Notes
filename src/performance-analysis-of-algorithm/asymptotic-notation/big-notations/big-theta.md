# Big 'Theta' $(\Theta)$

A function $f(n)$ is said to be Big 'Theta' of another function $g(n)$ if and only if there exists three positive constants $c_1$, $c_2$ and $n_0$ such that,

$$
c_1 \cdot |g(n)| \le |f(n)| \le c_2 \cdot |g(n)|, \quad \forall n \ge n_0
$$

If the above condition holds for two functions $f$ and $g$ then,

$$
f(n) = \Theta(g(n))
$$

It is read as, $f(n)$ is **Big 'Theta'** of $g(n)$. This means $f(n) \in \Theta(g(n))$ as there can be several functions other than $f$ which satisfies the Big 'Theta' condition for $g$.

## Example

<!-- Insert Image here -->

Here, from the definition of Big 'Theta', we can say that $f(n) = \Theta(g(n))$ as after the point $P$, $f(n)$ is always bounded from both above and below by two constant multiples of the function $g(n)$. Therefore, if an algorithm's time is represented using $f(n)$ [which can never happen] then it will never be more than $c_2 \cdot g(n)$ and less than $c_1 \cdot g(n)$ after $P$ i.e., $g$ is $f$'s **tight bound**.

As 'Big Theta' contains functions which sit between two constant multiples of another function, this notation is also called **Asymptotic Tight Bound**.
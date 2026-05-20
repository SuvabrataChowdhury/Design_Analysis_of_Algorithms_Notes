# Examples

## Prove that, $3 \cdot n + 2 = \mathcal{O}(n)$

The highest order term in $3 \cdot n + 2$ is $n$. So, the order should be $\mathcal{O}(n)$.

**Verification:**

Let, $c=4$,

|$n$|$c \cdot n$|$3 \cdot n + 2$| $3 \cdot n + 2 \le c \cdot n $ |
|:---:|:---:|:---:|:---:|
|1|4|5|❌|
|2|8|8|✅|
|3|12|11|✅|
|4|16|14|✅|
|$\vdots$|$\vdots$|$\vdots$|✅|

<br>

$$
\therefore \quad 3 \cdot n + 2 \le 4 \cdot n, \forall n \ge 2 \implies 3 \cdot n + 2 = \mathcal{O}(n) \quad \blacksquare
$$

## Prove that, $10n^2 + 4n + 2 = \mathcal{O}(n^2)$

The highest order term in $10n^2 + 4n + 2$ is $n^2$. So, the order should be $\mathcal{O}(n^2)$.

**Verification:**

|$n$|$n^2$|$11 \cdot n^2$|$10n^2 + 4n + 2$| $10n^2 + 4n + 2 \le 11n^2 $ |
|:---:|:---:|:---:|:---:|:---:|
|1|1|11|16|❌|
|2|8|44|50|❌|
|3|9|99|104|❌|
|4|16|176|178|❌|
|5|25|275|272|✅|
|$\vdots$|$\vdots$|$\vdots$|$\vdots$|✅|

<br>

$$
\therefore \quad 10n^2 + 4n + 2 \le 11n^2 \cdot n, \forall n \ge 5 \\\\
\implies 10n^2 + 4n + 2 = \mathcal{O}(n^2) \quad \blacksquare
$$

## Prove that, $10n^2 + 4n + 2 \ne \mathcal{O}(n)$

It is evident that,

$$
n^2 \ge n, \quad \forall n \ge 0
$$

$$
\begin{align*}
    &\implies 10n^2 \ge n, \quad \forall n \ge 0 \\\\
    &\implies 10n^2 + 4n + 2 \gt n, \quad \forall n \ge 0 \\\\
    &\implies 10n^2 + 4n + 2 \ge c \cdot n, \quad \forall n \ge 0 \land \forall c \gt 0 \\\\
    &\implies 10n^2 + 4n + 2 \ne \mathcal{O}(n) \quad \blacksquare
\end{align*}
$$

## Find $g(n)$ where, $6 \cdot 2^n + n^2 = \mathcal{O}(g(n))$

The highest order term in $6 \cdot 2^n + n^2$ is $2^n$. So, the upper bound should be $\mathcal{O}(2^n)$ which implies $g(n) = 2^n$

**Verification:**

|$n$|$n^2$|$2^n$|$7 \cdot 2^n$|$6 \cdot 2^n + n^2$| $6 \cdot 2^n + n^2 \le 2^n$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
|1|1|2|14|13|✅|
|2|8|4|28|18|✅|
|3|9|8|56|57|❌|
|4|16|16|112|112|✅|
|5|25|32|224|217|✅|
|6|36|64|448|448|✅|
|$\vdots$|$\vdots$|$\vdots$|$\vdots$|$\vdots$|✅|

<br>

$$
\therefore \quad 6 \cdot 2^n + n^2 \le 7 \cdot 2^n, \quad \forall n \ge 4 \\\\
\implies 6 \cdot 2^n + n^2 = 2^n \tag{1}
$$

$\quad \therefore g(n) = 2^n$ by comparing $(1)$ with the given statement.

## Find $g(n)$, where, $10n^2 + 4n + 2 = \Omega(g(n))$

We know that,

$$
10n^2 \ge n^2, \quad \forall n \ge 0
$$

$$
\begin{align*}
    &\implies 10n^2 \ge n^2, \quad \forall n \ge 0 \\\\
    &\implies 10n^2 + 4n + 2 \gt n^2, \quad \forall n \ge 0 \tag{1} \\\\
    &\implies 10n^2 + 4n + 2 \ge n, \quad \forall n \ge 0 \tag{2} \\\\
    &\implies 10n^2 + 4n + 2 \ge 1, \quad \forall n \ge 0 \tag{3} \\\\
    &\implies 10n^2 + 4n + 2 \ne \mathcal{O}(n) \quad \blacksquare
\end{align*}
$$

Comparing $(1)$ with given statement, we get,

$$
g(n) = n^2
$$

From, $(1)$ and $(3)$ we can also say that,

$$
10n^2 + 4n + 2 = \Omega(n) = \Omega(1)
$$

Out of $n^2$, $n$ and $1$, $n^2$ is of highest order and it it chosen to be the actual lower bound.

## Show that $2n + 3 = \mathcal{o}(n^2)$

$$
\lim_{n \to \infty} \frac{2n+3}{n^2} 
$$

$$
\begin{align*}
    &= \lim_{n \to \infty} \left( \frac{2}{n} + \frac{3}{n^2} \right) \\\\
    &= 2 \cdot \lim_{n \to \infty} \frac{1}{n} + 3 \cdot \lim_{n \to \infty} \frac{1}{n^2} \\\\
    &= 0 \\\\
\end{align*}
$$

$$
\implies 2n + 3 = \mathcal{o}(n^2) \quad \blacksquare 
$$
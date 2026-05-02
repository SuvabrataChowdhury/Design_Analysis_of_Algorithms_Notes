# 📘 DAA Notes Cheat Sheet (mdBook + KaTeX + pseudocode.js)

This guide covers the **essential syntax** for writing clean math and algorithm notes using:

* KaTeX → math rendering
* pseudocode.js → algorithm formatting
* mdBook → documentation

---

# 🧮 1. Math (KaTeX)

## Inline math

```md
Time complexity is $O(n \log n)$.
```

## Block math

```md
$$
T(n) = 2T(n/2) + n
$$
```

---

## Common symbols

| Meaning      | Syntax          |
| ------------ | --------------- |
| belongs to   | `x \in S`       |
| not in       | `x \notin S`    |
| subset       | `A \subseteq B` |
| union        | `A \cup B`      |
| intersection | `A \cap B`      |
| empty set    | `\emptyset`     |

---

## Asymptotic notation

```md
$O(n \log n), \Theta(n^2), \Omega(n)$
```

---

## Summations & products

```md
$$
\sum_{i=1}^{n} i
$$
```

```md
$$
\prod_{i=1}^{n} i
$$
```

---

## Fractions, powers, logs

```md
$\frac{a}{b},\quad n^2,\quad \log n,\quad \log_2 n$
```

---

## Operators

| Meaning    | Syntax         |
| ---------- | -------------- |
| assignment | `\gets`        |
| equals     | `=`            |
| not equal  | `\neq`         |
| ≤, ≥       | `\leq`, `\geq` |

---

## Important rules

* Escape `%` → `\%`
* Escape braces → `\{ \}`
* Avoid unnecessary escapes (`\\`, `\text{}` unless needed)

---

# 🔁 2. Recurrences (Core DAA)

```md
$$
T(n) = 2T(n/2) + n
$$
```

Expansion:

```md
$$
T(n) = 2T(n/2) + n
     = 2^2 T(n/4) + 2n
     = \dots
     = n \log n
$$
```

---

# 📜 3. Pseudocode (pseudocode.js)

## Basic structure

````md
```pseudocode
\begin{algorithm}
\caption{Algorithm Name}
\begin{algorithmic}
...
\end{algorithmic}
\end{algorithm}
```
````

---

## Function

```latex
\FUNCTION{name}{params}
...
\ENDFUNCTION
```

Example:

````md
```pseudocode
\FUNCTION{foo}{}
    \STATE bar()
\ENDFUNCTION
```
````

---

## Conditionals

```latex
\IF{condition}
    ...
\ELSE
    ...
\ENDIF
```

---

## Loops

### For loop

```latex
\FOR{i = 1 \TO n}
    ...
\ENDFOR
```

### While loop

```latex
\WHILE{condition}
    ...
\ENDWHILE
```

---

## Statements

| Action        | Syntax             |
| ------------- | ------------------ |
| statement     | `\STATE ...`       |
| return        | `\RETURN x`        |
| assignment    | `$x \gets y$`      |
| function call | `\CALL{foo}{args}` |

---

## Math inside pseudocode

Always wrap math in `$...$`

```latex
\STATE $q \gets \CALL{Partition}{A, p, r}$
```

---

## Example: QuickSort

````md
```pseudocode
\begin{algorithm}
\caption{QuickSort}
\begin{algorithmic}
\FUNCTION{QuickSort}{A, p, r}
    \IF{$p < r$}
        \STATE $q \gets \CALL{Partition}{A, p, r}$
        \STATE \CALL{QuickSort}{$A, p, q-1$}
        \STATE \CALL{QuickSort}{$A, q+1, r$}
    \ENDIF
\ENDFUNCTION
\end{algorithmic}
\end{algorithm}
```
````

---

# 🧾 4. When NOT to use math

Use backticks for plain symbols:

```md
`{ +, -, *, ^, % }`
```

---

# 🧠 5. Useful Patterns

## Complexity statement

```md
The algorithm runs in $O(n \log n)$ time.
```

## Recurrence + solution

```md
$$
T(n) = 2T(n/2) + n = O(n \log n)
$$
```

## Proof-style writing

```md
Assume $T(n) = O(n \log n)$.
```

---

# ⚠️ Common Pitfalls

* Don’t use `\coloneq` → use `\gets`
* Don’t mix math and text incorrectly
* Don’t over-escape (`\\`, `\^`)
* Always wrap math in `$...$` (even inside pseudocode)

---

# ✅ Recommended Workflow

* KaTeX → math, recurrences, proofs
* pseudocode.js → algorithms
* Markdown code blocks → actual code (C++ / Python)
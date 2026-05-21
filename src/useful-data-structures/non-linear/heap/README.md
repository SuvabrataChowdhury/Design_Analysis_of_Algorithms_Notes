# Heap

A complete binary tree is called heap, if it follows either **max heap** or **min heap** property.

**Example:**

```mermaid
flowchart LR
    subgraph "$$h$$"
        node0_1((4)) --- node1_1((3))
        node0_1 --- node1_2((8))
        
        node1_1 --- node2_1((6))
        node1_1 --- node2_2((2))
        node1_2 --- node2_3((7))
        node1_2 --- node2_4((5))

        node2_1 --- node3_1((9))
        node2_1 --- node3_2((10))
        node2_2 --- node3_3((1))
    end
```

## Representation in memory

A complete binary tree can be represented in memory using an array with the following convention,
- $arr[i]$ is the node value/item of node $i$,
- Left child of $i$ is located at $2 \cdot i$,
- Right child of $i$ is located at $2 \cdot i + 1$,
- Parent of $i$ is located at $\lfloor \frac{i}{2} \rfloor$

**Example:**

The array representation of $h$ is,

$$
\begin{array}{|c|c|c|c|c|c|c|c|c|c|c|}
\hline
indices & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10\\\\
\hline
elements & 4 & 3 & 8 & 6 & 2 & 7 & 5 & 9 & 10 & 1 \\\\ \hline
\end{array}
$$

## Max Heap property

Given a complete binary tree, if all of it's parent nodes contain items greater than their child node's value then such a tree is called a **Max Heap** and it follows a **Max Heap** property

**Example:**

```mermaid
flowchart LR
    subgraph "$$max_{heap}$$"
        node0_1((16)) --- node1_1((14))
        node0_1 --- node1_2((10))
        
        node1_1 --- node2_1((8))
        node1_1 --- node2_2((7))
        node1_2 --- node2_3((9))
        node1_2 --- node2_4((2))

        node2_1 --- node3_1((6))
        node2_1 --- node3_2((4))
        node2_2 --- node3_3((1))
    end
```

## Min Heap property

Given a complete binary tree, if all of it's parent nodes contain items smaller than their child nodes' values then such a tree is called a **Min Heap** and it follows the **Min Heap** property.

**Example:**

```mermaid
flowchart LR
    subgraph "$$max_{heap}$$"
        node0_1((2)) --- node1_1((3))
        node0_1 --- node1_2((8))
        
        node1_1 --- node2_1((4))
        node1_1 --- node2_2((6))
        node1_2 --- node2_3((11))
        node1_2 --- node2_4((9))
    end
```


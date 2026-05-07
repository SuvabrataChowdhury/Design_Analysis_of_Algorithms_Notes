# Introduction

Every program, no matter how sophisticated, ultimately reduces to a sequence of simple operations carried out by a processor. Understanding how that happens is where this course begins.

## How Computers Work

Computers, at the bare metal level, execute a sequence of *machine instructions* one after another to solve problems. Working with such machine instructions is difficult as,
1. The machine instructions are written in binary which makes them less readable to humans.
2. The machine instructions are CPU architecture specific — for example, the instructions that an x86 processor (found in most laptops and desktops) understands are different from the instructions that an ARM processor (found in smartphones and Apple Silicon Macs) understands. This makes machine instructions *platform-dependent*.

To overcome the readability issue, *Assembly Language* was developed. It is also a processor-specific instruction set, but the instructions are written with English words like,
    
```asm
ADD $1, $2
MOV EAX, 1
PUSH EBX
```
These assembly programs get **assembled** into the corresponding machine instructions and then executed.

This improved readability but platform compatibility remained a major issue. Also, assembly works directly with CPU registers, making even simple operations require many instructions. As both machine instructions and assembly work with the bare metal machine, they are referred to as *Low-Level Languages*.

## High-Level Languages

To overcome the platform compatibility and verbosity issues of assembly, a new generation of programming languages was developed. These *high-level* programming languages share the same syntax (determined by the language's specification) regardless of the underlying CPU architecture. Before executing the program, it is **translated** into machine code specific to the target CPU.

The **translation** process can be of two types,
1. **Compiled** — the entire program is translated to machine code ahead of time by a *compiler*, producing an executable that runs directly ([read more](https://en.wikipedia.org/wiki/Compiled_language)).
2. **Interpreted** — the program is executed line by line at runtime by an *interpreter*, without a prior compilation step ([read more](https://en.wikipedia.org/wiki/Interpreter_(computing))).

> **Note:** The distinction between compiled and interpreted languages is out of scope for this course. The key point is that regardless of approach, high-level source code is ultimately executed as machine instructions on a specific CPU.

Though the invention of high-level languages made programming more accessible, the wide variety of languages with different syntaxes made it difficult to study programs in general. This created a need for a uniform notation to describe and analyze programs.

## The Need for Formal Notation

If programs must be written in a specific language's syntax before they can be studied, then properties like performance and design patterns become hard to reason about in general. Thus, a language-independent description is needed.

This is where the study of **Algorithms** begins. An **algorithm** is a finite, ordered sequence of well-defined instructions that if followed, accomplishes a particular task. Algorithms are expressed in *pseudocode* — a structured, language-independent notation that captures logic clearly without being tied to any particular programming language's syntax.

By studying algorithms through pseudocode, their **performance** can be analyzed with mathematical models such as *time complexity* (how runtime scales with input size) and *space complexity* (how memory usage scales with input size). Recurring problem-solving patterns can also be identified to help **design** efficient algorithms for new problems.

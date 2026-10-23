---
status: active
project: classes
type: reference
---

# Guided Notes — Intro to C++ (Slides 1-34)

For Game Programming 2, Unit 1. These notes pair with the *Intro to CPP* deck.
Every term here is one you'll meet again the moment you open Unreal Engine.

---

## 1. What C++ is, and why games use it

- **C++** is the most popular language for writing video games. It was built on
  top of **C** by Bjarne Stroustrup.
- Three reasons games use it:
  1. **Fast** — used correctly, it runs very efficiently.
  2. **Flexible** — supports many styles, including object-oriented programming.
  3. **Well supported** — it's old, still everywhere, so tools and tutorials are
     everywhere too.

> **Why this matters in Unreal:** Unreal Engine itself is written in C++. Every
> game you build on top of it is running on C++ underneath, whether you type it
> or not.

---

## 2. Why C++ is fast (the three reasons)

1. **It's a compiled language.** The code is fully translated before it ever runs.
2. **It's barebones.** It skips some convenience features that would slow programs down.
3. **It's low level.** You can directly control memory.

**Key vocabulary:**

- **Compiled language** — code is converted to machine code *once*, before
  running, so the program can execute it directly. Pay-now, save-later.
- **Interpreted language** — code is translated and run line by line, *every*
  time. Faster to develop, slower to run.
- **Low-level language** — close to the hardware. Few layers between you and the
  machine. C and C++ sit close to machine language, which is why they're fast.
- **Machine language / machine code** — the raw instructions the processor
  actually executes.

---

## 3. Why speed matters for a game

A game has to do a huge amount of math just to put something on screen — before
gameplay even starts — and repeat it **60+ times per second**.

**Vocabulary for 3D graphics:**

- **Vertex (vert)** — a corner point of a shape. A cube has 8.
- **Edge** — a line between two verts. Each edge is shared by two faces.
- **Face** — a flat side. A cube has 6 faces.
- **Polygon** — a multi-sided flat shape. Faces are polygons.
- **Triangle (tri)** — a 3-sided polygon. Game devs prefer triangles over
  squares; most modern models are made of hundreds of thousands of them.

> **Why this matters in Unreal:** when you drop a mesh into the editor, you're
> looking at thousands of triangles, each built from verts with X, Y, Z
> coordinates. All of that math has to happen every frame. That's the whole
> reason the engine's core is C++.

**The punchline:** a cube is just 8 points in 3D space. A real model is hundreds
of thousands of points, each transformed every frame, 60 times a second. The
math is simple — it's just *a lot* of it. A language that wastes even a little
time per operation adds up fast.

---

## 4. Control: the other half of "fast"

C++ being low level means you can fine-tune memory and processor use. Slide 20's
example: a **Boolean** (true/false) normally takes a whole byte, but with
low-level tricks you can pack 8 of them into one byte.

- **Boolean (bool)** — a value that is only `true` or `false`.
- **Byte** — 8 bits. The basic unit of memory size.

> **Why this matters in Unreal:** you don't do this by hand in Unreal, but the
> engine does it constantly under the hood. Knowing it's happening is what makes
> the "C++ is fast" claim concrete instead of a slogan.

---

## 5. How a C++ file becomes a program (the build pipeline)

The full path a C++ file takes:

```
Editor  →  Source Code  →  Compiler  →  Machine Language  →  Linker  →  Executable
```

- **Source code** — the C++ you actually write.
- **Compiler** — translates your code into machine code, with optimization. It
  only compiles *your exact code*.
- **Linker** — connects your compiled code to the other files, libraries, and
  functions you referenced, producing the final file.
- **Executable** — the finished program the machine can run.

**The good news (slide 34):** your **IDE** (Visual Studio) does all of this for
you. You press **Build**, and it handles compile + link. You'll still learn to
*read* the errors it prints — that's a skill we build all year.

> **Why this matters in Unreal:** Unreal adds its own build system and its own
> header/source split (the `.h` / `.cpp` files). You'll meet both in Unit 2. The
> pipeline above is the foundation they sit on.

---

## 6. Where Blueprint fits (slides 23-26)

- **Blueprint** is Unreal's visual scripting system. It is *not* a separate
  language — it's a visual representation of C++ that runs underneath.
- You can do everything Blueprint does in raw C++, but **not** everything C++
  does in Blueprint.
- Unreal tries to make things easier by letting you use Blueprint — but the core
  mechanics of a game run on C++, because the engine runs on C++.

> **Why this matters:** this year you move from Blueprint (what you learned in
> GP1) to reading and modifying C++. Blueprint is still in the toolbox, but the
> engine's real power — and the parts you'll be reading — live in C++.

---

## Quick-check vocabulary list

| Term | One-line meaning |
|---|---|
| C++ | The language Unreal Engine is written in |
| Compiled language | Translated once, before running |
| Interpreted language | Translated line-by-line every run |
| Low-level language | Close to the hardware |
| Machine code | Raw processor instructions |
| Compiler | Turns source code into machine code |
| Linker | Connects your code to libraries, makes the executable |
| Executable | The finished, runnable program |
| IDE | Editor + compiler + linker in one tool (Visual Studio) |
| Build | The "make it runnable" step |
| Vertex (vert) | A corner point of a 3D shape |
| Edge | A line between two verts |
| Face | A flat side of a shape |
| Triangle (tri) | The polygon game models are built from |
| Boolean (bool) | A `true` / `false` value |
| Byte | 8 bits of memory |
| Blueprint | Unreal's visual layer over C++ |

---

## Where this goes next

Slides 1-34 set up the *why* (speed, control) and the *how* (compiled, build
pipeline, Blueprint-over-C++). Unit 2 picks up the *Unreal specifics*: the
header/source split, `UCLASS` / `UPROPERTY` / `UFUNCTION`, and the build system.
Everything in this notes page is the vocabulary you need before that jump.

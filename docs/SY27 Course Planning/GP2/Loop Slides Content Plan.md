---
status: draft
project: classes
type: content-plan
tags: [gp2, unit1, slides, loops]
created: 2026-09-03
updated: 2026-09-03
---

# Loop Slides Content Plan — GP2 Unit 1

Slide content plan for the for/while loops lesson. These slides don't exist yet in the Intro to C++ deck and need to be built. The deck currently ends at slide 198 (Functions summary). New slides will be appended after slide 198 or inserted as a new section.

This plan describes what should go on each slide, including code examples and descriptions of any images or diagrams. Nick will pull from this when building the actual slides.

---

## Section: LOOPS (slide ~199)

### Slide: LOOPS
Section header. Bold, big text.

### Slide: WHY LOOPS?
Games run the same code every frame — 60+ times per second. Loops are how that happens in C++. Without loops, you'd have to write the same line 60 times. With loops, you write it once and tell the computer how many times to repeat it.

**Image idea:** A side-by-side — left side shows 60 identical `cout` lines, right side shows a single `for` loop. Label left "What you'd have to write" and right "What you actually write."

### Slide: TYPES OF LOOPS
Two loop types we care about right now:

- **for loop** — you know how many times it should run (counted loop)
- **while loop** — you know when it should stop, but not exactly how many times (conditional loop)

**Image idea:** A simple flowchart comparison — for loop has a counter box, while loop has a condition diamond. Both route back to the top.

### Slide: THE FOR LOOP
A for loop runs a block of code a specific number of times.

```
for (int i = 0; i < 5; i++)
{
    cout << "Hello!" << endl;
}
```

Output: `Hello!` printed 5 times.

Breakdown:
- `int i = 0` — **initialize**: set up a counter
- `i < 5` — **condition**: keep going while this is true
- `i++` — **update**: change the counter after each loop
- `{ ... }` — **body**: the code that repeats

### Slide: FOR LOOP BREAKDOWN — THE THREE PARTS
The parentheses after `for` hold three statements separated by semicolons.

| Part | What it does | When it runs |
|------|-------------|--------------|
| `int i = 0` | Creates and starts the counter | Once, before the loop |
| `i < 5` | Checks if the loop should keep going | Before each iteration |
| `i++` | Changes the counter | After each iteration |

**Key point:** If the condition is never true to start with, the body never runs. `for (int i = 10; i < 5; i++)` — this loop does nothing.

### Slide: FOR LOOP — COUNTING UP
You can count by any amount and start from any number.

```
for (int i = 0; i <= 10; i += 2)
{
    cout << i << " ";
}
```

Output: `0 2 4 6 8 10`

**Key point:** `i += 2` is shorthand for `i = i + 2`. Same pattern works for `i -= 1`, `i *= 3`, etc.

### Slide: FOR LOOP — COMMON MISTAKES
Three mistakes everyone makes:

1. **Off-by-one**: `i <= 5` runs 6 times (0, 1, 2, 3, 4, 5). `i < 5` runs 5 times (0, 1, 2, 3, 4). Pick the right one.
2. **Infinite loop**: `for (int i = 0; i < 5; )` — forgot `i++`. The counter never changes. The loop never stops.
3. **Semicolon after parentheses**: `for (int i = 0; i < 5; i++);` — the semicolon makes the loop body empty. It runs 5 times doing nothing, then continues.

### Slide: FOR LOOP — COUNTDOWN
You can count down, too. Games use this for timers and cooldowns.

```
for (int i = 10; i > 0; i--)
{
    cout << i << "..." << endl;
}
cout << "GO!" << endl;
```

Output:
```
10...
9...
8...
7...
6...
5...
4...
3...
2...
1...
GO!
```

### Slide: WHILE LOOP
A while loop runs as long as a condition is true. You don't always know how many times it'll run.

```
int health = 100;

while (health > 0)
{
    health -= 25;
    cout << "Took damage! Health: " << health << endl;
}
cout << "Game Over!" << endl;
```

Output:
```
Took damage! Health: 75
Took damage! Health: 50
Took damage! Health: 25
Took damage! Health: 0
Game Over!
```

**Key point:** The condition is checked BEFORE each iteration. If it's false from the start, the body never runs.

### Slide: WHILE LOOP — GAME EXAMPLE
This is how game loops actually work. The game keeps running until a condition changes.

```
bool isPlaying = true;

while (isPlaying)
{
    // Game loop: process input, update, render
    cout << "Game is running..." << endl;
    isPlaying = false; // something ends the game
}
cout << "Thanks for playing!" << endl;
```

**Image idea:** A game loop diagram — Input → Update → Render → back to Input. Arrow labeled "while (isPlaying)" going around the cycle.

### Slide: FOR VS WHILE — WHEN TO USE WHICH

| Use a `for` loop when... | Use a `while` loop when... |
|---|---|
| You know how many times to repeat | You know when to stop, but not exactly how many |
| Counting through a range | Waiting for a condition to change |
| Iterating with a counter | Game loops, input validation, "keep going until..." |

**Rule of thumb:** If you can say "repeat this N times," use for. If you say "keep going until X happens," use while.

### Slide: NESTED LOOPS
A loop inside a loop. The inner loop runs completely for each iteration of the outer loop.

```
for (int row = 0; row < 3; row++)
{
    for (int col = 0; col < 4; col++)
    {
        cout << "X ";
    }
    cout << endl;
}
```

Output:
```
X X X X
X X X X
X X X X
```

**Key point:** This is how you process 2D grids — rows and columns. Every game tile map, every pixel grid works this way.

**Image idea:** A 3x4 grid with row/column labels, each cell marked with an X.

### Slide: BREAK AND CONTINUE
Two ways to change loop behavior mid-loop:

**`break`** — exit the loop immediately, no matter what.

```
for (int i = 0; i < 10; i++)
{
    if (i == 5)
    {
        break;  // loop stops here
    }
    cout << i << " ";
}
// Output: 0 1 2 3 4
```

**`continue`** — skip the rest of this iteration, move to the next one.

```
for (int i = 0; i < 6; i++)
{
    if (i == 3)
    {
        continue;  // skips printing 3
    }
    cout << i << " ";
}
// Output: 0 1 2 4 5
```

**Game use cases:** `break` = player found the exit, stop searching. `continue` = this enemy is already dead, skip it and check the next one.

### Slide: INFINITE LOOPS
A loop that never ends because its condition is always true.

```
while (true)
{
    // This runs forever
    // The only way out is break
}
```

Sometimes intentional (game loops). Sometimes a bug (forgot to update the counter). If your program freezes, check your loop condition.

### Slide: PRACTICE — LOOP EXERCISES
Three exercises, increasing difficulty:

1. **Count from 1 to 10**: Write a for loop that prints numbers 1 through 10.
2. **Sum the numbers**: Write a for loop that adds 1+2+3+4+5 and prints the result.
3. **Guess the number**: Write a while loop that keeps asking for input until the user guesses a secret number (use `cin`).

```
// Exercise 1 starter
for (int i = ___; i ___ ___; ___)
{
    cout << ___ << endl;
}
```

```
// Exercise 2 starter
int sum = 0;
for (int i = ___; i ___ ___; ___)
{
    sum = ___ + ___;
}
cout << "Sum: " << sum << endl;
```

```
// Exercise 3 starter
int secret = 7;
int guess;
cout << "Guess the number: ";
cin >> guess;

while (___)
{
    cout << "Wrong! Try again: ";
    cin >> guess;
}
cout << "You got it!" << endl;
```

### Slide: KEY TAKEAWAYS
- `for` loops count — use when you know how many times.
- `while` loops check — use when you know when to stop.
- Off-by-one errors are the most common loop bug.
- `break` exits a loop. `continue` skips one iteration.
- Every game runs on a loop. This is not optional knowledge.

---

## Notes for Nick

- These slides go after the Functions section (after slide 198) in the existing deck, or in a new section.
- The loop content should be taught between conditionals and the Unit 1 consolidation/checkpoint.
- Code examples should use game-themed variable names (health, isPlaying, enemies) to maintain the course framing.
- The nested loops slide is optional depending on pacing — it can be cut if the day runs long.
- Break/continue can also be cut to save time if needed. They're useful but not essential for the checkpoint.
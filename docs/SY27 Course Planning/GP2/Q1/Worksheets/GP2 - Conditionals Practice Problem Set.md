---
course: GP2
quarter: Q1
type: worksheet
status: active
updated: 2026-09-24
---

# Conditionals Practice Problem Set

Source of truth for the Day 19 (Tue 9/29) and Day 20 (Wed 9/30) conditionals practice. Goes into a Google Doc for the sub window. Each problem is a complete program with its own main. Students paste them one at a time into Codédex Build and never touch their Variables Practice repo. Answer key is at the bottom, teacher only; keep it out of the student Doc.

Teacher note: the set deliberately avoids `&&` and `||` (not covered as of Day 17), loops, functions, and modulo. Do not add problems that need them.

## How this works (student-facing)

Every problem here is a complete program. You are not using your repo today.

1. Copy the whole code block.
2. Paste it into Codédex Build: codedex.io/cpp
3. Run it and make it match the sample run.
4. When it works, screenshot the code and the output. Then paste your code as text so it can be run again for verification. Turn both in on Google Classroom.

One problem per paste. Do them in order, they get trickier as they go.

Stuck for more than five minutes? Open the C++ Cheat Sheet on Google Classroom before you ask for help.

## Worked example: gradeCheck

Read this one top to bottom first. It asks for a score. 70 or higher passes.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int score;

    cout << "Enter your score: ";
    cin >> score;

    if (score >= 70)
    {
        cout << "Pass" << endl;
    }
    else
    {
        cout << "Fail" << endl;
    }

    return 0;
}
```

```
Enter your score: 85
Pass
```

Why `>=` and not `>`? A 70 passes. Write `>` and a 70 prints Fail.

## Part 1: Write it

### Program 1: healthCheck

Ask for the player's health. Under 20 prints "Low health! Find a potion!". 20 or higher prints "You're fine."

```cpp
#include <iostream>
using namespace std;

int main()
{
    int health;

    cout << "Enter your health: ";
    cin >> health;

    // Write your conditional here

    return 0;
}
```

```
Enter your health: 15
Low health! Find a potion!
```

```
Enter your health: 45
You're fine.
```

[Check: what should an exact 20 print? Decide before you run it.]

### Program 2: scoreTier

Ask for a score. Print the right tier:

| Score | Prints |
|-------|--------|
| 90 or higher | Gold |
| 75 or higher | Silver |
| 50 or higher | Bronze |
| Below 50 | Try again |

Use ONE chain: `if`, then `else if`, then `else if`, then `else`. [Hint: start with the highest tier.]

```cpp
#include <iostream>
using namespace std;

int main()
{
    int score;

    cout << "Enter your score: ";
    cin >> score;

    // Write your conditional chain here

    return 0;
}
```

```
Enter your score: 95
Gold
```

```
Enter your score: 60
Bronze
```

## Part 2: It runs, but the logic is wrong

Each program compiles. Each program runs. Each one does the wrong thing.

For each one, answer before you fix:

a) Run it with the sample input. What does it actually print? ______________________
b) What's wrong, in one sentence? ______________________
c) Fix it so it matches the spec.

### Program 3: equalsTrap

Spec: ask for coins. Exactly 100 prints "Rich". Anything else prints "Keep saving".

```cpp
#include <iostream>
using namespace std;

int main()
{
    int coins;

    cout << "Enter your coins: ";
    cin >> coins;

    if (coins = 100)
    {
        cout << "Rich" << endl;
    }
    else
    {
        cout << "Keep saving" << endl;
    }

    return 0;
}
```

```
Enter your coins: 42
Rich
```

That's wrong. 42 is not rich. One character is in the wrong place. [The Cheat Sheet has a table for this.]

### Program 4: tierOrder

Spec: ask for speed. 60 or higher prints "Full speed". 30 or higher prints "Half speed". Below 30 prints "Slow".

```cpp
#include <iostream>
using namespace std;

int main()
{
    int speed;

    cout << "Enter your speed: ";
    cin >> speed;

    if (speed >= 30)
    {
        cout << "Half speed" << endl;
    }
    else if (speed >= 60)
    {
        cout << "Full speed" << endl;
    }
    else
    {
        cout << "Slow" << endl;
    }

    return 0;
}
```

```
Enter your speed: 75
Half speed
```

75 should be full speed. Every line of this chain is fine on its own. [Think about the order the checks happen in.]

### Program 5: boundaryBug

Spec: same as the worked example. Ask for a score. 70 or higher prints "Pass". Below 70 prints "Fail".

```cpp
#include <iostream>
using namespace std;

int main()
{
    int score;

    cout << "Enter your score: ";
    cin >> score;

    if (score > 70)
    {
        cout << "Pass" << endl;
    }
    else
    {
        cout << "Fail" << endl;
    }

    return 0;
}
```

```
Enter your score: 70
Fail
```

An exact 70 should pass. Compare this line to the worked example at the top of the Doc.

## Challenge (optional)

One-shot number guessing. Pick a secret number and hardcode it. Ask the user for one guess. Exactly right prints "You got it!". Too low prints "Too low!". Too high prints "Too high!".

No loop needed, the user gets one guess. [Hint: three branches. The secret can be any number you want. 7 is a good one.]

When it works, screenshot it and paste the code like the rest.

## Answer Key (teacher only, keep out of the student Doc)

**Program 1 (healthCheck):** `if (health < 20) { "Low health! Find a potion!" } else { "You're fine." }`. Exact 20 prints "You're fine." (under 20 means < 20). Tests basic if/else plus boundary reading.

**Program 2 (scoreTier):** chain ordered 90 → 75 → 50 → else. The trap is writing the checks low-to-high, which makes everything Gold-eligible print Bronze first. Tests else-if chains and ordering. This is the write-it twin of Program 4.

**Program 3 (equalsTrap):** `=` assigns 100 to coins, the assignment evaluates to 100, which is nonzero, which is true. Every input prints "Rich". Compiles with at most a warning. Fix: `==`. Tests = vs ==, the same distinction as Day 19's Do Now and Form Q7/Q25.

**Program 4 (tierOrder):** the `>= 30` check runs first and catches 75 before the `>= 60` branch is ever reached. Fix: check the highest tier first. Tests chain order with a correct-looking chain; each line individually is valid.

**Program 5 (boundaryBug):** `>` excludes exactly 70. Fix: `>=`. The worked example is the direct comparison, deliberately. Tests boundary operators.

**Challenge:** `if (guess == secret) { "You got it!" } else if (guess < secret) { "Too low!" } else { "Too high!" }`. Three branches, two comparison operators, one chain. This is the Day 20 early-finisher task.

**Verification flow:** screenshots show it ran; pasted text gets run once more to confirm. The screenshot without the paste is not enough on its own.
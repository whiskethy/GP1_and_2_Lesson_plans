---
course: GP2
quarter: Q1
type: worksheet
status: active
updated: 2026-10-23
---

# Logical Operators Practice + Exit Ticket

Logical operators practice for Day 21, posted to Classroom. Students work in Codédex Build, answer the exit ticket questions as code comments, and turn in screenshots of the code and output on Classroom.

## How this works

You are not using your repo today. Everything happens in Codédex Build.

1. Copy the whole code block.
2. Paste it into Codédex Build: codedex.io/cpp
3. Write your conditions, run it, make it match the sample runs.
4. Answer the exit ticket questions as comments inside the program (Part 3 shows you how).
5. Screenshot the finished code and the output together, turn it in on Google Classroom.

One program today. Work top to bottom. Stuck more than five minutes? C++ Cheat Sheet first, then ask.

## Worked example: bossDoor

Read this one top to bottom first. The boss door only opens when you beat the level AND you have the key.

```cpp
#include <iostream>
using namespace std;

int main()
{
    bool beatLevel = true;
    bool hasKey = true;

    if (beatLevel && hasKey)
    {
        cout << "The boss door opens." << endl;
    }
    else
    {
        cout << "The door stays shut." << endl;
    }

    return 0;
}
```

```
The boss door opens.
```

Change `hasKey` to `false` and run it again. The door stays shut. That's the whole idea: `&&` needs BOTH sides true. One false side kills it.

Now look at this one:

```cpp
if (beatLevel || smashedLock)
{
    cout << "The door opens." << endl;
}
```

`||` needs ONE side true. Either side. Both is fine too. `||` is easy to please.

[Check yourself: what does the `||` version print if BOTH are false? Decide before you run it.]

## Part 1: Write it

### Program 1: treasureRoom

Print "Treasure!" only when health is over 20 AND hasKey is true. Any other case prints "Keep moving."

```cpp
#include <iostream>
using namespace std;

int main()
{
    int health = 50;
    bool hasKey = false;

    // Write your conditional here

    return 0;
}
```

```
Treasure!
```

Wait, that sample says Treasure but `hasKey` is false. Exactly. As written, it should NOT print Treasure. Fix the variables so it does, or change your conditional, your call. But be able to say why it prints what it prints.

[Check: with health = 50 and hasKey = false, what SHOULD it print before you change anything?]

### Program 2: smashTheLock

Print "Door opens" when hasKey is true OR smashedLock is true. Both false prints "Locked."

```cpp
#include <iostream>
using namespace std;

int main()
{
    bool hasKey = false;
    bool smashedLock = true;

    // Write your conditional here

    return 0;
}
```

```
Door opens
```

Then test all four cases by changing the two variables. Two should open the door, two should not. [Write down which two combos open it before you run them.]

### Program 3: gameRunning

Print "Game over" only when the player is dead. The variable is `isAlive`. Use `!`.

```cpp
#include <iostream>
using namespace std;

int main()
{
    bool isAlive = false;

    // Write your conditional here

    return 0;
}
```

```
Game over
```

## Part 2: It runs, but the logic is wrong

This one compiles. It runs. It does the wrong thing.

Answer before you fix it:

a) Run it. What does it actually print? ______________________
b) What's wrong, in one sentence? ______________________
c) Fix it.

### Program 4: andTrap

Spec: print "Boss mode!" only when score is over 100 AND level is 3. Anything else prints "Keep playing."

```cpp
#include <iostream>
using namespace std;

int main()
{
    int score = 150;
    int level = 1;

    if (score > 100 || level == 3)
    {
        cout << "Boss mode!" << endl;
    }
    else
    {
        cout << "Keep playing" << endl;
    }

    return 0;
}
```

```
Boss mode!
```

Score is 150 but level is 1. That's not boss mode yet. One operator is the wrong one.

## Part 3: Exit ticket (answer as comments)

Here's how to answer as a comment. Two slashes, then your answer:

```cpp
// 1. answer: because && needs both sides true
```

Paste this block at the BOTTOM of your Program 2 code (so it's all in one screenshot), fill in each answer, run it once, screenshot the whole thing:

```cpp
// EXIT TICKET
// 1. Write an if statement that prints "Boss mode!" only when
//    score is over 100 AND level is 3:
//
// 2. Write an if statement that prints "Access granted" when
//    hasKey is true OR hasCrowbar is true:
//
// 3. Two separate if statements vs one if with &&. When would
//    you use each?
//
// 4. What do you still owe from the sub window (Variables
//    Practice, Conditionals Practice)? What's your plan to
//    finish it?
//
// 5. Rank yourself 1-4 on each: variables, functions,
//    conditionals, logical operators. Which one do you most
//    want re-taught Monday?
```

Turn in ONE screenshot of Program 2 with the exit ticket comments showing, plus one screenshot of each other program working. Paste your code as text too, like always.

## Challenge (optional)

The speedrun rule: print "Speedrun!" only when time is under 60 AND deaths is 0 AND skipsFound is 3. Three conditions, one if.

Then flip it: print "Speedrun!" when time is under 60 OR the runner found all 3 skips. Which version is easier to earn? Why does a game designer pick one over the other?

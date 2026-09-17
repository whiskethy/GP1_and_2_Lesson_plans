---
course: GP2
quarter: Q1
day: 12
date: Mon 9/14
day_type: A
chunk: review
type: practice (sub)
class_minutes: 48
unit: 1
status: active
sub: true
riddle: What question can you never answer yes to?
joke: Did you hear about the circus fire?
---

# GP2 — Variables & Code Reading Check (Sub)

**Date:** Mon 9/14 · **Unit:** 1 · **Chunk:** review + practice
**Planning Sheet:** [Week of 9/14](https://docs.google.com/spreadsheets/d/1BAraM0o0eLd7zR2-72g7UeiI0KIG54fnvjsCVU_h5sk/edit)

> **Sub coverage.** Nick is out. No new instruction. Students complete this form independently using their notes. No phones, no internet, no Codédex.

## Learning Target

Demonstrate mastery of C++ variable declaration, assignment, data types, and syntax rules by reading code and predicting output.

**Standards:** CSTA 3A-AP-16 · ACT WME 402, CLR 401

**Performance Task Connection:** Variable fluency and code reading are prerequisite for every program in the course. This form checks retrieval from Days 5-9 before moving on to VS/GitHub workflow and new content.

---

# GP2 — Variables & Code Reading Check

*Monday 9/14 — Sub Day*
*Complete this form using your notes. No phones, no internet, no Codédex.*
*You have the full period. Work carefully.*

---

## Part 1: Data Types

**Q1.** Which data type would you use to store a student's grade percentage (like 87.5)?

- A) int
- B) float
- C) char
- D) bool

**Q2.** Which data type stores a single character?

- A) int
- B) string
- C) char
- D) float

**Q3.** Which data type can only hold true or false?

- A) int
- B) string
- C) float
- D) bool

**Q4.** What is the difference between an int and a float? Give an example of when you would use each.

*[Short answer]*

---

## Part 2: Variable Declaration & Assignment

**Q5.** What is wrong with this code?

```cpp
age = 16;
```

- A) Nothing, it's correct
- B) The variable `age` was never declared
- C) 16 needs to be in quotes
- D) You can't store numbers in variables

**Q6.** Which line correctly declares and assigns a variable called `score` that holds the whole number 100?

- A) `score = 100;`
- B) `int score = 100;`
- C) `int 100 = score;`
- D) `score int = 100;`

**Q7.** What is the value of `x` after this code runs?

```cpp
int x = 5;
x = 12;
```

- A) 5
- B) 12
- C) 17
- D) This code causes an error

**Q8.** What is wrong with this code?

```cpp
int my number = 42;
```

- A) The value should be a float
- B) Variable names can't have spaces
- C) The semicolon is in the wrong place
- D) 42 needs to be in quotes

---

## Part 3: Fix the Errors

Each program below has syntax errors. Find ALL the errors and rewrite the corrected version.

**Q9.** Fix the errors in this program:

```cpp
#include <iostream>
using namespace std

int main() {
    cout << "Hello World"
    return 0;
}
```

*[Long answer — write the corrected program]*

**Q10.** Fix the errors in this program:

```cpp
#include <iostream>
using namespace std;

int main() {
    int age = 15
    cout << "I am " << age << " years old." << endl;
    return 0;
}
```

*[Long answer — write the corrected program]*

**Q11.** Fix the errors in this program:

```cpp
#include <iostream>
using namespace std;

int main() {
    float temperature = 98.6;
    cout << "It is " << Temperature << " degrees." << endl;
    return 0;
}
```

*[Long answer — write the corrected program]*

---

## Part 4: Code Reading — What Does This Print?

Read each program carefully. Write the exact output that would appear on the screen when the program runs.

**Q12.** What does this program print?

```cpp
#include <iostream>
using namespace std;

int main() {
    int x = 10;
    int y = 3;
    cout << x + y << endl;
    return 0;
}
```

*[Short answer]*

**Q13.** What does this program print?

```cpp
#include <iostream>
using namespace std;

int main() {
    int score = 50;
    score = score + 25;
    cout << score << endl;
    return 0;
}
```

*[Short answer]*

**Q14.** What does this program print?

```cpp
#include <iostream>
using namespace std;

int main() {
    string name = "Alex";
    int level = 7;
    cout << name << " is level " << level << endl;
    return 0;
}
```

*[Short answer]*

**Q15.** What does this program print?

```cpp
#include <iostream>
using namespace std;

int main() {
    int a = 20;
    int b = 5;
    cout << a / b << endl;
    cout << a % b << endl;
    return 0;
}
```

*[Short answer — write both lines of output]*

---

## Answer Key (for sub only — do not distribute)

**Q1.** B (float — percentages can have decimals)

**Q2.** C (char)

**Q3.** D (bool)

**Q4.** int stores whole numbers (example: counting items, age in years). float stores numbers with decimals (example: temperature, GPA, percentages). int can't hold fractional values; float can.

**Q5.** B — the variable `age` was never declared. You need `int age = 16;` or at least `int age;` before assigning.

**Q6.** B — `int score = 100;` declares the type, names the variable, and assigns the value in one line.

**Q7.** B — 12. The second assignment overwrites the first value.

**Q8.** B — variable names can't have spaces. Should be `myNumber` or `my_number`.

**Q9.** Two errors: missing semicolon after `using namespace std`, missing semicolon after `cout << "Hello World"`.
Corrected:
```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello World" << endl;
    return 0;
}
```
(Note: also needs `<< endl` or `<< "\n"` to match typical output, but technically the original only has two syntax errors — the missing semicolons.)

**Q10.** One error: missing semicolon after `int age = 15`.
Corrected:
```cpp
#include <iostream>
using namespace std;

int main() {
    int age = 15;
    cout << "I am " << age << " years old." << endl;
    return 0;
}
```

**Q11.** One error: `Temperature` should be `temperature` (capital T — C++ is case-sensitive, the variable was declared with a lowercase t).
Corrected:
```cpp
#include <iostream>
using namespace std;

int main() {
    float temperature = 98.6;
    cout << "It is " << temperature << " degrees." << endl;
    return 0;
}
```

**Q12.** 13

**Q13.** 75

**Q14.** Alex is level 7

**Q15.** 4 on the first line, 0 on the second line. (20 / 5 = 4, 20 % 5 = 0)

---

## Sub Instructions

1. Pass out the form link (posted on the board and in Google Classroom).
2. Students work independently using their written notes only. No phones, no internet, no Codédex.
3. Students who finish early should review their notes on data types and variables — we will build on this next class.
4. Collect any paper notes at the end if the form is being used as a graded check.
5. If anyone has technical issues with the form, they can write answers on paper and turn them in.

## Differentiation & Accommodations

- **Engagement:** Mix of multiple choice, fix-the-code, and code reading — variety keeps attention
- **Representation:** Code blocks are visible on screen and in the form; no prior internet needed
- **Action & Expression:** Multiple choice for recall, short answer for explanation, code writing for application
- **Accommodations:** Extended time (full period); students may use written notes; sub has answer key for reference only
- **Student Voice:** Code reading section lets students show understanding without writing from scratch

## Materials

| Item | Status | Link |
|------|--------|------|
| Google Form (this document) | 🚧 NOT BUILT | Build from this markdown |
| Answer key (sub only) | ✅ | In this document, below the form questions |
| Student notes from Days 5-9 | ✅ | Students have their own |

## Connections

← [[GP2 Q1 Day 11 - CANCELLED Field Trip]] | [[GP2 Q1 Calendar]] | [[GP2 - VS & GitHub Workflow]] →
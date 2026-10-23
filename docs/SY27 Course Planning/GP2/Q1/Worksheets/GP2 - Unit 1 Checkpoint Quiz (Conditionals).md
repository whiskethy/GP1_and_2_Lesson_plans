---
course: GP2
quarter: Q1
day: 23
type: worksheet
status: active
updated: 2026-10-05
---

# GP2 - Unit 1 Checkpoint Quiz (Conditionals)

Source of truth for the Day 23 (Tue 10/6) checkpoint quiz. **The quiz is the Unit 1 Checkpoint** (10/5 replan): scope is the Day 17-21 conditionals arc — if/else, else if chains, comparison operators, logical operators. Loops are assessed in-project later; variables/functions/git were checked by the Day 12 Form and today's Kahoot, not retested here.

Form settings when it gets built: quiz mode, answer keys baked in, response editing allowed (retry-after-review, same flow as the Day 18 Form). 15 auto-graded questions + 2 write-your-own-code questions (manual grade) on one page. ~20 minutes of a 48-minute period.

**Form built 10/5:** [Google Form](https://docs.google.com/forms/d/1V8G8a-Dyza2rDImGiijTJcV1YfJh8qceJfHciLknDEA/edit) — 15 auto-graded radio questions with answer keys baked in, answer orders varied (correct answers distributed across positions), the 2 writing questions are on the Form as required text items but students answer them on blank paper and turn the paper in (the Form description says so). Nick handles form settings (quiz mode is already on). The original placeholder Untitled Question was deleted. Trace code went into the question description field on single lines (the Forms API rejects newlines).

Questions are fresh variants of the Day 18 Form and Kahoot problems: same concepts and scenarios, new values, so the quiz measures the skill, not memory of yesterday's answer. Code goes in the question text (Google Form code blocks). Every auto-graded question is 1 point.

**Standards:** CSTA 3A-AP-15, 3A-AP-17 · ACT WME 402, CLR 401, S 404

**Mastery:** 80%+ (12/15 auto-graded) with both write questions attempted = proficient. Below 80% = amnesty-day review + retry, same as the Day 18 flow.

---

## Section 1: Reading if/else

**1. What does an if statement do?**

- A) Runs the code inside its braces only when the condition is true ✅
- B) Runs the code inside its braces no matter what
- C) Repeats the code until the condition is false
- D) Ends the program if the condition is true

**2. What's the minimum a conditional chain needs?**

- A) Just an if ✅
- B) An if and an else
- C) An if, an else if, and an else
- D) Two else ifs

**3. When does the else's code run?**

- A) When none of the conditions above it were true ✅
- B) When every condition above it was true
- C) At the end of the program, always
- D) Never, else is just a label

**4. How many else statements can one chain have?**

- A) 0 or 1 ✅
- B) Exactly 1
- C) As many as you want
- D) 2

**5. How many else if statements can one chain have?**

- A) As many as you want ✅
- B) Exactly one
- C) At most two
- D) None

## Section 2: Comparison operators

**6. `health >= 50` is true when...**

- A) health is 50 or higher ✅
- B) health is exactly 50
- C) health is higher than 50 only
- D) health is lower than 50

**7. What's wrong here: `if (score = 100)`**

- A) = assigns instead of comparing, it should be == ✅
- B) Nothing, = and == are interchangeable
- C) The parentheses should be braces
- D) score should be capitalized

**8. Which operator means "not equal to"?**

- A) !=
- B) !==
- C) =!
- D) <>

## Section 3: Logical operators

**9. `&&` needs how many sides true?**

- A) Both ✅
- B) At least one
- C) Exactly one
- D) Neither

**10. `||` needs how many sides true?**

- A) Both
- B) At least one ✅
- C) Exactly one, both true breaks it
- D) Neither

**11. A treasure door needs a key AND a torch. The player has the key but no torch. What does `hasKey && hasTorch` give?**

- A) false ✅
- B) true
- C) Won't compile
- D) Depends on the door

**12. `!isAlive` is true when...**

- A) isAlive is false ✅
- B) isAlive is true
- C) isAlive is 1
- D) Never, ! is just decoration

## Section 4: Trace the code

**13. What does this print?**

```cpp
int health = 45;
if (health > 50)
{
    cout << "Healthy";
}
else if (health > 0)
{
    cout << "Hurt";
}
else
{
    cout << "Dead";
}
```

- A) Healthy
- B) Hurt ✅
- C) Dead
- D) Hurt then Dead

**14. What does this print?**

```cpp
int score = 95;
if (score >= 50)
{
    cout << "Pass";
}
else if (score >= 90)
{
    cout << "A+";
}
```

- A) Pass ✅
- B) A+
- C) Pass A+
- D) Nothing

**15. What does this print?**

```cpp
int level = 3;
int score = 150;
if (score > 100 && level == 3)
{
    cout << "Boss mode!";
}
else
{
    cout << "Keep playing";
}
```

- A) Boss mode! ✅
- B) Keep playing
- C) Boss mode! Keep playing
- D) Nothing

## Section 5: Write it (manual grade, 2 points each)

**16.** Write an if/else statement that prints "Ouch!" when `health` is less than 20, and "Still standing" otherwise.

**17.** Write an if statement that prints "Access granted" when `hasKey` is true OR `smashedLock` is true.

---

## Answer key (teacher only - do not put in the student Form)

**Auto-graded:** 1-A, 2-A, 3-A, 4-A, 5-A, 6-A, 7-A, 8-A, 9-A, 10-B, 11-A, 12-A, 13-B, 14-A, 15-A. (Note: correct answers cluster on A in Sections 1-3 because Kahoot shuffle handled ordering; when entering into the Google Form, vary the option order — Forms shuffles per-question if you turn it on, or reorder by hand while entering.)

**16.** `if (health < 20) { cout << "Ouch!" << endl; } else { cout << "Still standing" << endl; }` — full credit: both branches, correct operator, valid syntax. Half credit: right logic, syntax slips (missing brace/semicolon).

**17.** `if (hasKey || smashedLock) { cout << "Access granted" << endl; }` — full credit: `||` not `&&`, both booleans inside the parentheses. Half credit: `&&` used (right idea, wrong operator is the exact misconception this question exists to catch — mark it, it's re-teach evidence, not just a wrong answer).

**Why these questions:** Q1-5 re-cover the Day 18 Form's Section 1-3 concepts (chain structure) with new wording. Q6-8 are the comparison-operator block, including the = vs == trap (Kahoot Q13/Q15 flagged it as the most valuable pair). Q9-12 are Friday's logical operators — treasure door and `!isAlive` are Friday's scenarios with the boss door swapped for variety. Q13-15 are traces: Q13 = Day 18 Q15 with a new health value, Q14 = the wide-net-first trap (Day 18 Q24, Kahoot Q47), Q15 = Friday's andTrap with values that now qualify. Q16-17 mirror the Day 17 and Day 21 exit tickets.
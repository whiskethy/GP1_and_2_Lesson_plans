---
course: GP2
quarter: Q1
day: 23
type: worksheet
status: active
updated: 2026-10-23
---

# GP2 - Unit 1 Checkpoint Quiz (Conditionals)

The Day 23 checkpoint quiz is the Unit 1 Checkpoint. Scope: the Day 17-21 conditionals arc (if/else, else if chains, comparison operators, logical operators). Loops are assessed in-project later.

Google Form in quiz mode with response editing allowed. 15 auto-graded questions and 2 write-your-own-code questions (manual grade), about 20 minutes of a 48-minute period. Students answer the two write questions on paper. Every auto-graded question is 1 point.

**Standards:** CSTA 3A-AP-15, 3A-AP-17 · ACT WME 402, CLR 401, S 404

---

## Section 1: Reading if/else

**1. What does an if statement do?**

- A) Runs the code inside its braces only when the condition is true
- B) Runs the code inside its braces no matter what
- C) Repeats the code until the condition is false
- D) Ends the program if the condition is true

**2. What's the minimum a conditional chain needs?**

- A) Just an if
- B) An if and an else
- C) An if, an else if, and an else
- D) Two else ifs

**3. When does the else's code run?**

- A) When none of the conditions above it were true
- B) When every condition above it was true
- C) At the end of the program, always
- D) Never, else is just a label

**4. How many else statements can one chain have?**

- A) 0 or 1
- B) Exactly 1
- C) As many as you want
- D) 2

**5. How many else if statements can one chain have?**

- A) As many as you want
- B) Exactly one
- C) At most two
- D) None

## Section 2: Comparison operators

**6. `health >= 50` is true when...**

- A) health is 50 or higher
- B) health is exactly 50
- C) health is higher than 50 only
- D) health is lower than 50

**7. What's wrong here: `if (score = 100)`**

- A) = assigns instead of comparing, it should be ==
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

- A) Both
- B) At least one
- C) Exactly one
- D) Neither

**10. `||` needs how many sides true?**

- A) Both
- B) At least one
- C) Exactly one, both true breaks it
- D) Neither

**11. A treasure door needs a key AND a torch. The player has the key but no torch. What does `hasKey && hasTorch` give?**

- A) false
- B) true
- C) Won't compile
- D) Depends on the door

**12. `!isAlive` is true when...**

- A) isAlive is false
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
- B) Hurt
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

- A) Pass
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

- A) Boss mode!
- B) Keep playing
- C) Boss mode! Keep playing
- D) Nothing

## Section 5: Write it (manual grade, 2 points each)

**16.** Write an if/else statement that prints "Ouch!" when `health` is less than 20, and "Still standing" otherwise.

**17.** Write an if statement that prints "Access granted" when `hasKey` is true OR `smashedLock` is true.

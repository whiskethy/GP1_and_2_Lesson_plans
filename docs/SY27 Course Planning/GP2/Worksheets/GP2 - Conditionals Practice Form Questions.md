---
course: GP2
quarter: Q1
type: worksheet
status: active
updated: 2026-09-23
---

# Conditionals Practice Form — Question Set

Source of truth for the Day 18 (Fri 9/25) auto-graded Google Form. 26 graded questions + 1 ungraded repo-link question. Every question is 1 point, auto-graded. Form settings: quiz mode, response editing allowed (retry-after-review flow). The Form is standalone by design — it fills the 30-minute block on its own with zero dependency on the code assignment.

Sections escalate: reading if/else → comparison operators → chains → traces → spot the bug → tricky edges.

## Section 1: Reading if/else

**1. What does an if statement do?**
- A) Runs the code inside its braces only when the condition is true ✅
- B) Runs the code inside its braces no matter what
- C) Repeats the code inside its braces until the condition is false
- D) Ends the program if the condition is true

**2. What's the minimum a conditional chain needs?**
- A) Just an if ✅
- B) An if and an else
- C) An if, an else if, and an else
- D) At least two else ifs

**3. When does the else's code run?**
- A) When none of the conditions above it were true ✅
- B) When every condition above it was true
- C) Only when the if had a syntax error
- D) Never, else is just a label

**4. How many else statements can one conditional chain have?**
- A) 0 or 1 ✅
- B) Exactly 1
- C) As many as you want
- D) 2

## Section 2: Comparison operators

**5. What does != mean?**
- A) Not equal to ✅
- B) Very equal to
- C) Assign the value
- D) Divide and compare

**6. `score >= 90` is true when...**
- A) score is 90 or higher ✅
- B) score is exactly 90
- C) score is higher than 90 only
- D) score is lower than 90

**7. What's wrong here: `if (score = 100)`**
- A) = assigns instead of comparing, it should be == ✅
- B) Nothing, = and == are interchangeable
- C) The parentheses should be braces
- D) score should be capitalized

## Section 3: else if and chains

**8. When does an else if's code run?**
- A) When the if above it was false AND its own condition is true ✅
- B) Whenever its own condition is true
- C) Every time the if runs
- D) At the end of the program

**9. How many else if statements can one conditional chain have?**
- A) As many as you want ✅
- B) Exactly one
- C) At most two
- D) None, else if isn't real C++

**10. The if's condition is true. What happens to the rest of the chain?**
- A) The whole rest of the chain is skipped ✅
- B) Every else if still gets checked
- C) The else still runs
- D) The program stops

**11. What happens if a conditional chain starts with else if?**
```cpp
else if (score > 50)
{
    cout << "Pass";
}
```
- A) It won't compile — else if has to come after an if ✅
- B) It compiles and prints Pass when score is over 50
- C) It runs but never prints anything
- D) The program treats it as a regular if

**12. What happens if a conditional starts with a lone else?**
```cpp
else
{
    cout << "Done";
}
```
- A) It won't compile — else has to come after an if or an else if ✅
- B) It runs every time
- C) It never runs
- D) The program treats it as a comment

**13. What does this print?**
```cpp
int score = 95;
if (score >= 90)
{
    cout << "Great";
}
if (score >= 50)
{
    cout << "Pass";
}
```
- A) Great then Pass ✅
- B) Great
- C) Pass
- D) Nothing

## Section 4: Trace the code

**14. What does this print?**
```cpp
int score = 150;
if (score >= 100)
{
    cout << "Perfect!";
}
else
{
    cout << "Keep going!";
}
```
- A) Perfect! ✅
- B) Keep going!
- C) Perfect!Keep going!
- D) Nothing

**15. What does this print?**
```cpp
int health = 20;
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

**16. What does this print?**
```cpp
int ammo = 0;
if (ammo > 0)
{
    cout << "Fire!";
}
cout << "Reload";
```
- A) Fire! then Reload
- B) Reload ✅
- C) Fire!
- D) Nothing

**17. What does this print?**
```cpp
int level = 7;
if (level >= 10)
{
    cout << "Pro";
}
else if (level >= 5)
{
    cout << "Skilled";
}
else
{
    cout << "Newbie";
}
```
- A) Pro
- B) Skilled ✅
- C) Newbie
- D) Skilled then Newbie

**18. What does this print?**
```cpp
int x = -5;
if (x > 0)
{
    cout << "Right";
}
else
{
    cout << "Left";
}
```
- A) Left ✅
- B) Right
- C) Nothing, it won't compile
- D) Left then Right

## Section 5: Spot the bug

**19. What's wrong here?**
```cpp
if (health < 20);
{
    cout << "Low health!";
}
```
- A) The semicolon after the if header makes the body empty ✅
- B) It should be = instead of <
- C) cout goes inside the parentheses
- D) Nothing is wrong

**20. How many lines does this print when score is 50?**
```cpp
int score = 50;
if (score > 100)
{
    cout << "New high score";
    cout << "Nice job";
}
```
- A) 0 ✅
- B) 1, only "Nice job"
- C) 2
- D) 1, only "New high score"

**21. What does this print?**
```cpp
bool isAlive = true;
if (isAlive == false)
{
    cout << "Game Over";
}
else
{
    cout << "Playing";
}
```
- A) Game Over
- B) Playing ✅
- C) Game Over then Playing
- D) Nothing

## Section 6: Tricky edge cases

**22. Your program should print "You win" at 100+ points and "So close" at 99 or below. Which chain does it right?**
- A) `if (score >= 100) { "You win" } else { "So close" }` ✅
- B) `if (score > 100) { "You win" } else { "So close" }`
- C) `if (score = 100) { "You win" } else { "So close" }`
- D) `if (score >= 100) { "So close" } else { "You win" }`

**23. What does this print?**
```cpp
int health = 30;
if (health > 0)
{
    if (health > 50)
    {
        cout << "Strong";
    }
    else
    {
        cout << "Weak";
    }
}
else
{
    cout << "Dead";
}
```
- A) Weak ✅
- B) Strong
- C) Dead
- D) Weak then Dead

**24. What does this print?**
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
- C) Pass then A+
- D) Nothing

**25. What does this print?**
```cpp
int ammo = 0;
if (ammo = 5)
{
    cout << "Fire!";
}
else
{
    cout << "Empty";
}
```
- A) Fire! ✅ (= puts 5 in ammo, 5 is nonzero, so the condition is true)
- B) Empty
- C) Fire! then Empty
- D) Nothing, it won't compile

**26. What does this print?**
```cpp
int coins = 100;
if (coins >= 100)
{
    cout << "Rich";
}
else if (coins >= 50)
{
    cout << "Okay";
}
else
{
    cout << "Broke";
}
cout << " - done";
```
- A) Rich - done ✅
- B) Okay - done
- C) Rich
- D) Rich Okay - done

## Final question (not graded)

**27. Paste the link to your repo showing today's commits.** (short answer)
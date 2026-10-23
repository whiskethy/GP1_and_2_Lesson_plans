---
course: GP2
quarter: Q1
day: 22
date: Mon 10/5
day_type: A
chunk: '13'
type: review (Kahoot)
class_minutes: 48
unit: 1
status: active
updated: 2026-10-05
---

# GP2 - Unit 1 Wrap Kahoot

Source of truth for Day 22 (Mon 10/5). Unit 1 wrap-up Kahoot: logical problems and conditionals focus, with variables, functions, and git mixed in. Nick types the keepers straight into Kahoot, so questions are written tight, code blocks short (Kahoot character limits are real), answers unambiguous.

Coverage: conditionals get the heaviest load (it's the wrap-up topic and tomorrow's quiz territory), then logical operators, then variables/types, functions, syntax, and a light git section. Section 1 is fastest (warm-up pace), sections get harder as they go. TF = true/false, MC = multiple choice. Correct answer marked ✅. Code questions use the class's variable names and game scenarios (score, health, ammo, keys, doors).

Build note: Kahoot has no code formatting. Short code goes plain-text in the question. Anything longer gets the Codédex treatment: paste the block into codedex.io/cpp, screenshot the formatted code, drop the image into the Kahoot question. The trace questions in Section 6 are written as full display-ready blocks for exactly that.

Live Kahoot: [play link](https://play.kahoot.it/v2/?quizId=098e46a3-5d4f-4ad9-9ab3-819e1d99ceda&hostId=be8ade3a-12a7-4459-889d-afa958fccfde) (hosted 10/5)

---

## Section 1: Warm-up — variables and types

**1. (TF)** `int` can store decimal numbers like 37.5.
- True
- False ✅ (int is whole numbers only. 37.5 needs float or double)

**2. (MC)** Which type fits a player's name?
- A) int
- B) bool
- C) string ✅
- D) char

**3. (MC)** Which type is ONLY true or false?
- A) bool ✅
- B) int
- C) float
- D) string

**4. (TF)** A `char` can hold a whole word like "cat".
- True
- False ✅ (char is ONE character. A word needs string)

**5. (MC)** Which line correctly declares score as 100?
- A) `score = 100;`
- B) `int score = 100;` ✅
- C) `int 100 = score;`
- D) `score int = 100;`

**6. (TF)** Variable names can have spaces.
- True
- False ✅ (myNumber or my_number, not "my number")

**7. (MC)** `int x = 5; x = 12;` What is x now?
- A) 5
- B) 12 ✅
- C) 17
- D) Error

**8. (TF)** A variable with no value assigned holds 0.
- True
- False ✅ (uninitialized = garbage value, not 0. This bit people on the Day 12 check)

**9. (MC)** A player's health is 87.5. Which type?
- A) int
- B) float ✅
- C) bool
- D) char

**10. (TF)** C++ is case-sensitive: `score` and `Score` are the same variable.
- True
- False ✅ (different variables. This exact bug was Q11 on the Day 12 check)

## Section 2: Operators

**13. (MC)** `score >= 90` is true when...
- A) score is 90 or higher ✅
- B) score is exactly 90
- C) score is above 90 only
- D) score is below 90

**14. (TF)** `!=` means "not equal to".
- True ✅
- False

**15. (MC)** What's wrong here: `if (score = 100)`
- A) Nothing
- B) = assigns instead of compares, it should be == ✅
- C) Parentheses should be braces
- D) score should be a float

**16. (TF)** `10 / 3` in int math gives 3.33.
- True
- False ✅ (int division truncates: 3. 3.33 needs float)

## Section 3: Functions

**17. (MC)** In `int add(int a, int b)`, what does the first `int` mean?
- A) The function adds integers
- B) The return type, what the function hands back ✅
- C) The name of the function
- D) Nothing, decoration

**18. (TF)** `void` means a function returns nothing.
- True ✅
- False

**19. (MC)** In `int add(int a, int b)`, what are `a` and `b`?
- A) The function's parameters ✅
- B) Two global variables
- C) The return values
- D) Comments

**20. (TF)** Calling a function runs the code inside its braces.
- True ✅
- False

**21. (MC)** Which correctly calls a function named `double_score` with the value 50?
- A) `double_score(50);` ✅
- B) `double_score{50};`
- C) `call double_score(50);`
- D) `double_score = 50;`

## Section 4: Conditionals — the main event

**22. (TF)** An if statement runs its code only when its condition is true.
- True ✅
- False

**23. (MC)** A conditional chain's ONLY required part is...
- A) if ✅
- B) else if
- C) else
- D) All three

**24. (TF)** One chain can have two else statements.
- True
- False ✅ (0 or 1 else, always last)

**25. (MC)** How many else ifs can one chain have?
- A) Exactly one
- B) As many as you want ✅
- C) At most two
- D) None

**26. (TF)** The else block runs when no condition above it was true.
- True ✅
- False

**27. (MC)** When the if is true, what happens to the rest of the chain?
- A) Skipped entirely ✅
- B) Every else if still gets checked
- C) The else still runs
- D) The program stops

**28. (TF)** A conditional chain can start with `else if` (no if before it).
- True
- False ✅ (won't compile. else if needs an if above it)

**29. (MC)** What does this print?
`int score = 95; if (score >= 90) cout << "Great"; if (score >= 50) cout << "Pass";`
- A) Great then Pass ✅ (two separate ifs, both checked)
- B) Great
- C) Pass
- D) Nothing

**30. (MC)** What does this print?
`int health = 20; if (health > 50) cout << "Healthy"; else if (health > 0) cout << "Hurt"; else cout << "Dead";`
- A) Healthy
- B) Hurt ✅
- C) Dead
- D) Hurt then Dead

**31. (MC)** What does this print?
`int level = 7; if (level >= 10) cout << "Pro"; else if (level >= 5) cout << "Skilled"; else cout << "Newbie";`
- A) Pro
- B) Skilled ✅
- C) Newbie
- D) Skilled then Newbie

**32. (TF)** `if (score >= 50)` followed by `else if (score >= 90)` correctly separates an A from a Pass.
- True
- False ✅ (score 95 hits the >= 50 first and stops. The wide net has to come second)

**33. (MC)** What's wrong here?
`if (health < 20);` then `{ cout << "Low health!"; }`
- A) The semicolon after the if makes the body empty ✅
- B) Should be = instead of <
- C) cout goes inside the parentheses
- D) Nothing

**34. (TF)** If ammo is 0, this prints "Fire!": `if (ammo > 0) cout << "Fire!";` then `cout << "Reload";`
- True
- False ✅ (prints only Reload. The second cout is outside the if)

**35. (MC)** What does this print?
`int coins = 100; if (coins >= 100) cout << "Rich"; else if (coins >= 50) cout << "Okay"; else cout << "Broke"; cout << " - done";`
- A) Rich - done ✅
- B) Okay - done
- C) Rich
- D) Rich Okay - done

## Section 5: Logical operators — fresh from Friday

**36. (MC)** `&&` needs how many sides true?
- A) Both ✅
- B) One
- C) Neither
- D) Exactly half

**37. (MC)** `||` needs how many sides true?
- A) Both
- B) At least one ✅
- C) Exactly one, both true breaks it
- D) Neither

**38. (TF)** A boss door needs a key AND a lever pulled. If the player has the key but not the lever, `hasKey && leverPulled` is true.
- True
- False ✅ (&& needs BOTH. One false side kills it)

**39. (MC)** Door opens with key OR smashed lock. `hasKey` false, `smashedLock` true. What does `hasKey || smashedLock` give?
- A) True ✅
- B) False
- C) Won't compile
- D) Depends on the door

**40. (TF)** `!isAlive` is true when the player is dead (isAlive is false).
- True ✅
- False

**41. (MC)** "Boss mode!" needs score over 100 AND level 3. Which condition is right?
- A) `if (score > 100 && level == 3)` ✅
- B) `if (score > 100 || level == 3)`
- C) `if (score > 100 = level == 3)`
- D) `if (score > 100; level == 3)`

**42. (MC)** Score 150, level 1. What does `if (score > 100 || level == 3)` print, and is it what the spec wanted?
- A) "Boss mode!" but no, the spec needed && ✅
- B) Nothing, and yes that's right
- C) "Boss mode!" and yes that's right
- D) It won't compile

## Section 6: What will it print? (Codédex image questions)

These are the long-trace questions. Each one is a display-ready block: paste into codedex.io/cpp, screenshot the formatted code, drop the image in the Kahoot question. The question text itself is just "What does this print?" 20-30 second timers.

**43. (MC)** What will it print?

```cpp
int score = 50;
score = score + 25;
cout << score << endl;
```

- A) 50
- B) 75 ✅
- C) 5025
- D) Error

**44. (MC)** What will it print?

```cpp
int ammo = 12;
while (ammo > 9)
{
    cout << ammo << " ";
    ammo--;
}
```

- A) 12 11 10 ✅ (loop stops when ammo hits 9)
- B) 12 11 10 9
- C) 12
- D) Infinite loop

(Build note: this is a preview question. Loops start next week. If you don't want to tease loops, swap it for the alternate at the bottom.)

**45. (MC)** What will it print?

```cpp
int health = 100;
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

- A) Strong ✅ (outer if passes, inner if passes)
- B) Weak
- C) Dead
- D) Strong then Dead

**46. (MC)** What will it print?

```cpp
bool hasKey = true;
int health = 20;
if (hasKey && health > 15)
{
    cout << "Treasure!";
}
else
{
    cout << "Keep moving.";
}
```

- A) Treasure! ✅
- B) Keep moving.
- C) Treasure! Keep moving.
- D) Nothing

**47. (MC)** What will it print?

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

**48. (MC)** What will it print?

```cpp
int a = 20;
int b = 6;
cout << a / b << " " << a % b << endl;
```

- A) 3 2 ✅ (20 / 6 is 3 with remainder 2)
- B) 3.33 2
- C) 3 14
- D) 2 3

**49. (MC)** What will it print?

```cpp
int level = 4;
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
- B) Keep playing ✅ (score qualifies, level doesn't. && needs both)
- C) Both
- D) Nothing

**50. (MC)** What will it print?

```cpp
int coins = 0;
if (coins > 0 || hasKey)
{
    cout << "Buy";
}
else
{
    cout << "Broke";
}
```

- A) Buy
- B) Broke
- C) Won't compile ✅ (hasKey was never declared. Sneaky, on purpose: reading code means checking declarations too)
- D) Buy Broke

**51. (MC)** What will it print?

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
- C) Nothing, won't compile
- D) Left Right

**52. (MC)** What will it print?

```cpp
bool isAlive = true;
if (!isAlive)
{
    cout << "Game over";
}
else
{
    cout << "Playing";
}
```

- A) Game over
- B) Playing ✅ (! flips true to false, the if fails, else runs)
- C) Both
- D) Nothing

**53. (TF)** This prints "Low health!" when health is 10:

```cpp
if (health < 20);
{
    cout << "Low health!";
}
```

- True
- False ✅ (trick: it ALWAYS prints. The semicolon ends the if, the braces are just a block that runs no matter what)

**54. (MC)** What will it print?

```cpp
int score = 100;
if (score >= 100)
{
    cout << "Perfect!";
}
if (score > 0)
{
    cout << " Playing";
}
```

- A) Perfect!
- B) Perfect! Playing ✅ (two separate ifs, both true)
- C) Playing
- D) Nothing

**Alternate for Q44 if you skip the loops tease:**

```cpp
int ammo = 12;
if (ammo >= 10)
{
    cout << "Full clip";
}
else if (ammo > 0)
{
    cout << "Watch your ammo";
}
else
{
    cout << "Empty";
}
```

- A) Full clip ✅
- B) Watch your ammo
- C) Empty
- D) Full clip Watch your ammo

## Section 7: Git (2 keepers)

**55. (MC)** What does git push do?
- A) Uploads your commits to GitHub ✅
- B) Saves changes to your local repo
- C) Downloads the repo
- D) Deletes the local copy

**56. (TF)** Committing alone is enough, your work shows up on GitHub without pushing.
- True
- False ✅ (commit is local. Nothing leaves your machine until push)

(Cut from the first draft: the add/commit/push ordering question, weakest of the three git questions.)

---

## Build notes

- Need 30-40 for a 48-minute period. 56 on offer here, cut down to taste. Git is already thinned to 2. Cut order for getting to 40: the loops tease (Q44) first, then TF items from Sections 1-4, then Section 2 down to 3 questions.
- Section 6 questions are image questions: paste the block into codedex.io/cpp, screenshot the formatted code, drop the image into the Kahoot question. Question text is just "What will it print?"
- All Section 6 questions need 20-30 second timers. Everything else 10-15 seconds.
- Q13 and Q15 are the = vs == questions, the single most valuable pair in the set, it's on tomorrow's quiz.
- Q53 is the semicolon-after-if trap with a twist: unlike Q33 (spot-the-bug framing), this one asks about output, and the answer is the sneaky part: it prints every time. Keep it, it's the hardest question in the deck.
- Q50 is a declaration check disguised as a trace. Students who trace without reading declarations pick Broke. That's the point.
- Q44 previews loops before they've been taught. Decide if you want the tease or swap in the alternate. If the class bombed Friday's self-check, take the alternate.
- Q8 and Q10 are re-used from the Day 12 Variables & Code Reading Check. Q29, 30, 31, 33, 34, 35, 47 are lifted from the Day 18 Conditionals Practice Form. Q38-40, 46, 49, 52 re-use Friday's boss door, smashed lock, treasureRoom, andTrap, and `!isAlive` scenarios. Students have seen these problems, Kahoot speed is the new layer.
- Answer key: every ✅. TF answers are True when marked ✅ on the True option, False when the False option is marked ✅.

## Connections

← [[GP2 Day 21 - Logical Operators & Check-In]] | [[GP2 Q1 Calendar]] | [[GP2 Q1 - Days 22-32 TBD]] →
---
course: GP2
quarter: Q1
day: 29
date: Mon 10/19
day_type: A
chunk: '26'
type: new idea (EdPuzzle) + practice
class_minutes: 48
unit: 3
status: completed
updated: 2026-10-19
sub: false
riddle: What kind of coat is best put on wet?
joke: Did you hear about the cat that ate a lemon?
---

# GP2 Day 29 - Roll-A-Ball Video 05 (Loops)

Day 29 (A day, 48 min): Video 05 - Loops on EdPuzzle with for/while practice. Friday's block carried the V05 concept preview (slide lecture only: why games repeat, copy-paste is not a plan, "N times" vs "until"); today is the video's live code plus the practice.

## Learning Target

Distinguish counted repetition (for) from condition-driven repetition (while), write a for loop printing a counted sequence with debug statements, write a while loop that stops on a condition, and predict a loop's iteration count before running it.

**Standards:** CSTA 3A-AP-15 (justify the selection of specific control structures: which loop for which sentence) · ISBE 9-10.AP.15 (same verb, ISBE wording) · ACT S 404 (describe events as combinations: and/or/not conditions) · ACT WME 402

## Shared Block

| Field | Value |
|---|---|
| Learning target | Say which loop fits which sentence ("N times" vs "until"), write both, and predict the iteration count before running. |
| New concept | Loops: for and while, the two ways C++ repeats code. One genuinely new idea; syntax rides on if-statement structure they have (the check is an if wearing a loop's clothes). The concept lecture was pre-loaded Friday; today is the video's live code plus practice. |
| Content standard | CSTA 3A-AP-15 (justify control structure selection when tradeoffs involve implementation and readability) |
| ACT standard | S 404 · WME 402 |
| Unit performance task link | CP1 includes the committed loops exercise; counting pickups in Q2 (V15) and Jeopardy question iteration are both loops doing real work. Today installs the prediction ritual that the off-by-one bug family feeds on. |
| Rides on | Day 26/27's debug statements (the evidence), Friday's predict-then-read ritual from the seeded file (the same muscle), and V04's frame-loop tease (Tick runs every frame; today makes repetition on purpose). |
| Vocabulary | for loop, while loop, counter, increment (i++), condition, iteration, off-by-one, infinite loop, scope |
| Prior-knowledge gaps | Text-based programming: loop syntax is brand new, not review. Conditionals were taught (Unit 1, Chunks 12-13); loops build directly on them. Typing accuracy: three parts in one line is a new typing shape. |

**Do Now** (retrieval, not a cold open)

| # | Type | Question |
|---|------|----------|
| 1 | Review | Friday's video taught the read-and-fix ritual. What is the FIRST error you address in the Error List, and why that one? |
| 2 | Review | Friday's seeded file called DecreaseHealth() once per frame. Roughly how many times per second does Tick call it, and what did we see on screen? |
| 3 | Preview | Friday's slides asked: the game needs to print "Pickup collected" once for each of 10 pickups - write ten prints, or tell the computer "do this 10 times"? Today names those two shapes. What are they called? |

**Worked example**

The video IS the worked example: the slide lecture already seen as Friday's preview (compressed today, not re-watched in full), then live code: the for loop in BeginPlay printing 0-4 in yellow, the off-by-one show (`<` vs `<=`, six lines instead of five), the while loop health-drain with the genuinely surprising count (prints happen AFTER the change), and the infinite loop recovery shot.

**Guided practice + 80% checkpoint**

Students write both loops in their own TempActor as the video does, predicting each count out loud before running. The ~80% checkpoint is at the off-by-one beat: 9 of 11 students can say why `i < 5` runs five times and show a corrected run after the `<=` experiment. Triage priority: loop written but never compiled, counter variable name typo (case sensitivity, Friday's families), while loop missing its change line (the trust point), still finishing Friday's seeded file.

**Independent work**

Finish both loops, then the challenge, as displayed on screen in the video: a loop that counts down from 10 then prints "Go", OR a loop that prints "Picked up X collectibles" up to 5 (X being the number, 1 through 5). Predict BEFORE running, screenshot the output, submit on Classroom, commit and push (close Unreal, full compile first). Fast finishers carry the exercise further: make the countdown print only even numbers, or count down from 20 by 2.

**Exit ticket**

1. You need a loop that runs exactly seven times. Which loop do you pick, and how would you finish its line: `for (int i = 1; i ___ 7; i++)`?
2. A while loop's `Health -= 1;` line gets commented out. What happens when you run, and what one question do you ask to find the bug?
3. How many times does `for (int i = 0; i < 3; i++)` print: three, four, or five? Say what i equals on each pass.
4. Friday's seeded file decremented health once per frame without a loop. In one sentence: what did today's video add that Tick already did for free, and why would a programmer still write loops on purpose?
5. Predict-then-run: your while loop prints Health: 2, 1, 0 and stops. Your partner predicted four prints. In one sentence, explain to them why the third print never happened.

## Agenda

1. Do Now review (5 min)
2. Video 05 on EdPuzzle: both loops written in TempActor, predicted out loud before each run (rest of period)
3. Loops challenge: predict, screenshot the output, submit, commit and push (parallel)
4. Exit ticket (3 min)

*Unnumbered, parallel: catch-up on outstanding submissions (Friday's error-file screenshot is still open for anyone missing it). Commit and push at the bell - standing habit.*

## Differentiation & Accommodations

- **Engagement:** the first loop is the first time their code does something many times on purpose. The infinite loop recovery shot is the memorable beat; the countdown reads like a game countdown, which it will become in their own projects.
- **Representation:** the slide lecture (pre-seeded Friday) gives the split without syntax (N times vs until); the live code gives it twice more (for AND while); the on-screen result (yellow stack under the cyan Hello World) shows one-shot vs repeated visually; loop code is also in the description.
- **Action & Expression:** predict-then-run is verbal and low stakes; the challenge offers two shapes (countdown or pickup prints) so students pick the sentence they'd actually say; the extension for early finishers rewards modifying a working loop, not a new topic.
- **Accommodations:** students still behind Friday work the seeded file during the buffer block with a neighbor's working file as reference; the prediction ritual is written (say, then show) so students who process slowly are not penalized for speed.
- **Student voice:** the off-by-one experiment (change to `<=`, count, change back) is student-predicted before Nick's video prediction lands; pairs compare counts on the health-drain surprise.

## Materials

| Item | Link |
|------|------|
| Video 05 on EdPuzzle | https://youtu.be/5u-mal8ndlI / https://edpuzzle.com/media/6ad6403a321a1fd4bef3d45e |
| Video 06 on EdPuzzle (roll-ahead) | https://youtu.be/gIZlb88oG_4 / https://edpuzzle.com/media/6ad8e46c5160cdff8d72b378 |
| Starter project repo | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |

## Connections

← [[GP2 Day 28 - Roll-A-Ball Video 04 (Common Errors)]] | [[GP2 Q1 Calendar]] | [[GP2 Day 31 - Roll-A-Ball Video 06 (Constructor and Components)]] →
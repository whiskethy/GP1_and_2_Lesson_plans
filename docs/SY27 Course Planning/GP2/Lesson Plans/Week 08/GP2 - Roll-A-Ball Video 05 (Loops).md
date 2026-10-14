---
course: GP2
quarter: Q1
day: 28
date: Fri 10/16
day_type: C
chunk: '26'
type: new idea (EdPuzzle) + practice
class_minutes: 72
unit: 3
status: active
updated: 2026-10-13
sub: false
riddle: What has many needles, but doesn't sew?
joke: What is an astronaut's favorite key on a keyboard?
---

# GP2 - Roll-A-Ball Video 05 (Loops)

Day 28 (C day, 72 min). Main content is Video 05: Loops, students' first loop. The S&S's standalone "loops practice + scope" chunk (item 6, Day 29) folds into this C day and next Monday: the 72-minute block carries the video plus the in-project loops exercise start, and the scope idea rides the practice. The long block doubles as the buffer day: Day 27 stragglers finish the seeded file, faster students push deep into the loops exercise.

> **Prep dependency (backward-derived).** This day runs on Video 05 recorded, edited, published, and posted to EdPuzzle before Thursday night. Video 06 (Constructor and Components) should be published by Sunday night for Monday's fast finishers (sitting 2 of the recording plan; V06 is not recorded as of 10/13). The slide segment (L1-L6) is built from [[Loop Slides Content Plan]] after Nick approves; the storyboard is already in the script note.

## Learning Target

Distinguish counted repetition (for) from condition-driven repetition (while), write a for loop printing a counted sequence with debug statements, write a while loop that stops on a condition, and predict a loop's iteration count before running it.

**Standards:** CSTA 3A-AP-15 (justify the selection of specific control structures: which loop for which sentence) · ISBE 9-10.AP.15 (same verb, ISBE wording) · ACT S 404 (describe events as combinations: and/or/not conditions) · ACT WME 402

*(Standards correction logged: V05's day previously had no ISBE line; the S&S cites 3A-AP-15 as the anchor and 9-10.AP.15 is its ISBE mirror. An earlier draft of this file mis-cited 9-10.AP.20, license evaluation, which is not a loops standard and is not used.)*

## Shared Block

| Field | Value |
|---|---|
| Learning target | Say which loop fits which sentence ("N times" vs "until"), write both, and predict the iteration count before running. |
| New concept | Loops: for and while, the two ways C++ repeats code. One genuinely new idea; syntax rides on if-statement structure they have (the check is an if wearing a loop's clothes). |
| Content standard | CSTA 3A-AP-15 (justify control structure selection when tradeoffs involve implementation and readability) |
| ACT standard | S 404 · WME 402 |
| Unit performance task link | CP1 includes the committed loops exercise; counting pickups in Q2 (V15) and Jeopardy question iteration are both loops doing real work. Today installs the prediction ritual that the off-by-one bug family feeds on. |
| Rides on | Day 26's debug statements (the evidence), Day 27's predict-then-read ritual (the same muscle), and V04's frame-loop tease (Tick runs every frame; today makes repetition on purpose). |
| Vocabulary | for loop, while loop, counter, increment (i++), condition, iteration, off-by-one, infinite loop, scope |
| Prior-knowledge gaps | Text-based programming: loop syntax is brand new, not review. Conditionals were taught (Unit 1, Chunks 12-13); loops build directly on them. Typing accuracy: three parts in one line is a new typing shape. |

**Do Now** (retrieval, not a cold open)

| # | Type | Question |
|---|------|----------|
| 1 | Review | Wednesday's video taught the read-and-fix ritual. What is the FIRST error you address in the Error List, and why that one? |
| 2 | Review | Wednesday's seeded file called DecreaseHealth() once per frame. Roughly how many times per second does Tick call it, and what did we see on screen? |
| 3 | Preview | The game needs to print "Pickup collected" once for each of 10 pickups. Would you rather write ten separate print statements, or tell the computer "do this 10 times"? Say why in one sentence. |

*(Preview mirrors ET Q1: both ask which repetition shape fits which job. The Preview is answerable with prior knowledge alone; the lesson adds the for/while naming.)*

**Worked example**

The video IS the worked example: slide lecture (why games repeat, copy-paste is not a plan, the two sentences), then live code: the for loop in BeginPlay printing 0-4 in yellow, the off-by-one show (`<` vs `<=`, six lines instead of five), the while loop health-drain with the genuinely surprising count (prints happen AFTER the change), and the infinite loop recovery shot. The video code and slide storyboard live in [[SY27 Q1 - Video 05 - Loops]].

**Guided practice + 80% checkpoint**

Students write both loops in their own TempActor as the video does, predicting each count out loud before running. The ~80% checkpoint is at the off-by-one beat: 14 of 18 students can say why `i < 5` runs five times and show a corrected run after the `<=` experiment. Triage priority: loop written but never compiled, counter variable name typo (case sensitivity, Wednesday's families), while loop missing its change line (the trust point), still finishing the seeded file from Wednesday.

**Independent work**

Finish both loops, then start the challenge: a while-loop countdown (10 to 1, then GO) OR a for-loop pickup print ("Pickup X collected" five times). Predict BEFORE running, screenshot the output, submit on Classroom, commit and push (close Unreal, full compile first). Fast finishers carry the exercise further: make the countdown print only even numbers, or count down from 20 by 2. Video 06 lands Monday; do not start Tuesday's work early in the project.

**Exit ticket** (surplus: 5 offered, use 2-3)

1. You need a loop that runs exactly seven times. Which loop do you pick, and how would you finish its line: `for (int i = 1; i ___ 7; i++)`?
2. A while loop's `Health -= 1;` line gets commented out. What happens when you run, and what one question do you ask to find the bug?
3. How many times does `for (int i = 0; i < 3; i++)` print: three, four, or five? Say what i equals on each pass.
4. Wednesday's seeded file decremented health once per frame without a loop. In one sentence: what did today's video add that Tick already did for free, and why would a programmer still write loops on purpose?
5. Predict-then-run: your while loop prints Health: 2, 1, 0 and stops. Your partner predicted four prints. In one sentence, explain to them why the third print never happened.

**Exit ticket mastery criteria (for the ones used):** Q1: for loop; the blank is `<=` only if counting INCLUSIVE to 7 starting at 1 (runs 1-7), or `<` if starting at 0 (runs 0-6); the reasoning matters more than the operator choice: start, check against the target, increment. Q2: infinite loop, the screen floods/never stops; the question is "what moves the condition toward false?" (the change, not the check). Q3: three times, i equals 0, 1, 2 (never 3). Q4: Tick was already repetition riding the engine; loops are the ON-PURPOSE version a programmer controls, and not everything happens per-frame. Q5: by the third pass Health is 0, the check `Health > 0` fails BEFORE the next print, so no fourth line prints (prints happen after the change).

**~80% checkpoint:** Screen check at the off-by-one beat. 14 of 18 can say why `i < 5` is five runs and show the corrected run.

## Agenda

1. Do Now review (5 min)
2. Video 05 on EdPuzzle: slide lecture then live loops, predict out loud each run (~25 min)
3. Guided: both loops in TempActor, prediction ritual, off-by-one experiment (~15 min)
4. Independent: the challenge (countdown or pickup prints), screenshot, submit (~15 min)
5. Buffer: stragglers finish Wednesday's seeded file; early finishers extend the loops exercise (~7 min)
6. Exit ticket (5 min)
7. Commit and push (standing habit, said before the bell)

*Unnumbered, parallel: catch-up on outstanding submissions (Wednesday's error-file screenshot is still open for anyone missing it).*

## Differentiation & Accommodations

- **Engagement:** the first loop is the first time their code does something many times on purpose. The infinite loop recovery shot is the memorable beat; the countdown reads like a game countdown, which it will become in their own projects.
- **Representation:** the slide lecture gives the split without syntax (N times vs until); the live code gives it twice more (for AND while); the on-screen result (yellow stack under the cyan Hello World) shows one-shot vs repeated visually; loop code is also in the description.
- **Action & Expression:** predict-then-run is verbal and low stakes; the challenge offers two shapes (countdown or pickup prints) so students pick the sentence they'd actually say; the extension for early finishers rewards modifying a working loop, not a new topic.
- **Accommodations:** students still behind Wednesday work the seeded file during the buffer block with a neighbor's working file as reference; the prediction ritual is written (say, then show) so students who process slowly are not penalized for speed; C-day length leaves recovery room.
- **Student voice:** the off-by-one experiment (change to `<=`, count, change back) is student-predicted before Nick's video prediction lands; pairs compare counts on the health-drain surprise.

## Materials

| Item | Status | Link |
|------|--------|------|
| Video 05 recording script + slide storyboard + exact code blocks | ✅ | [[SY27 Q1 - Video 05 - Loops]] (slide segment built from [[Loop Slides Content Plan]] after Nick approves) |
| Video 05 recorded + published + EdPuzzle set | 🚧 | NOT recorded as of 10/13; prep deadline Thu 10/15 night for Friday's class |
| Video 05 slide segment (PPTX, 14 slides, built by Claude, verified vs storyboard 10/13) | 🚧 | built; in the Video Lessons folder, not on Drive: `Video Lessons/SY27/GP2 Q1/SY27 Q1 - GP2 Video 05 - Slide Segment.pptx` — Nick's visual pass before the recording |
| Starter project repo | ✅ | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |
| Daily slides | 🚧 | Do Now (2 review + 1 preview), agenda, riddle (Christmas tree), joke (space bar), exit ticket on the GP2 Daily Slides deck |
| Video 06 | 🚧 | Monday's day focus; publish by Sun 10/19 night (sitting 2) |

## Notes after teaching

## Connections

← [[GP2 - Roll-A-Ball Video 04 (Common Errors)]] | [[GP2 Q1 Calendar]] | [[GP2 - Roll-A-Ball Video 06 (Constructor and Components)]] →
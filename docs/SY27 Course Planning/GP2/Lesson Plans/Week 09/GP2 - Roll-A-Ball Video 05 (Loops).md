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
status: active
updated: 2026-10-14
sub: false
riddle: What kind of coat is best put on wet?
joke: Did you hear about the cat that ate a lemon?
---

# GP2 - Roll-A-Ball Video 05 (Loops)

Day 29 (A day, 48 min), re-planned 10/14: shifted here from Day 28 (Fri 10/16) after the sub-day Video 03 completion day pushed Day 27's content onto Friday. Day numbers did not move - only topics. Friday's block ended with the V05 concept preview (slide lecture only: why games repeat, copy-paste is not a plan, "N times" vs "until"); today carries the full Video 05 on EdPuzzle with the for/while practice. The S&S's standalone "loops practice + scope" chunk (item 6) is absorbed into today's independent challenge and Tuesday's build - the Tue 10/20 Components Practice day was the meeting that got absorbed by the Wednesday shift, and its break-and-fix move rides Day 30 with the constructor work.

> **Prep dependency (backward-derived).** This day runs on Video 05 recorded, edited, published, and posted to EdPuzzle by Sunday night 10/19 (deadline relaxed from the old Thursday: the shift bought two days). Video 06 should be published by Sunday night too for Monday's fast finishers (sitting 2 of the recording plan; V06 is not recorded as of 10/14). The slide segment (PPTX, 14 slides) is built and verified vs storyboard 10/13; Nick's visual pass is the only gate left.

## Learning Target

Distinguish counted repetition (for) from condition-driven repetition (while), write a for loop printing a counted sequence with debug statements, write a while loop that stops on a condition, and predict a loop's iteration count before running it.

**Standards:** CSTA 3A-AP-15 (justify the selection of specific control structures: which loop for which sentence) · ISBE 9-10.AP.15 (same verb, ISBE wording) · ACT S 404 (describe events as combinations: and/or/not conditions) · ACT WME 402

*(Standards correction logged 10/13: V05's day previously had no ISBE line; the S&S cites 3A-AP-15 as the anchor and 9-10.AP.15 is its ISBE mirror. An earlier draft mis-cited 9-10.AP.20, license evaluation, which is not a loops standard and is not used.)*

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

*(Q1 and Q2 reach back to Friday's V04 day. Preview mirrors ET Q1: both ask which repetition shape fits which job.)*

**Worked example**

The video IS the worked example: slide lecture already seen as Friday's preview (compressed today, not re-watched in full), then live code: the for loop in BeginPlay printing 0-4 in yellow, the off-by-one show (`<` vs `<=`, six lines instead of five), the while loop health-drain with the genuinely surprising count (prints happen AFTER the change), and the infinite loop recovery shot. The video code and slide storyboard live in [[SY27 Q1 - Video 05 - Loops]].

**Guided practice + 80% checkpoint**

Students write both loops in their own TempActor as the video does, predicting each count out loud before running. The ~80% checkpoint is at the off-by-one beat: 14 of 18 students can say why `i < 5` runs five times and show a corrected run after the `<=` experiment. Triage priority: loop written but never compiled, counter variable name typo (case sensitivity, Friday's families), while loop missing its change line (the trust point), still finishing Friday's seeded file.

**Independent work**

Finish both loops, then the challenge: a while-loop countdown (10 to 1, then GO) OR a for-loop pickup print ("Pickup X collected" five times). Predict BEFORE running, screenshot the output, submit on Classroom, commit and push (close Unreal, full compile first). Fast finishers carry the exercise further: make the countdown print only even numbers, or count down from 20 by 2. Video 06 is Tuesday's day focus; published Sunday night - do not start Tuesday's build early in the project.

*Timing note: 48 minutes is tight for video plus both loops plus the challenge. The challenge may spill its commit into Tuesday morning's buffer - the committed loops evidence is what CP1 needs, not the same-minute screenshot.*

**Exit ticket** (surplus: 5 offered, use 2-3)

1. You need a loop that runs exactly seven times. Which loop do you pick, and how would you finish its line: `for (int i = 1; i ___ 7; i++)`?
2. A while loop's `Health -= 1;` line gets commented out. What happens when you run, and what one question do you ask to find the bug?
3. How many times does `for (int i = 0; i < 3; i++)` print: three, four, or five? Say what i equals on each pass.
4. Friday's seeded file decremented health once per frame without a loop. In one sentence: what did today's video add that Tick already did for free, and why would a programmer still write loops on purpose?
5. Predict-then-run: your while loop prints Health: 2, 1, 0 and stops. Your partner predicted four prints. In one sentence, explain to them why the third print never happened.

**Exit ticket mastery criteria (for the ones used):** Q1: for loop; the blank is `<=` only if counting INCLUSIVE to 7 starting at 1 (runs 1-7), or `<` if starting at 0 (runs 0-6); the reasoning matters more than the operator choice: start, check against the target, increment. Q2: infinite loop, the screen floods/never stops; the question is "what moves the condition toward false?" (the change, not the check). Q3: three times, i equals 0, 1, 2 (never 3). Q4: Tick was already repetition riding the engine; loops are the ON-PURPOSE version a programmer controls, and not everything happens per-frame. Q5: by the third pass Health is 0, the check `Health > 0` fails BEFORE the next print, so no fourth line prints (prints happen after the change).

**~80% checkpoint:** Screen check at the off-by-one beat. 14 of 18 can say why `i < 5` is five runs and show the corrected run.

## Agenda

1. Do Now review (5 min)
2. Video 05 on EdPuzzle: slide lecture (compressed, seen Friday as preview) then live loops, predict out loud each run (~22 min)
3. Guided: both loops in TempActor, prediction ritual, off-by-one experiment (~10 min)
4. Independent: the challenge (countdown or pickup prints), predict, screenshot, submit; commit if time (~8 min)
5. Exit ticket (3 min)
6. Buffer: Friday's seeded-file stragglers finish with a neighbor's clean file as reference; early finishers extend the loops exercise

*Unnumbered, parallel: catch-up on outstanding submissions (Friday's error-file screenshot is still open for anyone missing it). Commit and push at the bell - standing habit.*

## Differentiation & Accommodations

- **Engagement:** the first loop is the first time their code does something many times on purpose. The infinite loop recovery shot is the memorable beat; the countdown reads like a game countdown, which it will become in their own projects.
- **Representation:** the slide lecture (pre-seeded Friday) gives the split without syntax (N times vs until); the live code gives it twice more (for AND while); the on-screen result (yellow stack under the cyan Hello World) shows one-shot vs repeated visually; loop code is also in the description.
- **Action & Expression:** predict-then-run is verbal and low stakes; the challenge offers two shapes (countdown or pickup prints) so students pick the sentence they'd actually say; the extension for early finishers rewards modifying a working loop, not a new topic.
- **Accommodations:** students still behind Friday work the seeded file during the buffer block with a neighbor's working file as reference; the prediction ritual is written (say, then show) so students who process slowly are not penalized for speed.
- **Student voice:** the off-by-one experiment (change to `<=`, count, change back) is student-predicted before Nick's video prediction lands; pairs compare counts on the health-drain surprise.

## Materials

| Item | Status | Link |
|------|--------|------|
| Video 05 recording script + slide storyboard + exact code blocks | ✅ | [[SY27 Q1 - Video 05 - Loops]] |
| Video 05 slide segment (PPTX, 14 slides, built by Claude, verified vs storyboard 10/13) | ✅ | `Video Lessons/SY27/GP2 Q1/SY27 Q1 - GP2 Video 05 - Slide Segment.pptx` Nick's visual pass before the recording; concept half already ran as Friday's preview |
| Video 05 recorded + published + EdPuzzle set | 🚧 | RECORDED 10/14 (commit 32a02e3, reconciliation in the script note); edit + publish by Sun 10/19 night; EdPuzzle set needs the transcript |
| Starter project repo | ✅ | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |
| Daily slides | 🚧 | Do Now (2 review + 1 preview), agenda, riddle (coat), joke (sour puss), exit ticket on the GP2 Daily Slides deck |
| Video 06 | 🚧 | Tuesday's day focus (Day 30); publish by Sun 10/19 night (sitting 2) |

## Notes after teaching

## Shift note

Applied 10/14 (Nick): sub day left only 1 student done with Video 03, so Wed 10/14 became the completion day and Day 27's V04 content moved to Friday. V05 slides previewed Friday, full lesson here Monday. The Tue 10/20 Components Practice day was absorbed into the shift (its break-and-fix move rides Day 30's constructor work).

## Connections

← [[GP2 - Roll-A-Ball Video 04 (Common Errors)]] | [[GP2 Q1 Calendar]] | [[GP2 - Roll-A-Ball Video 06 (Constructor and Components)]] →
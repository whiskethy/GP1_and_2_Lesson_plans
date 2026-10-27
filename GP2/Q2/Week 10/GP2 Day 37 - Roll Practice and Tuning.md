---
course: GP2
quarter: Q2
day: 37
date: Wed 11/4
day_type: A
chunk: '4'
type: practice
class_minutes: 48
unit: 4
status: active
sub: false
updated: 2026-10-27
riddle: I follow you all the time and copy your every move, but you can't touch me or catch me. What am I?
joke: What do sprinters eat before a race?
---

# GP2 Day 37 - Roll Practice and Tuning

Day 37 (A day, 48 min). Practice day, no new idea: the tuning workshop. RollSpeed's knob does real work for the first time, and tuning movement against feel is rate reasoning with a predict step attached. The committed state at the end of today is Checkpoint 2's halfway evidence, and the catch-up lane absorbs anyone still inside Video 09. The wrong-way hunt from the video's bug segment is the finishers' extension.

## Learning Target

Tune a physics value against feel, on the record: change RollSpeed, predict the result, run, and write what actually happened - then debug wrong-direction movement with the value print if it shows up. Everyone commits a state they can name ("my ball rolls at X").

**Standards:** CSTA 3A-AP-21 (evaluate and refine computational artifacts) · ISBE 9-10.AP.21 (same verb, ISBE wording) · ACT S 304 · AF 401

## Shared Block

| Field | Value |
|---|---|
| Learning target | Run at least three deliberate tuning rounds on RollSpeed (predict, set, test, record), end the block at a value you can defend in one sentence, and commit it. |
| New concept | None. Applying the Roll function and V07's tunables together - applying the idea is practice, not new learning. |
| Content standard | CSTA 3A-AP-21 (evaluate and refine computational artifacts) |
| ACT standard | S 304 (extract the tuning table's data and use it in a computation) · AF 401 (rate and proportion: input x RollSpeed) |
| Unit performance task link | The committed tuned state is CP2's halfway evidence: roll working at a chosen value, on record. The predict-test-record table is the same evidence habit CP2's checkpoint day reads. |
| Rides on | Video 09's working Roll, the value print, and the challenge capture; V07's EditAnywhere knob; last year's Blueprint tuning instincts (GP1 students tuned RollSpeed there too). |
| Vocabulary | tuning round, prediction, feel, overshoot/undershoot, hunt ladder (still warm from the Video 08 wiring) |
| Prior-knowledge gaps | Rate and proportional reasoning (the largest ACT math gap at this band) - the predict step makes the reasoning visible instead of blind trial. |

## Do Now

| # | Type | Question |
|---|------|----------|
| 1 | Review | The Roll function read value.Get<FVector2D>() and multiplied ONE of the two numbers by RollSpeed before applying the impulse. Which number carried A/D, and which carried W/S? |
| 2 | Review | Your ball crawls at RollSpeed 20. What do you predict happens at 40 - and what is your reasoning, in one phrase? |
| 3 | Preview | The workshop table asks predict-then-test. What could you do this block that would make your predictions get better as the block goes on? |

## Worked example

One tuning round, whole-class, on the projector (5 min): current value named out loud, prediction written before running, test, result compared to the prediction, next value chosen from the miss (too slow: double it; jittery: halve the step). The table gets three rows before anyone releases: value, prediction, result - plus one sentence per row on the gap between what you expected and what you saw.

## Guided practice

Three rounds minimum, in their own project, on the record (a Doc, an index card, or the back of last block's notes is fine - the record is the artifact). Circulating triage priority: a student running rounds with no predictions written (stop them, the predict step IS the standard), a student whose value jumps wildly with no reasoning (halve the step, name the miss), a student still without a working Roll (catch-up lane: finish Video 09's typing and first drive, then join the table with whatever time remains).

## Independent work

Finishers take the extension: seed the axis swap from Video 09's bug segment on their own build, drive it, then read the value print aloud to a neighbor and explain the fix without touching the lines first - the print narrows the hunt before the hands do. Catch-up lane: finish Video 09 and join the workshop; their challenge capture from the last block is due before the bell either way.

## Exit ticket

1. Your table: your final RollSpeed, and the one sentence you would tell a student who has never played your build about how it drives.
2. One row from your table: the prediction, the result, and the one-sentence reason the gap happened.
3. RollSpeed 40 moves you twice as fast, but the ball overshoots corners. What would you change, and what do you predict your new value does to the overshoot?

## Agenda

1. Do Now review (5 min)
2. Worked example: one tuning round whole-class (5 min)
3. Guided rounds: predict-test-record, three minimum, circulating (20 min)
4. Extension hunt or catch-up lane; first-drive stragglers join the table (~12 min)
5. Commit checkpoint + exit ticket (6 min): close Unreal, full compile, commit and push with a message naming the tuned value

*Unnumbered, parallel: Video 09 stragglers keep their lane open through the guided block; their first drive is the workshop's entry, not a failure.*

## Materials

| Item | Link |
|------|------|
| Starter project repo | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |
| Tuning record | Student's own Doc/card - the three rows are the artifact; no handout needed |
| Video 09 (rewatch for the catch-up lane) | same EdPuzzle link as Day 36 |
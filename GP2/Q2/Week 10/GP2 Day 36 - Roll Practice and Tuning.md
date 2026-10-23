---
course: GP2
quarter: Q2
day: 36
date: Fri 10/30
day_type: C
chunk: '4'
type: practice
class_minutes: 72
unit: 4
status: active
updated: 2026-10-23
sub: false
riddle: If two's company, and three's a crowd, what are four and five?
joke: How did the piano get locked out of its car?
---

# GP2 Day 36 - Roll Practice and Tuning

Day 36 (C day, 72 min). Practice day, no new idea: the tuning workshop. RollSpeed's knob does real work for the first time, and tuning movement against feel is rate reasoning with a predict step attached. The committed state at the end of today is Checkpoint 2's halfway evidence, and the catch-up lane absorbs anyone still inside Video 09.

## Learning Target

Tune a physics value against feel, on the record: change RollSpeed, predict the result, run, and write what actually happened - then debug wrong-direction movement with the value print if it shows up. Everyone commits a state they can name ("my ball rolls at X").

**Standards:** CSTA 3A-AP-21 (evaluate and refine computational artifacts) · ISBE 9-10.AP.21 (same verb, ISBE wording) · ACT S 304 · AF 401

## Shared Block

| Field | Value |
|---|---|
| Learning target | Run at least three deliberate tuning rounds on RollSpeed (predict, set, test, record), end the block at a value you can defend in one sentence, and commit it. |
| New concept | None. Applying Wednesday's function and Video 07's tunables together - applying yesterday's idea is practice, not new learning. |
| Content standard | CSTA 3A-AP-21 (evaluate and refine computational artifacts) |
| ACT standard | S 304 (extract the tuning table's data and use it in a computation) · AF 401 (rate and proportion: input x RollSpeed) |
| Unit performance task link | The committed tuned state is CP2's halfway evidence: roll working at a chosen value, on record. The predict-test-record table is the same evidence habit CP2's checkpoint day reads. |
| Rides on | Video 09's working Roll and the value print, Video 07's EditAnywhere knob, last year's Blueprint tuning instincts (GP1 students tuned RollSpeed there too). |
| Vocabulary | tuning round, prediction, feel, overshoot/undershoot, reroute (the hunt ladder from Tuesday stays warm) |
| Prior-knowledge gaps | Rate and proportional reasoning (the largest ACT math gap at this band) - the predict step makes the reasoning visible instead of blind trial. |

**Do Now**

1. Wednesday you typed two impulse blocks. What did each block multiply together before applying the impulse?
2. Your ball crawls at RollSpeed 20. What do you predict happens at 40 - and what is your reasoning, in one phrase?
3. Preview: the workshop table asks predict-then-test. What could you do today that would make your predictions get better across the morning?

**Worked example**

One tuning round, whole-class, on the projector (5 min): current value named out loud, prediction written before running, test, result compared to the prediction, next value chosen from the miss (too slow: double it; jittery: halve the step). The table gets three rows before anyone releases: value, prediction, result - plus one sentence per row on the gap between what you expected and what you saw.

**Guided practice**

Three rounds minimum, in their own project, on the record (a Doc, an index card, or the back of yesterday's notes is fine - the record is the artifact). Students who finish move to the optional hunt (below).

**Independent work**

Two directions, self-paced. Optional hunt for the caught-up: seed the axis swap from Video 09's bug segment on their own build, drive it, then read the value print aloud to a neighbor and explain the fix without touching the lines first - the print narrows the hunt before the hands do. Catch-up lane: finish Video 09 (typing, compile, first drive) and join the workshop with whatever time remains; their challenge capture is due before the bell either way.

**Exit ticket**

1. Your table: your final RollSpeed, and the one sentence you would tell a student who has never played your build about how it drives.
2. One row from your table: the prediction, the result, and the one-sentence reason the gap happened.
3. RollSpeed 40 moves you twice as fast, but the ball overshoots corners. What would you change, and what do you predict your new value does to the overshoot?

## Agenda

1. Do Now review (5 min)
2. Worked example: one tuning round whole-class (5 min)
3. Guided rounds: predict-test-record, three minimum, circulating (25 min)
4. Independent: optional wrong-way hunt, catch-up lane, capture submissions (25 min)
5. Commit checkpoint + exit ticket (12 min): close Unreal, full compile, commit and push with a message naming the tuned value

*Unnumbered, parallel: Video 09 stragglers keep their lane open all block; their first drive is the workshop's entry, not a failure.*

## Materials

| Item | Link |
|------|------|
| Starter project repo | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |
| Tuning record | Student's own Doc/card - the three rows are the artifact; no handout needed |
| Video 09 (rewatch for the catch-up lane) | same EdPuzzle link as Day 35 |
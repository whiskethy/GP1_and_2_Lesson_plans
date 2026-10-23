---
course: GP2
quarter: Q2
day: 38
date: Fri 11/6
day_type: C
chunk: '6'
type: practice
class_minutes: 72
unit: 4
status: active
updated: 2026-10-23
sub: false
riddle: What is black when it's clean and white when it's dirty?
joke: What do you call an unpredictable camera?
---

# GP2 Day 38 - Look and Jump Practice

Day 38 (C day, 72 min). Practice day, no new idea: the gate's two bug families as deliberate test cases (rocket and dead jump), full-movement polish, and the catch-up lane ahead of the checkpoint week. Movement is done; what remains before Checkpoint 2 is confidence that each student can break and repair their own build on purpose.

## Learning Target

Prove the canJump gate from both directions as your own test cases: comment out the flip and observe the rocket, comment out the reset and observe the dead jump, restore and verify - then demonstrate full movement at your tuned values and commit it.

**Standards:** CSTA 3B-AP-21 (develop and use a series of test cases) · ISBE 11-12.AP.24 (same verb, ISBE wording) · ACT REL 403

## Shared Block

| Field | Value |
|---|---|
| Learning target | Run your own two-case test of the jump gate (and the input hunt ladder if you need it), state the result of each case before you run it, and end the block with a committed, demonstrable build. |
| New concept | None. Wednesday's gate applied and tested - practice, not new learning. |
| Content standard | CSTA 3B-AP-21 (develop and use a series of test cases) |
| ACT standard | REL 403 (cause-effect in the state change: flip vs reset) |
| Unit performance task link | Checkpoint 2 (Fri 11/13 per the semester map) grades Roll, Look, and Jump working plus reading code they did not write (the PlayerBall.h trace lands next week). A student who can break and repair the gate owns the checkpoint's debugging frame. |
| Rides on | Wednesday's Look, Jump, gate, and Tick reset; Tuesday's hunt ladder; Friday's tuning record (the polish uses the same predict-test habit). |
| Vocabulary | test case (predicted, executed, observed), rocket bug (no flip), dead-jump bug (no reset), heuristic, polish |
| Prior-knowledge gaps | "State that persists" is yesterday's frame; today's test cases make it tangible by breaking it intentionally and watching which behavior survives. |

**Do Now**

1. Wednesday's gate: which line flips canJump to false, and which function flips it back?
2. You hold Space and the ball fires upward every single frame. Which of the gate's two lines is missing, and why does the impulse repeat?
3. Preview: today YOU choose which line to break first. Which family do you want to seed first - the rocket or the dead jump - and what do you expect to see before you break it?

**Worked example**

One full test cycle, whole-class (5 min): pick the case, read the line about to be commented out, predict the exact symptom out loud, comment the line, full compile, run and observe, restore, verify normal. The written pair is the artifact: case - prediction - observed.

**Guided practice**

Both gate cases minimum, in their own project, on the record: rocket case (canJump = false commented) and dead-jump case (the Tick reset commented). Each entry carries the stated prediction before the run. Circulation triage priority: a student whose "rocket" behaves normally (their flip line was already inside the if - read before commenting), a student whose dead jump still jumps (their reset check passes every frame - check the Z condition's operator), anyone restoring without a full compile (stale binary is the Video 03 lesson).

**Independent work**

Self-paced lanes for the rest of the block. Polish lane: full movement at tuned values - drive, look, jump, and tune one more round on the same record if the feel needs it; end with the committed state named in one sentence. Catch-up lane: Video 09/V10 finishers work the same test cases as soon as their build supports the gate. Everyone: the drive-look-jump capture proof submitted and the commit pushed by the bell - movement's evidence is done before the checkpoint week starts.

**Exit ticket**

1. Your two test cases: what you predicted for each, and what you actually saw.
2. The Tick reset's check "almost stopped moving up" is a heuristic. In one sentence: what could still go wrong for a player even with the gate "working"?
3. Checkpoint 2 is next Friday. Name the one part of movement you would want the checkpoint to see you demonstrate first, and why.

## Agenda

1. Do Now review (5 min)
2. Worked example: one full test cycle whole-class (5 min)
3. Guided: both gate cases, predicted before run, circulate (20 min)
4. Lanes: polish at tuned values, catch-up lane, tuned-value re-tuning (30 min)
5. Commit checkpoint + exit ticket (12 min): capture submitted, close Unreal, full compile, commit and push

*Unnumbered, parallel: students still owing Wednesday's capture submit it in this block; next week's Code Read (PlayerBall.h, written deliverable) rides behind this build - say the week's shape out loud so nobody walks in cold.*

## Materials

| Item | Link |
|------|------|
| Starter project repo | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |
| Test-case record | Student's own Doc/card - case, prediction, observed is the artifact |
| Videos 09-10 (rewatch, catch-up lane) | same EdPuzzle links as Days 35/37 |
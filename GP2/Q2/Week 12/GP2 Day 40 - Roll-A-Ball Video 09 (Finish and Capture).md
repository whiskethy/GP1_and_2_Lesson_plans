---
course: GP2
quarter: Q2
day: 40
date: Tue 11/10
day_type: A
chunk: 4
type: practice
class_minutes: 48
unit: 4
status: active
sub: false
updated: 2026-11-09
riddle: What word becomes "desserts" when you reverse it?
joke: You don't need a parachute to go skydiving.
agenda:
  - {"title":"Do Now review","min":5,"pinned":true}
  - {"title":"Finish Video 09","min":30,"kind":"video"}
  - {"title":"Controller Challenge","min":8,"kind":"activity","notes":"Get WASD, Arrows & Controller working"}
  - {"title":"Commit checkpoint + exit ticket","min":5,"pinned":true,"notes":"drive capture submitted, full compile, commit and push"}
---

# GP2 Day 40 - Roll-A-Ball Video 09 (Finish and Capture)

Day 40 (A day, 48 min). Practice day, no new idea: the finish block behind Monday's Video 09, then the drive capture, the proof that puts movement's second evidence line on the record. Each student picks their own RollSpeed, names it, predicts how fast W carries them, runs, and compares - then captures the drive and submits before the bell. The gamepad is already live on the same build from the Week 11 challenge, so the capture can ride either device. Catch-up lane rides underneath for anyone still short of V09's Roll end state or, further back, V08.

## Learning Target

From Monday's named stop-point, reach Video 09's end state on your own build - the Roll body compiling and WASD moving the ball - then prove it on the record: pick your own RollSpeed, run one predict-before-test round against it, and submit a drive capture at whatever value you chose, committed and pushed. That capture is CP2's Roll line.

**Standards:** CSTA 3A-AP-21 (evaluate and refine computational artifacts) · ISBE 9-10.AP.21 (same verb, ISBE wording) · ACT WME 402

## Shared Block

| Field | Value |
|---|---|
| Learning target | Finish Video 09 on your own build, pick and name your own RollSpeed, state a prediction before the run, and end the day with a submitted drive capture, a full compile, and a commit and push. |
| New concept | None. Applying V09's impulses, the value read, and V07's tunables together - the practice day, not a new idea. The predict-test-record round rides here from chunk 4's tuning habit, in miniature. |
| Content standard | CSTA 3A-AP-21 (evaluate and refine computational artifacts) |
| ACT standard | WME 402 (carried: every move is a test of a written value) · AF 401 carried in the predict round (rate reasoning: value x RollSpeed) |
| Unit performance task link | The drive capture is CP2's second evidence line and the build bar's Roll half - the checkpoint demos read this capture and the build's commit together. |
| Rides on | Monday's Roll body (the two-impulse block typed in the video block); V07's RollSpeed UPROPERTY (their own value is the knob's first real work); V08's IMC (the gamepad capture rides the same wire). |
| Vocabulary | RollSpeed (the student's own value), predict-before-run, capture, evidence line, tuning |
| Prior-knowledge gaps | Reading compiler errors (the standing gap): every paste mistake from Monday's typing surfaces here first; the error ritual keeps them small. Capture tech: the screenshot is the floor if capture fails. |

## Do Now

| # | Type | Question |
|---|------|----------|
| 1 | Review | AddAngularImpulseInDegrees spins the ball. Which call supplies the axis it spins about? |
| 2 | Review | The backwards A and D fix never touched C++. Name the object that got changed, and what kind of change was inside it. |
| 3 | Preview | CP2 counts three evidence lines: the wiring prints, a drive capture, and a drive-look-jump capture. Which one can your build make right now? One phrase. |

## Worked example

None scheduled - practice day, and the release point is the bell. The demo bar lives in the capture block's opening minute: the teacher runs the target state once on the projector (pick a RollSpeed, predict, run, compare, capture), says the submission requirement once, then circulates. Students who missed Monday paste against the video and join the lane.

## Guided practice

Self-paced from each student's stop-point, circulating. Triage priority, built from what the V09 take actually showed: compile fails from Monday's typing come first (the missing KismetMathLibrary include line, then paste placement); the ball rolls the wrong way next (suspect the IMC's A and D modifier fix before the axis lines; the final Roll body carries no value print, so a direction hunt needs a temporary one - the two repo-carried print lines swapped back in, the same debug habit as the wiring week); the ball barely crawls (RollSpeed still at default 20 - their own value is the day's assignment, not a patch); the camera rolls with the ball (Monday's Camera Boom inherit checkboxes); and capture tech fails (the screenshot floor: the ball visibly rolling under W). Catch-up lane: V08 and gamepad stragglers finish the wiring, then join at V09's typing.

## Independent work

Finish to the end state, pick a RollSpeed (default 20.0f; slower or faster, your call), name it, predict roughly how fast W carries you, run, and say what actually happened - then take a short capture driving the ball around, submit on Classroom, commit and push. Finishers take the extension: a second predict-test-record round at a different RollSpeed (name the new value, predict the change, test, record the gap), the tuning habit again on their own build, no new setup.

## Exit ticket

1. Name the RollSpeed you chose and your predict-before-run round: what you predicted, and what the run actually showed.
2. The backwards A and D fix landed in the IMC, not in C++. In one sentence: why was the mapping the right place for that fix?
3. How many of CP2's three evidence lines are already in: the wiring prints, the drive capture, the drive-look-jump capture? Name each one in or still owed.

## Agenda (A day, 48 min)

1. Do Now review (5 min)
2. Finish Video 09 (30 min)
3. Controller Challenge (8 min) - Get WASD, Arrows & Controller working
4. Commit checkpoint and exit ticket (5 min) - drive capture submitted, full compile, commit and push

## Materials

| Item | Link |
|------|------|
| Video 09 on EdPuzzle | https://edpuzzle.com/media/6af1fb04f209ff15f367df4c |
| Starter project repo | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |
| Paste blocks | The V09 include line, in the Video 09 YouTube description |
| Predict-test-record | Student's own Doc/card: the value named before the run, the result recorded after |

### EdPuzzle embeds

<iframe width="470" height="404" src="https://edpuzzle.com/embed/media/6af1fb04f209ff15f367df4c" frameborder="0" allowfullscreen></iframe>

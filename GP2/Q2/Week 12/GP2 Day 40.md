---
course: GP2
quarter: Q2
day: 40
date: Tue 11/10
day_type: A
chunk: "6"
type: practice
class_minutes: 48
unit: 4
status: active
sub: false
updated: 2026-11-02
riddle: What word becomes "desserts" when you reverse it?
joke: You don't need a parachute to go skydiving.
agenda:
  - {"title":"Do Now review","min":5,"pinned":true}
  - {"title":"Finish Video 10","min":30,"kind":"video"}
  - {"title":"Controller Challenge","min":8,"kind":"activity","notes":"Get WASD, Arrows & Controller working"}
  - {"title":"Exit ticket","min":5,"pinned":true}
---

# GP2 Day 40 - Roll-A-Ball Video 10 (Finish and Controller Challenge)

Day 40 (A day, 48 min). Practice day, no new idea: the finish block behind yesterday's V10, then the Controller Challenge - the capture proof that closes CP2's build. Movement's last evidence line lands today: the drive-look-jump capture, submitted before the bell. The Controller Challenge bar is visible from minute one: WASD, arrows, and a gamepad all drive the same build. Catch-up lane rides underneath for anyone still short of V09/V10.

## Learning Target

From Monday's named stop-point, reach Video 10's end state on your own build - Look, Jump, and the Tick reset all working - then prove it on the record: a drive-look-jump capture at whichever input device you pick, submitted, committed, and pushed. That capture is CP2's build-completion evidence.

**Standards:** CSTA 3A-AP-21 (evaluate and refine computational artifacts) · ISBE 9-10.AP.21 (same verb, ISBE wording) · ACT WME 402

## Shared Block

| Field | Value |
|---|---|
| Learning target | Finish Video 10 to a compiling full-movement build, pass the Controller Challenge (WASD, arrows, and a controller all drive it), and submit the drive-look-jump capture. |
| New concept | None. Applying V09-V10's wiring, the gate, and the value print together - the practice day, not a new idea. |
| Content standard | CSTA 3A-AP-21 (evaluate and refine computational artifacts) |
| ACT standard | WME 402 (carried: every move is a test of a written value) |
| Unit performance task link | The drive-look-jump capture is CP2's third evidence line and the build's completion bar - Monday 11/16's checkpoint demos read this capture, this build's commit, and Friday's Code Read together. |
| Rides on | Video 10's Look, gate, and Tick reset (typed Monday); V09's value print; V07's tunables; V03's prints (the gate state is provable). |
| Vocabulary | device, Controller Challenge, capture, evidence line, heuristic (near-zero Z velocity is not ground detection) |
| Prior-knowledge gaps | Reading compiler errors (the standing gap): every paste mistake from yesterday's typing surfaces here first; the error ritual keeps them small. Capture tech: the screenshot is the floor if capture fails. |

## Do Now

| # | Type | Question |
|---|------|----------|
| 1 | Review | The rocket bug and the dead-jump bug: name which gate line is missing in each, and which symptom each one produces. |
| 2 | Review | The Tick reset checks "almost stopped moving up" rather than actual ground contact. Is that real ground detection? One phrase. |
| 3 | Preview | A controller sends the same kind of input value as WASD. What do you think has to happen for one value scale to feel right on both? (Guess in one phrase.) |

## Worked example

None scheduled - practice day, and Tuesday's release point is the bell. The demo bar lives in the Challenge block's opening minute: the teacher runs the target state once on the projector (WASD, arrows, and a controller all drive, look, and jump the same build), says the capture requirement once, then circulates. Students who missed Monday paste against the video and join the lane.

## Guided practice

Self-paced from each student's stop-point, circulating. Triage priority: compile fails from Monday's typing (Build.cs or paste placement first - the two errors V08/V10's takes actually had), camera spins the wrong way (input wiring family - make them read which value got wired where before touching lines), one jump forever (their reset never fires - check Tick's presence in the build first), capture tech fails (screenshot floor: roll visible in frame, jump captured). Catch-up lane: V09 stragglers finish Roll, then join at V10's typing; their challenge capture from Friday is already in or rides this block.

## Independent work

Finish to the end state, run the Controller Challenge, capture, submit on Classroom, commit and push. Finishers take the extension: two predict-test-record rounds on RollSpeed at their challenge capture (name the value, predict, test, record the gap) - on their own build, no new setup the week leaves any room for.

## Exit ticket

1. Your gate is commented out. Pressing and holding Space, what exactly does the ball do - and which of the gate's two jobs is missing? One sentence.
2. The reset's "almost stopped moving up" is a heuristic. In one sentence: what real bug could it still cause even with the gate "working"? (honest answers count)
3. CP2 is Monday. Which of your three evidence lines are in (wiring prints, drive capture, drive-look-jump capture), and which - if any - is still owed?

## Agenda (A day, 48 min)

1. Do Now review (5 min)
2. Finish Video 10 (30 min)
3. Controller Challenge (8 min) - get WASD, arrows, and a controller all working, then capture
4. Exit ticket (5 min)

*Unnumbered, parallel: V09/V10 stragglers run the catch-up lane; the screenshot is the floor if capture fails. The drive-look-jump capture due at the bell is CP2's third evidence line. Standing close: close Unreal, full compile, commit and push.*

## Materials

| Item | Link |
|------|------|
| Video 10 on EdPuzzle | the same EdPuzzle link as the Video 10 day's Materials |
| Starter project repo | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |
| Paste blocks | Ride the video description when published |
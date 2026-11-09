---
course: GP2
quarter: Q2
day: 42
date: Fri 11/13
day_type: C
chunk: 6
type: practice
class_minutes: 72
unit: 4
status: active
sub: false
updated: 2026-11-09
riddle: What has six faces but doesn't wear makeup, and twenty-one eyes but cannot see?
joke: Why do we tell actors to "break a leg"?
agenda:
  - {"title":"Do Now review","min":5,"pinned":true}
  - {"title":"Finish Video 10: Look, Jump, the Tick reset","min":52,"kind":"video"}
  - {"title":"Controller Challenge + drive-look-jump capture + submission","min":10,"kind":"activity","notes":"WASD, Arrows & Controller all driving one build"}
  - {"title":"Commit checkpoint + exit ticket","min":5,"pinned":true,"notes":"capture submitted, full compile, commit and push"}
---

# GP2 Day 42 - Roll-A-Ball Video 10 (Finish and Controller Challenge)

Day 42 (C day, 72 min). Practice day, no new idea: the finish block behind Wednesday's Video 10, then the Controller Challenge - movement's last evidence line, the drive-look-jump capture, submitted before the bell. The challenge bar is visible from minute one: WASD, arrows, and a gamepad all drive the same build. The gamepad arrived in the Week 11 challenge, so the arrows' IMC mappings are this block's only new editor work. The C day's extra minutes all go to the finish: more circulating time behind the gate's two bug directions. Catch-up lane rides underneath for anyone still short of V09 or V10.

## Learning Target

From Wednesday's named stop-point, reach Video 10's end state on your own build - Look, Jump, and the Tick reset all working - then prove it on the record: a drive-look-jump capture on any of the build's three devices, submitted, committed, and pushed. That capture is CP2's build-completion evidence.

**Standards:** CSTA 3A-AP-21 (evaluate and refine computational artifacts) · ISBE 9-10.AP.21 (same verb, ISBE wording) · ACT WME 402

## Shared Block

| Field | Value |
|---|---|
| Learning target | Finish Video 10 to a compiling full-movement build, pass the Controller Challenge (WASD, arrows, and a controller all drive it), and submit the drive-look-jump capture. |
| New concept | None. Applying V09-V10's wiring, the gate, and the Tick reset together - the practice day, not a new idea. The arrows' IMC mappings are editor data additions to a wire already understood: the gamepad proved the device story. |
| Content standard | CSTA 3A-AP-21 (evaluate and refine computational artifacts) |
| ACT standard | WME 402 (carried: every move is a test of a written value) |
| Unit performance task link | The drive-look-jump capture is CP2's third evidence line and the build's completion bar - the checkpoint demos read this capture, this build's commit, and the PlayerBall.h Code Read together. |
| Rides on | Video 10's Look, gate, and Tick reset (typed Wednesday); the gamepad mappings from the Week 11 challenge (the arrows are the same lesson's third device); V07's tunables; V05's Tick. |
| Vocabulary | device, Controller Challenge, capture, evidence line, IMC mapping, heuristic (near-zero Z velocity is not ground detection) |
| Prior-knowledge gaps | Reading compiler errors (the standing gap): every paste mistake from Wednesday's typing surfaces here first; the error ritual keeps them small. Capture tech: the screenshot is the floor if capture fails. |

## Do Now

| # | Type | Question |
|---|------|----------|
| 1 | Review | Look feeds two engine calls. Which one moves the view left and right, and which one tilts it up and down? |
| 2 | Review | RollSpeed and JumpForce are tunable on the Details panel instead of a full recompile. Which C++ keyword puts a value on the Details panel like that? |
| 3 | Preview | On a broken build, the gate's reset job never runs: you land and nothing reopens. What should the jump feel like after that: the same, one jump only, or the rocket? One phrase. |

## Worked example

None scheduled - practice day, and Friday's release point is the bell. The demo bar lives in the Challenge block's opening minute: the teacher runs the target state once on the projector (WASD, arrows, and a controller all drive, look, and jump the same build), says the capture requirement once, then circulates. Students who missed Wednesday paste against the video and join the lane.

## Guided practice

Self-paced from each student's stop-point, circulating. Triage priority: compile fails from Wednesday's typing (the include family and paste placement first); the camera spins the wrong way (input wiring family - make them read which value got wired where before touching lines); one jump and then nothing (their reset never fires - check Tick's presence in the build first); arrows dead after mapping (the mapping landed on the wrong action, or the IMC context is not loaded - read the IMC list before touching code); capture tech fails (the screenshot floor: movement, look, and a jump all visible in frame). Catch-up lane: V09 and V10 stragglers finish behind the lane, then join at V10's typing.

## Independent work

Finish to the end state, map the arrows in IMC_PlayerBall, run the Controller Challenge on all three devices, capture, submit on Classroom, commit and push. Finishers take the extension: two predict-test-record rounds on RollSpeed at their challenge capture (name the value, predict, test, record the gap) - the tuning habit, on their own build, no new setup.

## Exit ticket

1. Your gate is commented out. Pressing and holding Space, what exactly does the ball do - and which of the gate's two jobs is missing? One sentence.
2. The reset's "almost stopped moving up" is a heuristic. In one sentence: what real bug could it still cause even with the gate "working"? (honest answers count)
3. Which of your three evidence lines are in (wiring prints, drive capture, drive-look-jump capture), and which - if any - is still owed?

## Agenda (C day, 72 min)

1. Do Now review (5 min)
2. Finish Video 10: Look, Jump, the Tick reset (52 min)
3. Controller Challenge + drive-look-jump capture + submission (10 min) - WASD, Arrows & Controller all driving one build
4. Commit checkpoint and exit ticket (5 min) - capture submitted, full compile, commit and push

## Materials

| Item | Link |
|------|------|
| Video 10 on EdPuzzle | the same EdPuzzle link as the Video 10 day's Materials |
| Starter project repo | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |
| Paste blocks | Ride the Video 10 description when published |

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
updated: 2026-11-10
riddle: What has six faces but doesn't wear makeup, and twenty-one eyes but cannot see?
joke: Why do we tell actors to "break a leg"?
agenda:
  - {"title":"Do Now review","min":5,"pinned":true}
  - {"title":"Finish Video 10: Look, Jump, the Tick reset","min":52,"kind":"video"}
  - {"title":"Controller Challenge + movement recording + submission","min":10,"kind":"activity","notes":"gamepad look and jump (the video's challenge), then look, jump, and roll on tape"}
  - {"title":"Commit checkpoint + exit ticket","min":5,"pinned":true,"notes":"recording submitted, full compile, commit and push"}
---

# GP2 Day 42 - Roll-A-Ball Video 10 (Finish and Controller Challenge)

Day 42 (C day, 72 min). Practice day, no new idea: the finish block behind Wednesday's Video 10, then the Controller Challenge - movement's last evidence line, the movement recording, submitted before the bell. The challenge bar is the video's own wording (locked 11/10: the challenge is whatever the video carries): plug in a gamepad, get look and jump working on it (Roll for Y and X is already in the IMC, X negates and swizzles), then record your movement working: look, jump, and roll. The keys already drive, and the gamepad's Roll stick rode the Week 11 challenge, so the right-stick and face-button mappings are this block's only new editor work. Arrows were the old planned bar; they stay as a finishers' extension, not the challenge. The C day's extra minutes all go to the finish: more circulating time behind the gate's two bug directions. Catch-up lane rides underneath for anyone still short of V09 or V10.

## Learning Target

From Wednesday's named stop-point, reach Video 10's end state on your own build - Look, Jump, and the Tick reset all working - then prove it on the record: a movement recording of look, jump, and roll running together, with the gamepad's look and jump in it if the student has a controller (the video's out stands: "if you have a controller"), submitted, committed, and pushed. That recording is CP2's build-completion evidence.

**Standards:** CSTA 3A-AP-21 (evaluate and refine computational artifacts) · ISBE 9-10.AP.21 (same verb, ISBE wording) · ACT WME 402

## Shared Block

| Field | Value |
|---|---|
| Learning target | Finish Video 10 to a compiling full-movement build, get look and jump working on the gamepad (the video's challenge), and record your movement working: look, jump, and roll. |
| New concept | None. Applying V09-V10's wiring, the gate, and the Tick reset together - the practice day, not a new idea. The gamepad's Look and Jump mappings are editor data additions to wires already understood: the same lesson's third device. Arrows on IA_Roll and IA_Look ride as the finishers' extension, not the challenge. |
| Content standard | CSTA 3A-AP-21 (evaluate and refine computational artifacts) |
| ACT standard | WME 402 (carried: every move is a test of a written value) |
| Unit performance task link | The movement recording is CP2's third evidence line and the build's completion bar - the checkpoint demos read this recording, this build's commit, and the PlayerBall.h Code Read together. |
| Rides on | Video 10's Look, gate, and Tick reset (typed Wednesday); the gamepad Roll mapping from the Week 11 challenge (the right stick and face button are the same lesson's third device); V07's tunables; V05's Tick. |
| Vocabulary | device, Controller Challenge, capture, evidence line, IMC mapping, heuristic (near-zero Z velocity is not ground detection) |
| Prior-knowledge gaps | Reading compiler errors (the standing gap): every paste mistake from Wednesday's typing surfaces here first; the error ritual keeps them small. Recording tech: the screenshot is the floor if capture fails. |

## Do Now

| # | Type | Question |
|---|------|----------|
| 1 | Review | Look feeds two engine calls. Which one moves the view left and right, and which one tilts it up and down? |
| 2 | Review | RollSpeed and JumpForce are tunable on the Details panel instead of a full recompile. Which C++ keyword puts a value on the Details panel like that? |
| 3 | Preview | On a broken build, the gate's reset job never runs: you land and nothing reopens. What should the jump feel like after that: the same, one jump only, or the rocket? One phrase. |

## Worked example

None scheduled - practice day, and Friday's release point is the bell. The demo bar lives in the Challenge block's opening minute: the teacher runs the target state once on the projector (the ball rolls on keys, looks and jumps on the gamepad, matching the video's challenge), says the recording requirement once, then circulates. Students who missed Wednesday paste against the video and join the lane.

## Guided practice

Self-paced from each student's stop-point, circulating. Triage priority: compile fails from Wednesday's typing (the include family and paste placement first); the camera spins the wrong way (input wiring family - make them read which value got wired where before touching lines); one jump and then nothing (their reset never fires - check Tick's presence in the build first); gamepad dead after mapping (the mapping landed on the wrong action, or the IMC context is not loaded - read the IMC list before touching code); recording tech fails (the screenshot floor: movement, look, and a jump all visible in frame). Catch-up lane: V09 and V10 stragglers finish behind the lane, then join at V10's typing.

## Independent work

Finish to the end state, map look and jump in IMC_PlayerBall (right thumbstick on IA_Look, face button bottom on IA_Jump), run the Controller Challenge, record your movement working (look, jump, and roll), submit on Classroom, commit and push. Finishers take the extensions: map the arrow keys onto IA_Roll and IA_Look (the old planned bar, WASD plus arrows on one build), and two predict-test-record rounds on RollSpeed at their recording (name the value, predict, test, record the gap) - the tuning habit, on their own build, no new setup.

## Exit ticket

1. Your gate is commented out. Pressing and holding Space, what exactly does the ball do - and which of the gate's two jobs is missing? One sentence.
2. The reset's "almost stopped moving up" is a heuristic. In one sentence: what real bug could it still cause even with the gate "working"? (honest answers count)
3. Which of your three evidence lines are in (wiring prints, drive capture, movement recording), and which - if any - is still owed?

## Agenda (C day, 72 min)

1. Do Now review (5 min)
2. Finish Video 10: Look, Jump, the Tick reset (52 min)
3. Controller Challenge + movement recording + submission (10 min) - gamepad look and jump (the video's challenge), then look, jump, and roll on tape
4. Commit checkpoint and exit ticket (5 min) - capture submitted, full compile, commit and push

## Materials

| Item | Link |
|------|------|
| Video 10 on YouTube | https://youtu.be/Nf7zJUgvddc |
| Video 10 on EdPuzzle | the same EdPuzzle link as the Video 10 day's Materials |
| Starter project repo | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |
| Paste blocks | Ride the Video 10 YouTube description |

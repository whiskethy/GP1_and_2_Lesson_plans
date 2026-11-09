---
course: GP2
quarter: Q2
day: 41
date: Wed 11/11
day_type: A
chunk: 5
type: new idea (EdPuzzle)
class_minutes: 48
unit: 4
status: active
sub: false
updated: 2026-11-09
riddle: What kind of room has no doors or windows?
joke: Did you hear about the king that went to the dentist?
agenda:
  - {"title":"Do Now review","min":5,"pinned":true}
  - {"title":"Work on Video 10","min":38,"kind":"video"}
  - {"title":"Commit checkpoint + exit ticket","min":5,"pinned":true,"notes":"full compile, commit and push naming Video 10"}
---

# GP2 Day 41 - Roll-A-Ball Video 10 (Look and Jump)

Day 41 (A day, 48 min). Live focus: Video 10 - Look and Jump, movement's last two pieces. Day one of the two-block V10 push: the video (about 37 minutes on tape; at the series' pause-and-type pace students take most of the block) carries the whole lesson, and Friday's finish block carries the Controller Challenge and its capture. Look is the Roll pattern moved to rotation; Jump is Unit 1's if-statement doing real game work through the canJump gate; the Tick reset is V05's loop getting its first actual job. The video shows both gate bug directions on camera: no flip is the rocket, no reset is one jump and then nothing. The gamepad segment is not in this take - it ran as the Week 11 challenge. Anyone still short of V09's end state or Tuesday's drive capture runs the parallel catch-up lane. Plan-level file: built from the V10 script note before the take; the publish deadline is before this class, and the reconciliation pass after the take sweeps the Materials links and the Task List rows.

## Learning Target

Replace the two stub functions behind Video 10: Look reads the mouse's 2D value into controller yaw and pitch, and Jump fires an upward impulse only when the canJump gate allows it - with the Tick reset reopening the gate so the jump repeats. All three typed and compiling by the bell; the Controller Challenge capture rides Friday.

**Standards:** CSTA 3B-AP-22 (modify an existing program to add functionality) · ISBE 11-12.AP.26 (same verb, ISBE wording) · ACT REL 403

## Shared Block

| Field | Value |
|---|---|
| Learning target | Replace the stub Look and Jump functions with real bodies: Look feeds the mouse's 2D value to yaw and pitch, Jump fires the upward impulse only while the canJump gate allows it, and the Tick reset opens the gate again so the jump repeats - all three compiling and committed by the bell. |
| New concept | The conditional gate as a game feature: canJump flips false at the jump and a Tick check flips it back - Unit 1's if-statements working inside the engine's loop. Look itself is pattern transfer, the V09 read-the-value shape moved to rotation, not a second new idea. |
| Content standard | CSTA 3B-AP-22 (modify an existing program to add functionality) |
| ACT standard | REL 403 (cause-effect: the flag flip is why holding Space does not rocket the ball, and the reset is why the jump works twice) |
| Unit performance task link | This is CP2's last new idea: Roll (Monday and Tuesday), Look and Jump (today and Friday), all building toward the checkpoint demos. The gate's two bug directions are the checkpoint's reading-the-state skill in miniature. |
| Rides on | Video 09's Roll body (the same 2D value read, value.Get<FVector2D>()); V07's UPROPERTY pattern (canJump joins the tunables, but flips during play); V08's bindings (the Look fired and Jump fired stub prints, replaced today); V05's Tick (V05 said Tick is the engine's loop; today it gets a job). |
| Vocabulary | yaw, pitch, AddControllerYawInput, AddControllerPitchInput, canJump, conditional gate, AddImpulse, FVector(0, 0, JumpForce), Tick reset, heuristic (near-zero Z velocity is not ground detection) |
| Prior-knowledge gaps | Order of operations with signed values, this time in pitch. State that persists: no prior frame for a variable whose value survives between presses; the gate demo is that frame. |

## Do Now

| # | Type | Question |
|---|------|----------|
| 1 | Review | Roll's final body carries no debug print left in it. What is Roll's proof that it works now? |
| 2 | Review | The Look fired and Jump fired stub prints from the wiring week are still in the file going into today. What were those two prints there to prove? |
| 3 | Preview | In Unit 1 terms: an if-check is the only thing standing between the Space key and a jump impulse. What does holding Space do to that impulse while the check is missing? One phrase. |

## Worked example

The video IS the worked example, twice. Look: read the 2D value, yaw is the swivel left and right and pitch is the tilt up and down, type AddControllerYawInput with the X half and AddControllerPitchInput with the Y half, compile, and watch the roll direction follow the camera - the control rotation changed, Monday's axis story paying off. Jump: the bool member with UPROPERTY, the if gate wrapping the upward impulse (Z is up, said once), the canJump = false flip and why the gate exists, then BOTH bug directions on camera: no flip means the rocket, no reset means one jump and then nothing. The fix is the Tick reset, a three-line check reusing Tick and the conditional. Scope honesty, once: near-zero Z velocity is a heuristic stand-in for landed, not real ground detection.

## Guided practice

Students type along inside the video block, self-paced. Circulation triage priority: the camera spins with the ball instead of looking (wired to the wrong function - read which call got wired where before touching lines); the ball becomes a rocket (their flip line never fired - read the gate's own body first, and name Unit 1's comparison before guessing); one jump and then nothing (honest for a moment: that is the pre-reset state, the video says so); the ball jumps oddly (Z sign confusion; Z is up); and compile fails (the include family and paste placement). The ~80% bar: by the block's end, 9+ of 11 has Look and the gate compiling, the Tick reset in.

## Independent work

The typing IS the block's work: pause, type, compile, keep moving. Students still short of V09's Roll end state or Tuesday's drive capture run the parallel catch-up lane (the V09 EdPuzzle link rides Day 39's Materials), then roll into V10 typing behind their lane. At the bell: close Unreal, full compile, commit and push with a message naming Video 10. Friday's finish block owns the Controller Challenge and the drive-look-jump capture, so nothing capture-shaped is due today.

## Exit ticket

1. The rocket and the one-jump bug are the same gate breaking in two directions. Name which missing job produces which: the flip after the jump, or the reset in Tick.
2. Look writes to the control rotation and Roll reads from it. In one sentence: why does the ball now roll in the direction the camera faces?
3. At the bell your build compiles with Roll, Look, Jump, and the reset all in. Name the one proof still owed on Friday that all three work together.

## Agenda (A day, 48 min)

1. Do Now review (5 min)
2. Work on Video 10 (38 min)
3. Commit checkpoint and exit ticket (5 min) - full compile, commit and push naming Video 10

## Materials

| Item | Link |
|------|------|
| Video 10 on EdPuzzle | NOT YET PUBLISHED - publish deadline before this class; the link drops here when it goes live |
| Starter project repo | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |
| Paste blocks | Ride the Video 10 description when published |

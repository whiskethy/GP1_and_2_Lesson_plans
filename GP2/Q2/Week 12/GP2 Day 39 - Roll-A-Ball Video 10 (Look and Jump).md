---
course: GP2
quarter: Q2
day: 39
date: Mon 11/9
day_type: A
chunk: "5"
type: new idea (EdPuzzle)
class_minutes: 48
unit: 4
status: active
sub: false
updated: 2026-11-02
riddle: What comes once in a minute, twice in a moment, but never in a thousand years?
joke: Cremation.
agenda:
  - {"title":"Do Now review","min":5,"pinned":true}
  - {"title":"Video 10 on EdPuzzle: Look, Jump, both bug directions, the Tick reset","min":37,"kind":"video"}
  - {"title":"Commit checkpoint + exit ticket","min":6,"pinned":true,"notes":"close Unreal, full compile, commit and push naming Video 10"}
---

# GP2 Day 39 - Roll-A-Ball Video 10 (Look and Jump)

Day 39 (A day, 48 min). Live focus: Video 10 - Look and Jump, the payoff week's first half. Day one of the two-block V10 push: the video (37 min, self-paced with typing beats) carries the whole lesson, and Tuesday's finish block carries the capture. Look is the Roll pattern moved to rotation; Jump is Unit 1's if-statement doing game work as the canJump gate; the Tick reset is V05's loop getting its first real job. The video shows both bug directions on camera (no gate flip: rocket; no reset: one jump forever). Anyone still short of V09 runs the parallel catch-up lane. Students arrive from Friday with a driving ball.

## Learning Target

Add the last two wiring pieces behind Video 10: Look reads the mouse's 2D value into controller yaw and pitch, and Jump fires an upward impulse only when the canJump gate allows it - with the Tick reset reopening the gate so the jump repeats. All three typed and compiling by the bell; the capture rides Tuesday.

**Standards:** CSTA 3B-AP-22 (modify an existing program to add functionality) · ISBE 11-12.AP.26 (same verb, ISBE wording) · ACT REL 403

## Shared Block

| Field | Value |
|---|---|
| Learning target | Follow Video 10 to type Look's two controller-input lines, Jump's gated impulse, and the Tick reset; end the block with all three compiling and committed. |
| New concept | The conditional gate as a game feature: canJump flips false at the jump, and a Tick check flips it back - Unit 1's if-statements working inside the engine's loop for the first time. Look itself is the Roll pattern moved to rotation. |
| Content standard | CSTA 3B-AP-22 (modify an existing program to add functionality) |
| ACT standard | REL 403 (cause-effect: the flag flip is why holding Space does not rocket the ball) |
| Unit performance task link | This is CP2's last new idea: Roll (Friday), Look and Jump (today and Tuesday), all building toward Monday 11/16's checkpoint demos. The gate's both-direction bugs are the checkpoint's reading-the-state skill in miniature. |
| Rides on | Video 09's Roll body (the same value-read shape), V07's UPROPERTY pattern (canJump joins the tunables, but flips during play), V03's prints (the gate state is provable), V05's Tick ("Tick is the engine's loop" - today it gets a job). |
| Vocabulary | yaw, pitch, AddControllerYawInput, AddControllerPitchInput, canJump, conditional gate, impulse (AddImpulse), FVector(0, 0, JumpForce), Tick, heuristic (near-zero Z velocity is not ground detection) |
| Prior-knowledge gaps | Order of operations with signed values, again, in pitch this time; and "state that persists" - no prior frame for a variable whose value survives between presses. The gate demo is that frame. |

## Do Now

| # | Type | Question |
|---|------|----------|
| 1 | Review | The Roll function read value.Get<FVector2D>() and multiplied one of the numbers by RollSpeed. Which number carried A/D, and which carried W/S? |
| 2 | Review | The Roll code READ GetControlRotation to know which way the camera faced. What do you think AddControllerYawInput does to that rotation? (guess in one phrase) |
| 3 | Preview | Unit 1: what does an if statement check before running its block? (You have written these since; today one does game work.) |

## Worked example

The video IS the worked example, twice: Look - read the 2D value, yaw = swivel left-right and pitch = tilt up-down, type AddControllerYawInput with X and AddControllerPitchInput with Y, compile, and watch the roll direction FOLLOW the camera (the control rotation changed; Friday's axis story pays off). Jump - the bool member with UPROPERTY, the if gate wrapping the upward impulse (Z is up, said once), the canJump = false flip and why the gate exists, then BOTH bug directions on camera: no flip = rocket (impulse every frame), no reset = one jump forever. The fix: the Tick reset, a 3-line check reusing Tick and the conditional. Scope honesty, once: near-zero Z velocity is a heuristic stand-in for "landed," not real ground detection.

## Guided practice

Students type along inside the 37-minute block, self-paced. Circulation triage priority: camera spins with the ball instead of looking (wrong input wired - Look's yaw going to roll somehow is the family), ball becomes a rocket (their flip line never fired - read the gate's own body first), one jump forever (expected, pre-reset, the video says so), ball sinks or jumps oddly (Z sign confusion in the impulse). The ~80% bar: by the block's end, 9+ of 11 has Look and the gate compiling.

## Independent work

The typing IS the block's work: pause, type, compile, keep moving. Students still short of V09's Roll end state run the parallel catch-up lane from the V09 rewatch link, then roll into V10 typing behind their lane. The ~80% exit from the block: Look + Jump + reset compiling, one jump visible. At the bell: close Unreal, full compile, commit and push with a message naming Video 10. Tuesday's finish block owns the controller work and the drive-look-jump capture, so nothing capture-shaped is due today.

## Exit ticket

1. Without the gate, holding Space turns the ball into a rocket. What does the conditional actually check, and what set it false?
2. After the first jump, canJump stays false forever. Which function reopens the gate, and what does it check?
3. Your own project right now: what compiled today, and what is the one thing you will type first in Tuesday's finish block?

## Agenda (A day, 48 min)

1. Do Now review (5 min)
2. Video 10 on EdPuzzle: Look, Jump, both bug directions, the Tick reset (37 min)
3. Commit checkpoint + exit ticket (6 min) - close Unreal, full compile, commit and push naming Video 10

*Unnumbered, parallel: V09 stragglers run the catch-up lane from the V09 rewatch link and roll into V10 behind it; movement's first two evidence lines (wiring prints, drive capture) are already in - today and Tuesday produce the third.*

## Materials

| Item | Link |
|------|------|
| Video 10 on EdPuzzle | Added here when the video publishes |
| Starter project repo | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |
| Paste blocks | Ride the video description when published |
| Video 09 rewatch (catch-up lane) | the same EdPuzzle link as the V09 day's Materials |

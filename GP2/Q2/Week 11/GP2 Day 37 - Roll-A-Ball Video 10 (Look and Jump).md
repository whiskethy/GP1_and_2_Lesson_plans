---
course: GP2
quarter: Q2
day: 37
date: Wed 11/4
day_type: A
chunk: '5'
type: new idea (EdPuzzle)
class_minutes: 48
unit: 4
status: active
updated: 2026-10-23
sub: false
riddle: I follow you all the time and copy your every move, but you can't touch me or catch me. What am I?
joke: What do sprinters eat before a race?
---

# GP2 Day 37 - Roll-A-Ball Video 10 (Look and Jump)

Day 37 (A day, 48 min). Live focus: Video 10 - Look and Jump, the same pattern twice, lighter by design: yaw and pitch written to the controller, the canJump conditional gate from Unit 1 doing real game work, and the Tick reset that brings repeated jumps back. Full movement at the end: that is Checkpoint 2's build, complete.

## Learning Target

Replace both stub functions: Look reads the mouse's 2D value into AddControllerYawInput and AddControllerPitchInput; Jump fires an upward impulse only when the canJump gate allows it - and the Tick frame-check reopens the gate, so the jump actually repeats. Then drive, look, and jump in one session, committed.

**Standards:** CSTA 3B-AP-22 (modify an existing program to add functionality) · ISBE 11-12.AP.26 (same verb, ISBE wording) · ACT REL 403

## Shared Block

| Field | Value |
|---|---|
| Learning target | Finish movement: look with the mouse, jump once then again after landing, and explain both bug directions (rocket and dead jump) in terms of what the gate variable did. |
| New concept | The conditional gate as a game feature: canJump flips false at the jump, and a Tick check flips it back - Unit 1's if-statements, working inside the engine's loop for the first time. Look itself is the Roll pattern moved to rotation. |
| Content standard | CSTA 3B-AP-22 (modify an existing program to add functionality and discuss implications) |
| ACT standard | REL 403 (cause-effect: the flag flip is why holding Space does not rocket the ball; the reset is why jumping repeats) |
| Unit performance task link | This completes CP2's build: Roll, Look, Jump all working and committed. The drive-look-jump capture is CP2's third evidence line, and the gate's both-direction bugs are the checkpoint's reading-the-state skill in miniature. |
| Rides on | Video 09's Roll body (same value-read shape), Video 07's UPROPERTY pattern (canJump joins the tunables, but flips during play), Video 03's prints (the gate state is provable), Video 05's Tick ("Tick is the engine's loop" - today it gets a job). |
| Vocabulary | yaw, pitch, AddControllerYawInput, AddControllerPitchInput, canJump, conditional gate, impulse (AddImpulse), FVector(0, 0, JumpForce), Tick, heuristic (near-zero Z velocity is not ground detection) |
| Prior-knowledge gaps | Order of operations with signed values, again, in pitch this time; "state that persists" - students have no prior frame for a variable whose value survives between presses. The gate demo is that frame. |

**Do Now**

1. Wednesday the Roll function read value.Get<FVector2D>() and multiplied one of the numbers by RollSpeed. Which number carried A/D, and which carried W/S?
2. The Roll code READ GetControlRotation to know which way the camera faced. What do you think Add Controller Yaw Input does to that same rotation? (guess in one phrase)
3. Preview: September's Unit 1 - what does an if statement check before running its block? (You have written these since; today one does game work.)

**Worked example**

The video IS the worked example, twice: Look - read the 2D value, yaw = swivel left-right and pitch = tilt up-down, type AddControllerYawInput with X and AddControllerPitchInput with Y, compile, and watch the roll direction FOLLOW the camera (the control rotation changed; the Video 09 axis story pays off). Jump - the bool member with UPROPERTY, the if gate wrapping the upward impulse (Z is up, said once), the canJump = false flip and why the gate exists, then BOTH bug directions on camera: no flip = rocket (impulse every frame), no reset = one jump forever. The fix: the Tick reset, a 3-line check reusing Tick and the conditional. Scope honesty, once: near-zero Z velocity is a heuristic stand-in for "landed," not real ground detection.

**Guided practice**

Students type Look first (short, paste-friendly), compile and confirm the camera swings while rolling still works on every student's build; then Jump with the gate, compile, one jump - and nothing on the second press, which is exactly what the video says to expect. Nobody "fixes" mid-segment: Segment 4 owns the read. Circulation triage priority: camera spins with the ball instead of looking (wrong input wired - Look's yaw going to roll somehow is the family), ball becomes a rocket (their flip line never fired - read the gate's own body first), one jump forever (expected, pre-fix), ball sinks or jumps oddly (Z sign confusion in the impulse).

**Independent work**

The challenge, per the video: short screen capture showing all three - a few seconds of rolling, some looking around, at least one jump (a screenshot is the floor if capture fails: roll visible in frame, jump captured). Submit on Classroom, commit and push. That capture is CP2's build-completion evidence. Movement is DONE after today: say it out loud.

**Exit ticket**

1. Without the gate, holding Space turns the ball into a rocket. What does the conditional actually check, and what set it false?
2. After the first jump, canJump stays false forever. Which function reopens the gate, and what does it check?
3. The reset checks "almost stopped moving up" instead of real ground detection. Why is that a heuristic, not the real thing - and what real bug could it still cause? (honest answers count)
4. Look and Roll both call value.Get<FVector2D>() but feed the numbers somewhere different. One sentence: where does each pair go?

## Agenda

1. Do Now review (5 min)
2. Video 10 on EdPuzzle: Look, Jump, both bug directions, the Tick reset, the gamepad close (watch-only for students without a controller; runtime TBD - publish by Mon 11/2; plan ~25-30 min)
3. Follow-along: Look compiled first, then Jump + the reset (~10 min)
4. Independent: drive-look-jump capture, catch-up lane (rest of block)
5. Exit ticket (3 min)

*Unnumbered, parallel: students still inside Video 09 finish it here and roll into Video 10 self-paced; CP2 (Fri 11/13 per the semester map) collects all three movements, so this block's catch-up matters before the checkpoint. Standing close: close Unreal, full compile, commit and push.*

## Materials

| Item | Link |
|------|------|
| Video 10 on EdPuzzle | NOT YET PUBLISHED - publish deadline: Mon 11/2 (link goes here) |
| Starter project repo | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |
| Paste blocks | Ride the video description when published |
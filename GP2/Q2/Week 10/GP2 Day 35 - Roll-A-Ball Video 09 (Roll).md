---
course: GP2
quarter: Q2
day: 35
date: Wed 10/28
day_type: A
chunk: '3'
type: new idea (EdPuzzle)
class_minutes: 48
unit: 4
status: active
updated: 2026-10-23
sub: false
riddle: What runs all around a backyard, yet never moves?
joke: What did one elevator say to the other elevator?
---

# GP2 Day 35 - Roll-A-Ball Video 09 (Roll)

Day 35 (A day, 48 min). Live focus: Video 09 - Roll, the payoff video: the first thing physically moves. The Roll function reads the input value, the spin-axis story explains the one line that looks backwards and isn't, angular impulse makes the ball honest, and RollSpeed finally does real work. Students arrive from Video 08 with three bound functions firing prints.

## Learning Target

Fill the Roll function: read the input action's value as a 2D number pair, explain why a physics ball SPINS rather than slides (and why the forward-spin axis holds the right vector), scale the input by RollSpeed, apply both impulses, and debug wrong-direction movement from the on-screen value print - driving the ball under WASD by the end.

**Standards:** CSTA 3B-AP-14 (construct solutions using student-created components: procedures) · ISBE 11-12.AP.16 (same verb, ISBE wording) · ACT AF 401 · WME 402 (carried)

## Shared Block

| Field | Value |
|---|---|
| Learning target | Type the Roll function's body so WASD drives the ball, at a RollSpeed the student chose, and read the value print well enough to find a wrong-direction bug with it. |
| New concept | Physics-driven movement via AddAngularImpulseInDegrees: an angular impulse spins the ball about an axis, and rolling forward means spinning about the right axis - the "axle" story. Reading the input value with value.Get<FVector2D>() is the payload half of yesterday's wire. |
| Content standard | CSTA 3B-AP-14 (construct solutions using student-created components: procedures) |
| ACT standard | AF 401 (rate reasoning: axis value x RollSpeed scales the impulse) · WME 402 (carried) |
| Unit performance task link | CP2's core deliverable is Roll working; the drive capture at the student's own RollSpeed is CP2's Roll line. The wrong-way bug hunt is the same hunting frame the checkpoint's evidence chain rides on. |
| Rides on | Day 33's binding (the value arrives through it), V07's RollSpeed UPROPERTY (the knob gets a job), V04's error ritual (the missing-include error reads like the family from that video). |
| Vocabulary | value.Get<FVector2D>(), MovementVector, angular impulse (AddAngularImpulseInDegrees), spin axis (ForwardSpinAxis holds the right vector - deliberate), GetControlRotation, GetRightVector, GetForwardVector, KismetMathLibrary include, predict-before-run |
| Prior-knowledge gaps | Vector math and direction in 3D (the standing gap): the axis framing is kept shallow on purpose - name says what the ball does, value says where the axle points, no cross products. Signed values: negative input is the opposite spin. |

**Do Now**

1. Yesterday the wire carried a print. Name the full chain a W press travels, end to end, in five words or fewer (key system, action, binding, function).
2. From last year's Blueprint Roll-A-Ball: what did Add Angular Impulse do to the ball that Add Force would not have? (It made it spin/roll.)
3. Preview: before we run anything today - when you press W, what do you EXPECT the value print to show for X and Y? (Guess, then we prove it with the print.)

**Worked example**

The video IS the worked example: open Video 08's stub Roll, read the value with value.Get<FVector2D>(), replace the fire print with a print of BOTH values and read the pairs out loud for W and A (the mapping, proven, not explained), the spin-not-slide beat ("shove a ball and it spins - the axis line names the spin, the value says where the axle points"), type the first impulse block (right vector, MovementVector.X, RollSpeed) and paste-adjust the second (forward vector, MovementVector.Y), compile, run, watch the ball roll, retune RollSpeed if the feel is off, then the wrong-way bug: swap the two axis lines, roll goes sideways, the value print still reads correct, so the hunt moves to the physics block - swap back, forward again.

**Guided practice**

Students type the first block live, paste and adjust the second, with the include line added first thing (the missing-include error is the family from Video 04's ritual). Circulation triage priority: value print shows zeros for one axis (mapping or Swizzle from last year's shape), compile fails on KismetMathLibrary (include line), ball rolls the wrong way (axis swap - make them read the print before touching the lines), ball barely crawls (RollSpeed still at default - the knob's first real moment).

**Independent work**

The challenge, per the video: set RollSpeed to a value YOU pick (default 20.0f; slower or faster, your call), take a short screen capture driving the ball around with WASD, submit on Classroom, commit and push. That capture is CP2's Roll line. Students still inside Video 08 from Tuesday catch up in the same block and enter Roll before Friday's tuning day.

**Exit ticket**

1. One line in this video names the variable ForwardSpinAxis but stores the RIGHT vector. In one sentence: why is that correct and not a bug?
2. The value print taught us which numbers carry W/S and which carry A/D. Why do we print before we implement instead of trusting the mapping?
3. You double RollSpeed and the ball's movement roughly doubles. What is multiplying what, in one sentence?
4. Your input values print correctly, but the ball rolls sideways when you press W. Which lines are the suspect family, and what is the fix?

## Agenda

1. Do Now review (5 min)
2. Video 09 on EdPuzzle: value read, spin axes, Roll body, wrong-way bug (runtime TBD - publish Mon 10/26 night; plan ~22-27 min)
3. Follow-along: include, paste-adjust, compile, first drive (~10 min)
4. Independent: own RollSpeed, drive capture, catch-up lane (rest of block)
5. Exit ticket (3 min)

*Unnumbered, parallel: Video 08's Look and Jump prints still fire in this video's end state - expected, they keep working until Video 10. Standing close: close Unreal, full compile, commit and push.*

## Materials

| Item | Link |
|------|------|
| Video 09 on EdPuzzle | NOT YET PUBLISHED - publish deadline: Mon 10/26 night (link goes here) |
| Starter project repo | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |
| Paste blocks | Ride the video description when published |
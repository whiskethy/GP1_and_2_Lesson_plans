---
course: GP2
quarter: Q2
day: 38
date: Fri 11/6
day_type: C
chunk: "3"
type: new idea (EdPuzzle)
class_minutes: 72
unit: 4
status: active
sub: false
updated: 2026-10-30
riddle: What is black when it's clean and white when it's dirty?
joke: What do you call an unpredictable camera?
agenda:
  - {"title":"Do Now review","min":5,"pinned":true}
  - {"title":"Video 09 on EdPuzzle: value read, spin axes, Roll body, wrong-way bug","min":47,"kind":"video"}
  - {"title":"Independent: one predict-before-run round, own RollSpeed, drive capture + submission, catch-up lane for Video 08","min":15}
  - {"title":"Exit ticket","min":5,"pinned":true}
---

# GP2 Day 38 - Roll-A-Ball Video 09 (Roll and Capture)

Day 38 (C day, 72 min). Live focus: Video 09 - Roll, the payoff video: the first thing physically moves. The Roll function reads the input value, the spin-axis story explains the one line that looks backwards and isn't, angular impulse makes the ball honest, and RollSpeed finally does real work. The C day's extra minutes all go to the back half: typing the Roll body, the prediction-before-run ritual on the value print, and the drive capture at a RollSpeed the student picked. Students arrive from Video 08 with three bound functions firing prints.

## Learning Target

Fill the Roll function: read the input action's value as a 2D number pair, explain why a physics ball SPINS rather than slides (and why the forward-spin axis holds the right vector), scale the input by RollSpeed, apply both impulses, and debug wrong-direction movement from the on-screen value print - then drive the ball under WASD at a value you chose and capture it.

**Standards:** CSTA 3B-AP-14 (construct solutions using student-created components: procedures) · ISBE 11-12.AP.16 (same verb, ISBE wording) · ACT AF 401 · WME 402 (carried)

## Shared Block

| Field | Value |
|---|---|
| Learning target | Type the Roll function's body so WASD drives the ball, at a RollSpeed the student chose, and read the value print well enough to find a wrong-direction bug with it. |
| New concept | Physics-driven movement via AddAngularImpulseInDegrees: an angular impulse spins the ball about an axis, and rolling forward means spinning about the right axis - the "axle" story. Reading the input value with value.Get<FVector2D>() is the payload half of the Video 08 wire. |
| Content standard | CSTA 3B-AP-14 (construct solutions using student-created components: procedures) |
| ACT standard | AF 401 (rate reasoning: axis value x RollSpeed scales the impulse) · WME 402 (carried) |
| Unit performance task link | CP2's core deliverable is Roll working; the drive capture at the student's own RollSpeed is CP2's Roll line, and Monday's tuning workshop builds its table directly on the value this block commits. The wrong-way bug hunt is the same hunting frame the checkpoint's evidence chain rides on. |
| Rides on | Video 08's binding (the value arrives through it), V07's RollSpeed UPROPERTY (the knob gets a job), V04's error ritual (the missing-include error reads like the family from that video). |
| Vocabulary | value.Get<FVector2D>(), MovementVector, angular impulse (AddAngularImpulseInDegrees), spin axis (ForwardSpinAxis holds the right vector - deliberate), GetControlRotation, GetRightVector, GetForwardVector, KismetMathLibrary include, predict-before-run |
| Prior-knowledge gaps | Vector math and direction in 3D (the standing gap): the axis framing is kept shallow on purpose - name says what the ball does, value says where the axle points, no cross products. Signed values: negative input is the opposite spin. |

## Do Now

| # | Type | Question |
|---|------|----------|
| 1 | Review | The Video 08 wire carried a print. Name the full chain a W press travels, end to end, in five words or fewer (key system, action, binding, function). |
| 2 | Review | In the Video 08 assets, IA_Roll and IA_Look are Axis2D and IA_Jump is Boolean. Why does Roll need the 2D type? |
| 3 | Preview | When you press W and the value print appears, what do you EXPECT it to show for X and Y? (Guess now; the print proves it in this video.) |

## Worked example

The video IS the worked example: open Video 08's stub Roll, read the value with value.Get<FVector2D>(), replace the fire print with a print of BOTH values and read the pairs out loud for W and A (the mapping, proven, not explained), the spin-not-slide beat ("shove a ball and it spins - the axis line names the spin, the value says where the axle points"), type the first impulse block (right vector, MovementVector.X, RollSpeed) and paste-adjust the second (forward vector, MovementVector.Y), compile, run, watch the ball roll, retune RollSpeed if the feel is off, then the wrong-way bug: swap the two axis lines, roll goes sideways, the value print still reads correct, so the hunt moves to the physics block - swap back, forward again.

## Guided practice

Students type the first block live, paste and adjust the second, with the include line added first thing (the missing-include error is the family from Video 04's ritual). Circulation triage priority: value print shows zeros for one axis (mapping or Swizzle from Video 08's asset build), compile fails on KismetMathLibrary (include line), ball rolls the wrong way (axis swap - make them read the print before touching the lines), ball barely crawls (RollSpeed still at default - the knob's first real moment).

## Independent work

The challenge, per the video: set RollSpeed to a value YOU pick (default 20.0f; slower or faster, your call), take a short screen capture driving the ball around with WASD, submit on Classroom, commit and push. That capture is CP2's Roll line. The C day's extra minutes back this: the capture is due in this block, and anyone still inside Video 08 catches up in the same block's lane and enters Roll before leaving. Before the capture, one predict-before-run round: name your RollSpeed, predict roughly how fast W carries you, run, say what actually happened (the habit the tuning workshop formalizes).

## Exit ticket

1. One line in this video names the variable ForwardSpinAxis but stores the RIGHT vector. In one sentence: why is that correct and not a bug?
2. The value print taught us which numbers carry W/S and which carry A/D. Why do we print before we implement instead of trusting the mapping?
3. You double RollSpeed and the ball's movement roughly doubles. What is multiplying what, in one sentence?
4. Your input values print correctly, but the ball rolls sideways when you press W. Which lines are the suspect family, and what is the fix?

## Agenda (C day, 72 min)

1. Do Now review (5 min)
2. Video 09 on EdPuzzle: value read, spin axes, Roll body, wrong-way bug (47 min)
3. Independent: one predict-before-run round, own RollSpeed, drive capture + submission, catch-up lane for Video 08 (15 min)
4. Exit ticket (5 min)

## Materials

| Item | Link |
|------|------|
| Video 09 on EdPuzzle | Added here when the video publishes |
| Starter project repo | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |
| Paste blocks | Ride the video description when published |


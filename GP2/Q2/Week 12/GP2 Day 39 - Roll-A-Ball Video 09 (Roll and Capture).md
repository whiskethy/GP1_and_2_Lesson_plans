---
course: GP2
quarter: Q2
day: 39
date: Mon 11/9
day_type: A
chunk: 3
type: new idea (EdPuzzle)
class_minutes: 48
unit: 4
status: active
sub: false
updated: 2026-11-09
riddle: What comes once in a minute, twice in a moment, but never in a thousand years?
joke: How does a penguin build a house?
agenda:
  - {"title":"Do Now review","min":5,"pinned":true}
  - {"title":"Video 09","min":37,"kind":"video"}
  - {"title":"Commit checkpoint + exit ticket","min":6,"pinned":true,"notes":"capture submitted, close Unreal, full compile, commit and push"}
---

# GP2 Day 39 - Roll-A-Ball Video 09 (Roll and Capture)

Day 39 (A day, 48 min). Live focus: Video 09 - Roll, the payoff video: the first thing physically moves. Day one of the two-block V09 push: the video (self-paced with typing beats) carries the whole lesson, and Tuesday's finish block owns the drive capture. The Roll function reads the input value, the spin-axis story explains the one line that looks backwards and isn't, angular impulse makes the ball honest, and RollSpeed finally does real work. Students arrive with the Video 08 end state compiling and their gamepad working alongside the keyboard - the challenge build.

## Learning Target

Fill the Roll function: read the input action's value as a 2D number pair, explain why a physics ball SPINS rather than slides (and why the forward-spin axis holds the right vector), scale the input by RollSpeed, apply both impulses, and fix the backwards A/D pair at the input mapping when the first drive reveals it - with the whole body compiling by the bell; the drive capture rides Tuesday.

**Standards:** CSTA 3B-AP-14 (construct solutions using student-created components: procedures) · ISBE 11-12.AP.16 (same verb, ISBE wording) · ACT AF 401 · WME 402 (carried)

## Shared Block

| Field | Value |
|---|---|
| Learning target | Run your own two-case test of the jump gate (and the input hunt ladder if you need it), state the result of each case before you run it, and end the block with a committed, demonstrable build. |
| New concept | Physics-driven movement via AddAngularImpulseInDegrees: an angular impulse spins the ball about an axis, and rolling forward means spinning about the right axis - the "axle" story. Reading the input value with value.Get<FVector2D>() is the payload half of the Video 08 wire. |
| Content standard | CSTA 3B-AP-14 (construct solutions using student-created components: procedures) |
| ACT standard | AF 401 (rate reasoning: axis value x RollSpeed scales the impulse) · WME 402 (carried) |
| Unit performance task link | CP2's core deliverable is Roll working; Tuesday's drive capture at the student's own RollSpeed is CP2's Roll line. The backwards A/D diagnosis is the same hunting frame (symptom, evidence, suspect, fix) the checkpoint's evidence chain rides on - and the fix landing in the IMC teaches that the chain runs all the way up. |
| Rides on | Video 08's binding (the value arrives through it - now proven on two devices), V07's RollSpeed UPROPERTY (the knob gets a job), V04's error ritual (the missing-include error reads like the family from that video). |
| Vocabulary | value.Get<FVector2D>(), MovementVector, angular impulse (AddAngularImpulseInDegrees), spin axis (ForwardSpinAxis holds the right vector - deliberate), GetControlRotation, GetRightVector, GetForwardVector, KismetMathLibrary include, predict-before-run |
| Prior-knowledge gaps | Vector math and direction in 3D (the standing gap): the axis framing is kept shallow on purpose - name says what the ball does, value says where the axle points, no cross products. Signed values: negative input is the opposite spin. |

## Do Now

| # | Type | Question |
|---|------|----------|
| 1 | Review | The canJump gate: which line flips it to false, and which function flips it back? |
| 2 | Review | You hold Space and the ball fires upward every single frame. Which of the gate's two lines is missing, and why does the impulse repeat? |
| 3 | Preview | Today YOU choose which line to break first. Which family do you want to seed first - the rocket or the dead jump - and what do you expect to see before you break it? |

## Worked example

The video IS the worked example: open the stub Roll, read the value with value.Get<FVector2D>(), replace the fire print with a print of BOTH values and read the pairs out loud for W and A (the mapping, proven, not explained), the spin-not-slide beat ("shove a ball and it spins - the axis line names the spin, the value says where the axle points"), type the first impulse block (right vector, MovementVector.X, RollSpeed) and paste-adjust the second (ForwardSpinAxis from GetForwardVector, MovementVector.Y), compile, run, watch the ball roll, RollSpeed raised on camera and set back to 20 with no recompile (the knob, proven), then the backwards A/D pair, discovered on the first drive and fixed in the IMC - not in C++: A keeps only the swizzle, D gets swizzle then negate, order matters.

## Guided practice

Students type the first block live, paste and adjust the second, with the include line added first thing (the missing-include error is the family from Video 04's ritual). Circulation triage priority: value print shows zeros for one axis (mapping or Swizzle from Video 08's asset build), compile fails on KismetMathLibrary (include line), ball rolls the wrong way (suspects first the IMC's A/D modifiers, then the spin-axis lines - make them read the value print first; if the print reads correct, the mapping is the suspect, exactly the take's bug), ball barely crawls (RollSpeed still at default - the knob's first real moment). The ~80% bar: by the block's end, 9+ of 11 has the Roll body compiling with both impulses.

## Independent work

The typing IS the block's work: pause, type, compile, keep moving. Students still short of the V08 end state or the gamepad mappings run the parallel catch-up lane (V08 rewatch link, then the challenge's three gamepad lines), then roll into V09 typing behind their lane. At the bell: close Unreal, full compile, commit and push with a message naming Video 09. Tuesday's finish block owns the RollSpeed choice, the predict-before-run round, and the drive capture, so nothing capture-shaped is due today.

## Exit ticket

1. Your two test cases: what you predicted for each, and what you actually saw.
2. The Tick reset's check "almost stopped moving up" is a heuristic. In one sentence: what could still go wrong for a player even with the gate "working"?
3. Checkpoint 2 is coming up this week. Name the one part of movement you would want the checkpoint to see you demonstrate first, and why.

## Agenda (A day, 48 min)

1. Do Now review (5 min)
2. Video 09 (37 min)
3. Commit checkpoint + exit ticket (6 min) - capture submitted, close Unreal, full compile, commit and push

## Materials

| Item | Link |
|------|------|
| Starter project repo | https://github.com/ChicagoTechAcademy/UE_Roll_a_Ball |
| Test-case record | Student's own Doc/card - case, prediction, observed is the artifact |
| Videos 09-10 (rewatch, catch-up lane) | same EdPuzzle links as Days 36/38 |
| Video 09 on EdPuzzle | https://edpuzzle.com/media/6af1fb04f209ff15f367df4c |

### EdPuzzle embeds

<iframe width="470" height="404" src="https://edpuzzle.com/embed/media/6af1fb04f209ff15f367df4c" frameborder="0" allowfullscreen></iframe>

